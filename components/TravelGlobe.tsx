'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import PhotoMarker from './PhotoMarker';
import type { TravelPhoto } from '@/app/data/travelPhotos';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(
  () => import('react-globe.gl').then((mod) => mod.default || mod),
  { 
    ssr: false,
    loading: () => null, // Don't show anything while loading
  }
);

interface TravelGlobeProps {
  photos: TravelPhoto[];
}

interface MarkerData {
  lat: number;
  lng: number;
  photo: TravelPhoto;
}

export default function TravelGlobe({ photos }: TravelGlobeProps) {
  const globeRef = useRef<any>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<TravelPhoto | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!globeRef.current || !isClient) return;

    // Configure auto-rotation after a short delay to ensure globe is initialized
    const timer = setTimeout(() => {
      const globe = globeRef.current;
      if (globe && globe.controls) {
        try {
          const controls = globe.controls();
          if (controls) {
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.5;
            controls.enableZoom = true;
            controls.enablePan = false;
          }
        } catch (e) {
          // Controls might not be available immediately, that's okay
          console.debug('Globe controls not yet available');
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  // Convert photos to markers format for react-globe.gl
  const markers: MarkerData[] = photos.length > 0 
    ? photos.map((photo) => ({
        lat: photo.lat,
        lng: photo.lng,
        photo,
      }))
    : [];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -right-[150px] -bottom-[150px] md:-right-[200px] md:-bottom-[200px] lg:-right-[250px] lg:-bottom-[250px] w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-auto z-0"
      >
        <div className="w-full h-full relative">
          <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            htmlElementsData={markers}
            htmlElement={(d: MarkerData) => {
              const div = document.createElement('div');
              div.style.width = '48px';
              div.style.height = '48px';
              div.style.borderRadius = '50%';
              div.style.overflow = 'hidden';
              div.style.border = '2px solid #C4A77D';
              div.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
              div.style.cursor = 'pointer';
              div.style.transition = 'transform 0.2s';
              div.style.position = 'relative';
              
              const img = document.createElement('img');
              img.src = d.photo.imagePath;
              img.alt = d.photo.alt;
              img.style.width = '100%';
              img.style.height = '100%';
              img.style.objectFit = 'cover';
              
              div.appendChild(img);
              
              div.onclick = () => setSelectedPhoto(d.photo);
              div.onmouseenter = () => {
                div.style.transform = 'scale(1.2)';
              };
              div.onmouseleave = () => {
                div.style.transform = 'scale(1)';
              };
              
              return div;
            }}
            htmlLat={(d: MarkerData) => d.lat}
            htmlLng={(d: MarkerData) => d.lng}
            htmlAltitude={0.01}
            // Globe styling - earth tones
            globeMaterial={{
              color: '#8B7355', // earth-600
              emissive: '#4A3728', // earth-800
              emissiveIntensity: 0.1,
            }}
            // Atmosphere
            atmosphereColor="#C4A77D" // earth-400
            atmosphereAltitude={0.15}
            // Controls
            enablePointerInteraction={true}
            // Performance
            animateIn={true}
            // Opacity to match moon
            style={{
              opacity: 0.3,
            }}
          />
        </div>
      </motion.div>

      {/* Photo modal */}
      {selectedPhoto && (
        <PhotoMarker
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

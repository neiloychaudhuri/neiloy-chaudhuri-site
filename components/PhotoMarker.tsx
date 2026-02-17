'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import type { TravelPhoto } from '@/app/data/travelPhotos';

interface PhotoMarkerProps {
  photo: TravelPhoto;
  onClose: () => void;
}

export default function PhotoMarker({ photo, onClose }: PhotoMarkerProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[90vh] mx-4 bg-earth-50 dark:bg-earth-900 rounded-lg overflow-hidden shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-earth-900/80 dark:bg-earth-100/80 text-earth-50 dark:text-earth-900 hover:bg-earth-800 dark:hover:bg-earth-200 transition-colors"
            aria-label="Close photo"
          >
            <FiX className="w-5 h-5" />
          </button>

          <div className="relative w-full h-[70vh] max-h-[600px]">
            <Image
              src={photo.imagePath}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          <div className="p-6 bg-earth-50 dark:bg-earth-900">
            <h3 className="text-xl font-semibold text-earth-800 dark:text-earth-200 mb-1">
              {photo.location}
            </h3>
            {photo.date && (
              <p className="text-sm text-earth-600 dark:text-earth-400">
                {photo.date}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface PhotoThumbnailProps {
  photo: TravelPhoto;
  onHover: (photo: TravelPhoto | null) => void;
  onClick: (photo: TravelPhoto) => void;
}

export function PhotoThumbnail({ photo, onHover, onClick }: PhotoThumbnailProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(photo);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
      onClick={() => onClick(photo)}
    >
      {/* Thumbnail marker */}
      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-earth-400 dark:ring-earth-500 shadow-lg hover:ring-earth-500 dark:hover:ring-earth-400 transition-all hover:scale-110">
        <Image
          src={photo.imagePath}
          alt={photo.alt}
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Hover tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-earth-900/90 dark:bg-earth-100/90 backdrop-blur-sm rounded-lg shadow-xl pointer-events-none z-50"
          >
            <p className="text-xs font-semibold text-earth-50 dark:text-earth-900 mb-1">
              {photo.location}
            </p>
            {photo.date && (
              <p className="text-xs text-earth-200 dark:text-earth-700">
                {photo.date}
              </p>
            )}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-earth-900/90 dark:border-t-earth-100/90" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

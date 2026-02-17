export interface TravelPhoto {
  id: string;
  imagePath: string; // e.g., "/photos/barcelona.jpg"
  lat: number; // latitude (-90 to 90)
  lng: number; // longitude (-180 to 180)
  location: string; // e.g., "Barcelona, Spain"
  date?: string; // optional date
  alt: string; // alt text for image
}

// Example travel photos - you can add your actual photos here
// For now, using placeholder data that you can replace with your actual travel photos
export const travelPhotos: TravelPhoto[] = [
  // Add your travel photos here with their coordinates
  // Example:
  // {
  //   id: 'barcelona-1',
  //   imagePath: '/photos/barcelona-sagrada.jpg',
  //   lat: 41.4036,
  //   lng: 2.1744,
  //   location: 'Barcelona, Spain',
  //   date: '2024',
  //   alt: 'Sagradamilia'
  // },
  {
    id: "barcelona-sagrada.png",
    imagePath: "/photos/barcelona-sagrada.png",
    lat: 41.4036,
    lng: 2.1744,
    location: "Barcelona, Spain",
    date: "2025",
    alt: "Sagrada Familia",
  },
];

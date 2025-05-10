export interface Destination {
  id: number;
  destination: string;
  price: string;
  duration: string;
  rating: string;
  description: string;
  images: string[];
  itinerary: string[];
  featured?: boolean;
}

export const destinations: Destination[] = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    price: "800",
    duration: "7 days",
    rating: "4.8",
    description: "Experience the perfect blend of stunning beaches, lush rice terraces, and vibrant culture in this tropical paradise. Bali offers a unique mix of relaxation and adventure.",
    images: [
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg",
      "https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg",
      "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg",
    ],
    itinerary: [
      "Day 1: Arrival in Bali",
      "Day 2: Visit to Uluwatu Temple",
      "Day 3: Snorkeling at Nusa Dua",
      "Day 4: Local market tour",
      "Day 5-7: Relax at beach resort"
    ],
    featured: true
  },
  {
    id: 2,
    destination: "Kyoto, Japan",
    price: "1200",
    duration: "5 days",
    rating: "4.7",
    description: "Immerse yourself in Japan's cultural heart with ancient temples, traditional tea houses, and breathtaking cherry blossoms. Experience authentic Japanese cuisine and traditions.",
    images: [
      "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg",
      "https://images.pexels.com/photos/5317294/pexels-photo-5317294.jpeg",
      "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg",
    ],
    itinerary: [
      "Day 1: Arrival in Kyoto",
      "Day 2: Tour of Kinkaku-ji Temple",
      "Day 3: Cherry blossom viewing",
      "Day 4: Local food experience",
      "Day 5: Departure"
    ],
    featured: true
  },
  {
    id: 3,
    destination: "Santorini, Greece",
    price: "1500",
    duration: "6 days",
    rating: "4.9",
    description: "Discover the iconic white and blue architecture perched on volcanic cliffs overlooking the crystal-clear Aegean Sea. Enjoy spectacular sunsets and Mediterranean cuisine.",
    images: [
      "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
      "https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg",
      "https://images.pexels.com/photos/3224190/pexels-photo-3224190.jpeg"
    ],
    itinerary: [
      "Day 1: Arrival in Santorini",
      "Day 2: Explore Oia Village",
      "Day 3: Catamaran Cruise",
      "Day 4: Wine Tasting Tour",
      "Day 5: Beach Day at Red Beach",
      "Day 6: Departure"
    ]
  },
  {
    id: 4,
    destination: "Machu Picchu, Peru",
    price: "1800",
    duration: "8 days",
    rating: "4.8",
    description: "Trek through the ancient Inca Trail to discover one of the world's most spectacular archaeological sites nestled in the Andes mountains.",
    images: [
      "https://images.pexels.com/photos/2105835/pexels-photo-2105835.jpeg",
      "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg",
      "https://images.pexels.com/photos/6650418/pexels-photo-6650418.jpeg"
    ],
    itinerary: [
      "Day 1-2: Acclimatization in Cusco",
      "Day 3-6: Inca Trail Trek",
      "Day 7: Machu Picchu Exploration",
      "Day 8: Return to Cusco and Departure"
    ]
  }
];
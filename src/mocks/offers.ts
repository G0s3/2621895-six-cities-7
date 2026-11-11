type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 150,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.37454, longitude: 4.897976, zoom: 8 },
    },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
  },
  {
    id: 'b67dd210-3c5e-4a90-b272-901540d4dba6',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: { latitude: 48.85341, longitude: 2.3488, zoom: 8 },
    },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
  },
  {
    id: 'e4f9d6c2-1a3b-4f8e-9c7d-2b5e8a1f4d3c',
    title: 'Wood and stone place',
    type: 'house',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: { latitude: 50.938361, longitude: 6.959974, zoom: 8 },
    },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
  },
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    title: 'The house in forest',
    type: 'hotel',
    price: 200,
    city: {
      name: 'Amsterdam',
      location: { latitude: 50.846557, longitude: 4.351697, zoom: 8 },
    },
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
  },

  // Paris
  {
    id: 'p1-1234-5678-abcd-ef0987654321',
    title: 'Lovely apartment near the Eiffel Tower',
    type: 'apartment',
    price: 220,
    city: {
      name: 'Paris',
      location: { latitude: 48.85341, longitude: 2.3488, zoom: 8 },
    },
    location: { latitude: 48.8614, longitude: 2.3522, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
  },
  {
    id: 'p2-2345-6789-bcde-f01234567890',
    title: 'Cozy room in Montmartre',
    type: 'room',
    price: 95,
    city: {
      name: 'Paris',
      location: { latitude: 48.85341, longitude: 2.3488, zoom: 8 },
    },
    location: { latitude: 48.8864, longitude: 2.3431, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
  },
  {
    id: 'p3-3456-789a-cdef-012345678901',
    title: 'Modern studio in Le Marais',
    type: 'apartment',
    price: 175,
    city: {
      name: 'Paris',
      location: { latitude: 48.85341, longitude: 2.3488, zoom: 8 },
    },
    location: { latitude: 48.8566, longitude: 2.3607, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
  },

  // Cologne
  {
    id: 'c1-5678-9abc-ef01-234567890123',
    title: 'Apartment with Cathedral view',
    type: 'apartment',
    price: 140,
    city: {
      name: 'Cologne',
      location: { latitude: 50.938361, longitude: 6.959974, zoom: 8 },
    },
    location: { latitude: 50.9412, longitude: 6.9617, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
  },
  {
    id: 'c2-6789-abcd-f012-345678901234',
    title: 'Comfortable room near Hohenzollern Bridge',
    type: 'room',
    price: 70,
    city: {
      name: 'Cologne',
      location: { latitude: 50.938361, longitude: 6.959974, zoom: 8 },
    },
    location: { latitude: 50.9353, longitude: 6.9603, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
  },
  {
    id: 'c3-789a-bcde-0123-456789012345',
    title: 'Boutique hotel in the Old Town',
    type: 'hotel',
    price: 185,
    city: {
      name: 'Cologne',
      location: { latitude: 50.938361, longitude: 6.959974, zoom: 8 },
    },
    location: { latitude: 50.9333, longitude: 6.9500, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
  },

  // Brussels
  {
    id: 'br1-89ab-cdef-1234-567890123456',
    title: 'Spacious flat near Grand Place',
    type: 'apartment',
    price: 160,
    city: {
      name: 'Brussels',
      location: { latitude: 50.846557, longitude: 4.351697, zoom: 8 },
    },
    location: { latitude: 50.8503, longitude: 4.3517, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
  },
  {
    id: 'br2-9abc-def0-2345-678901234567',
    title: 'Quiet studio in Ixelles',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Brussels',
      location: { latitude: 50.846557, longitude: 4.351697, zoom: 8 },
    },
    location: { latitude: 50.8275, longitude: 4.3680, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
  },
  {
    id: 'br3-abcd-ef01-3456-789012345678',
    title: 'Historic townhouse in Sablon',
    type: 'house',
    price: 270,
    city: {
      name: 'Brussels',
      location: { latitude: 50.846557, longitude: 4.351697, zoom: 8 },
    },
    location: { latitude: 50.8422, longitude: 4.3540, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
  },

  // Hamburg
  {
    id: 'h1-cdef-0123-5678-901234567890',
    title: 'Loft apartment in the Speicherstadt',
    type: 'apartment',
    price: 190,
    city: {
      name: 'Hamburg',
      location: { latitude: 53.550341, longitude: 10.000654, zoom: 8 },
    },
    location: { latitude: 53.5436, longitude: 9.9994, zoom: 16 },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
  },
  {
    id: 'h2-def0-1234-6789-012345678901',
    title: 'Cozy room near Reeperbahn',
    type: 'room',
    price: 60,
    city: {
      name: 'Hamburg',
      location: { latitude: 53.550341, longitude: 10.000654, zoom: 8 },
    },
    location: { latitude: 53.5498, longitude: 9.9633, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
  },
  {
    id: 'h3-ef01-2345-789a-123456789012',
    title: 'Harbour view hotel suite',
    type: 'hotel',
    price: 230,
    city: {
      name: 'Hamburg',
      location: { latitude: 53.550341, longitude: 10.000654, zoom: 8 },
    },
    location: { latitude: 53.5460, longitude: 9.9681, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
  },

  // Dusseldorf
  {
    id: 'd1-f012-3456-89ab-234567890123',
    title: 'Elegant apartment in Altstadt',
    type: 'apartment',
    price: 145,
    city: {
      name: 'Dusseldorf',
      location: { latitude: 51.225402, longitude: 6.776314, zoom: 8 },
    },
    location: { latitude: 51.2254, longitude: 6.7762, zoom: 16 },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
  },
  {
    id: 'd2-0123-4567-9abc-345678901234',
    title: 'Modern studio near MedienHafen',
    type: 'apartment',
    price: 125,
    city: {
      name: 'Dusseldorf',
      location: { latitude: 51.225402, longitude: 6.776314, zoom: 8 },
    },
    location: { latitude: 51.2135, longitude: 6.7627, zoom: 16 },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
  },
  {
    id: 'd3-1234-5678-abcd-456789012345',
    title: 'Quiet room on Königsallee',
    type: 'room',
    price: 90,
    city: {
      name: 'Dusseldorf',
      location: { latitude: 51.225402, longitude: 6.776314, zoom: 8 },
    },
    location: { latitude: 51.2192, longitude: 6.7847, zoom: 16 },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
  },
];

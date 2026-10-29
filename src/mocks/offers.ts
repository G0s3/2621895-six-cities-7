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
];

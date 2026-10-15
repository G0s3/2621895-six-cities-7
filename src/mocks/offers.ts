export type Offer = {
  id: number;
  picture: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  isFavorite: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  city: string;
};

export const offers: Offer[] = [
  {
    id: 1,
    picture: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    isPremium: true,
    price: 150,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    isFavorite: false,
    rating: 5,
    city: 'Amsterdam',
  },
  {
    id: 2,
    picture: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    isPremium: false,
    price: 80,
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    isFavorite: true,
    rating: 4,
    city: 'Paris',
  },
  {
    id: 3,
    picture: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    isPremium: false,
    price: 132,
    title: 'Wood and stone place',
    type: 'house',
    isFavorite: false,
    rating: 4,
    city: 'Cologne',
  },
  {
    id: 4,
    picture: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    isPremium: true,
    price: 200,
    title: 'The house in forest',
    type: 'hotel',
    isFavorite: true,
    rating: 3,
    city: 'Brussels',
  },
];

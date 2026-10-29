export type Review = {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  rating: number;
  comment: string;
  date: string;
};

export const reviews: Review[] = [
  {
    id: '1',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    rating: 4,
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24T00:00:00.000Z',
  },
];

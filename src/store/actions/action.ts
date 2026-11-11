import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../../mocks/offers';

export const Action = {
  CITY_CHANGE: 'CITY_CHANGE',
  POPULATING_OFFERS: 'POPULATING_OFFERS',
};

export const cityChangeAction = createAction<string>(Action.CITY_CHANGE);
export const populatingOffersAction = createAction<Offer[]>(
  Action.POPULATING_OFFERS,
);

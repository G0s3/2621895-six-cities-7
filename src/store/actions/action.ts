import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, Offer } from '../../types';

export const Action = {
  CITY_CHANGE: 'CITY_CHANGE',
  POPULATING_OFFERS: 'POPULATING_OFFERS',
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
};

export const cityChangeAction = createAction<string>(Action.CITY_CHANGE);
export const populatingOffersAction = createAction<Offer[]>(
  Action.POPULATING_OFFERS,
);
export const setAuthorizationStatusAction = createAction<AuthorizationStatus>(
  Action.SET_AUTHORIZATION_STATUS,
);

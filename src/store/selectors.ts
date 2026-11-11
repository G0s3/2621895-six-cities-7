import { RootState } from '.';

export const selectCity = (state: RootState) => state.city;

export const selectOffersByCity = (state: RootState) =>
  state.offers.filter((offer) => offer.city.name === state.city);

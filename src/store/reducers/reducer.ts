import { createReducer } from '@reduxjs/toolkit';
import { cityChangeAction, populatingOffersAction } from '../actions/action';
import { Offer, offers } from '../../mocks/offers';

type InitialState = {
  city: string;
  offers: Offer[];
};

const initialState: InitialState = {
  city: 'Paris',
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChangeAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(populatingOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});

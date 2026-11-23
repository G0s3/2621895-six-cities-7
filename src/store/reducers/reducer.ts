import { createReducer } from '@reduxjs/toolkit';
import { cityChangeAction, populatingOffersAction } from '../actions/action';
import { Offer } from '../../types';
import { fetchOffersAction } from '../api-actions';

type InitialState = {
  city: string;
  offers: Offer[];
  hasError: boolean;
  isLoading: boolean;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  isLoading: false,
  hasError: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChangeAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(populatingOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isLoading = false;
      state.hasError = true;
    });
});

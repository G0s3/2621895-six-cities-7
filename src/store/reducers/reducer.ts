import { createReducer } from '@reduxjs/toolkit';
import {
  cityChangeAction,
  populatingOffersAction,
  setAuthorizationStatusAction,
} from '../actions/action';
import { AuthorizationStatus, Offer } from '../../types';
import {
  fetchOffersAction,
  fetchUserAuthorizationStatusAction,
} from '../api-actions';

type InitialState = {
  city: string;
  offers: Offer[];
  hasError: boolean;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  isLoading: false,
  hasError: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChangeAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(populatingOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setAuthorizationStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(fetchUserAuthorizationStatusAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
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

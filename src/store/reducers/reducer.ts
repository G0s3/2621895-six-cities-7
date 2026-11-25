import { createReducer } from '@reduxjs/toolkit';
import {
  cityChangeAction,
  populatingOffersAction,
  setAuthorizationStatusAction,
} from '../actions/action';
import { AuthorizationStatus, Offer, OfferDetail, Review } from '../../types';
import {
  fetchCommentsAction,
  fetchOfferByIdAction,
  fetchOfferNearbyAction,
  fetchOffersAction,
  fetchUserAuthorizationStatusAction,
  logoutAction,
  postCommentAction,
} from '../api-actions';

type InitialState = {
  city: string;
  offers: Offer[];
  hasError: boolean;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  comments: Review[];
  currentOffer: OfferDetail | null;
  nearbyOffers: Offer[];
  isOfferNotFound: boolean;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
  isLoading: false,
  hasError: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  comments: [],
  currentOffer: null,
  nearbyOffers: [],
  isOfferNotFound: false,
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
    })
    .addCase(postCommentAction.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    })
    .addCase(fetchOfferByIdAction.pending, (state) => {
      state.isOfferNotFound = false;
    })
    .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(fetchOfferByIdAction.rejected, (state) => {
      state.currentOffer = null;
      state.isOfferNotFound = true;
    })
    .addCase(fetchOfferNearbyAction.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchCommentsAction.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});

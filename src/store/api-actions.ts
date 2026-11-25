import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import {
  AuthData,
  AuthorizationStatus,
  OfferDetail,
  Offers,
  UserData,
  Review,
} from '../types';
import { setAuthorizationStatusAction } from './actions/action';
import { saveToken, dropToken } from '../services/token';

// Offers
export const fetchOffersAction = createAsyncThunk<
  Offers,
  void,
  { extra: AxiosInstance }
>('/six-cities/offers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>('/offers');
  return data;
});

export const fetchOfferByIdAction = createAsyncThunk<
  OfferDetail,
  string,
  { extra: AxiosInstance }
>('/six-cities/offers/{offerId}', async (offerId, { extra: api }) => {
  const { data } = await api.get<OfferDetail>(`/offers/${offerId}`);
  return data;
});

export const fetchOfferNearbyAction = createAsyncThunk<
  Offers,
  string,
  { extra: AxiosInstance }
>('/six-cities/offers/{offerId}/nearby', async (offerId, { extra: api }) => {
  const { data } = await api.get<Offers>(`/offers/${offerId}/nearby`);
  return data;
});

// Comments
export const fetchCommentsAction = createAsyncThunk<
  Review[],
  string,
  { extra: AxiosInstance }
>('/six-cities/fetch-comments', async (offerId, { extra: api }) => {
  const { data } = await api.get<Review[]>(`/comments/${offerId}`);
  return data;
});

export const postCommentAction = createAsyncThunk<
  Review,
  { comment: string; rating: number; offerId: string },
  { extra: AxiosInstance }
>(
  '/six-cities/post-comment',
  async ({ comment, rating, offerId }, { extra: api }) => {
    const { data } = await api.post<Review>(`/comments/${offerId}`, {
      comment,
      rating,
    });

    return data;
  },
);

export const logoutAction = createAsyncThunk<
  void,
  void,
  { extra: AxiosInstance }
>('/six-cities/logout', async (_arg, { extra: api }) => {
  await api.delete('/logout');
  dropToken();
});

// Authorization
export const fetchUserAuthorizationStatusAction = createAsyncThunk<
  AuthorizationStatus,
  void,
  { extra: AxiosInstance }
>('/six-cities/login', async (_arg, { extra: api }) => {
  const { data } = await api.get<AuthorizationStatus>('/login');
  return data;
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  { extra: AxiosInstance }
>(
  '/six-cities/login',
  async ({ email, password }, { extra: api, dispatch }) => {
    const {
      data: { token },
    } = await api.post<UserData>('/login', { email, password });
    saveToken(token);

    dispatch(setAuthorizationStatusAction(AuthorizationStatus.Auth));
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import { AuthData, AuthorizationStatus, Offers, UserData } from '../types';
import { setAuthorizationStatusAction } from './actions/action';
import { saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  void,
  { extra: AxiosInstance }
>('/six-cities/offers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>('/offers');
  return data;
});

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

import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import type { Offers } from '../types';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  void,
  { extra: AxiosInstance }
>('/six-cities/offers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>('/offers');
  return data;
});

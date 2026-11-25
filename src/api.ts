import axios, { AxiosError, AxiosResponse } from 'axios';
import { AuthorizationStatus } from './types';
import { store } from './store';
import { setAuthorizationStatusAction } from './store/actions/action';
import { getToken } from './services/token';

const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        store.dispatch(
          setAuthorizationStatusAction(AuthorizationStatus.NoAuth),
        );
      }
      throw error;
    },
  );

  return api;
};

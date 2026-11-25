import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import {
  fetchOffersAction,
  fetchUserAuthorizationStatusAction,
} from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchOffersAction());
store.dispatch(fetchUserAuthorizationStatusAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

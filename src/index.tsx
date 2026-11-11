import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { offers } from './mocks/offers';
import { store } from './store';
import { Provider } from 'react-redux';
import { populatingOffersAction } from './store/actions/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(populatingOffersAction(offers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} />
    </Provider>
  </React.StrictMode>,
);

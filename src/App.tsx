import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/private-route.tsx/private-route';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import OfferPage from './pages/offer-page/offer-page';
import { Offer } from './mocks/offers';

type AppProps = {
  offersCount: number;
  offers: Offer[];
};

const authorizationStatus: boolean = false;

export const App = ({ offersCount, offers }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<MainPage offersCount={offersCount} offers={offers} />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<OfferPage offers={offers} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

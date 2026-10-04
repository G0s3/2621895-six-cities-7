import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage/MainPage';
import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import FavoritesPage from './components/pages/FavoritesPage/FavoritesPage';
import OfferPage from './components/pages/OfferPage/OfferPage';
import { PrivateRoute } from './components/private-route.tsx/private-route';

type AppProps = {
  offersCount: number;
};

export const App = ({ offersCount }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage offersCount={offersCount} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<OfferPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

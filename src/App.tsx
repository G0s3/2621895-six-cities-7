import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/private-route.tsx/private-route';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import OfferPage from './pages/OfferPage/OfferPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

type AppProps = {
  offersCount: number;
};

const authorizationStatus: boolean = false;

export const App = ({ offersCount }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage offersCount={offersCount} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<OfferPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

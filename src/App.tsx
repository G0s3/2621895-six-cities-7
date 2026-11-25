import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateRoute } from './components/private-route.tsx/private-route';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import OfferPage from './pages/offer-page/offer-page';
import { ErrorMessage } from './components/error-message/error-message';
import { Spinner } from './components/spinner/spinner';
import { RootState } from './store';
import { AuthorizationStatus } from './types';

export const App = () => {
  const offers = useSelector((state: RootState) => state.offers);
  const hasError = useSelector((state: RootState) => state.hasError);
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const authorizationStatus = useSelector(
    (state: RootState) => state.authorizationStatus,
  );

  if (hasError) {
    return <ErrorMessage />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offers={offers} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute
              authorizationStatus={
                authorizationStatus === AuthorizationStatus.Auth
              }
            >
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path="/offer/:id" element={<OfferPage offers={offers} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

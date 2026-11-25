import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthorizationStatus, Offer } from '../../types';
import { OffersList } from '../../components/offers-list';
import { HeaderNav } from '../../components/header-nav/header-nav';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type FavoritesPageProps = {
  offers: Offer[];
};

const FavoritesPage = ({ offers }: FavoritesPageProps) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const [, setActiveOfferId] = useState<string | null>(null);
  const authorizationStatus = useSelector(
    (state: RootState) => state.authorizationStatus,
  );

  const offersByCity = favoriteOffers.reduce<Record<string, Offer[]>>(
    (acc, offer) => {
      const cityName = offer.city.name;
      acc[cityName] = acc[cityName] ? [...acc[cityName], offer] : [offer];
      return acc;
    },
    {},
  );

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <HeaderNav
              userIsAuthorized={
                authorizationStatus === AuthorizationStatus.Auth
              }
            />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(offersByCity).map(([city, cityOffers]) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OffersList
                      offers={cityOffers}
                      onCardHover={setActiveOfferId}
                      variant="favorites"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
};

export default FavoritesPage;

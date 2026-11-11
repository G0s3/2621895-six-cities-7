import { useState } from 'react';
import { Link } from 'react-router-dom';
import { OffersList } from '../../components/offers-list';
import { Offer } from '../../mocks/offers';
import { Map } from '../../components/map/map';
import { CitiesList } from '../../components/cities-list/cities-list';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CITIES } from '../../constants/constants';
import { cityChangeAction } from '../../store/actions/action';

type MainPageProps = {
  offers: Offer[];
};

const MainPage = ({ offers }: MainPageProps) => {
  const dispatch = useDispatch();
  const activeCity = useSelector((state: RootState) => state.city);

  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);

  const filteredOffers = offers.filter(
    (offer) => offer.city.name === activeCity,
  );
  const city = filteredOffers[0]?.city;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link header__logo-link--active"
                to="/"
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={CITIES}
              activeCity={activeCity}
              onCityChange={(selectedCity) => dispatch(cityChangeAction(selectedCity))}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {activeCity}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={filteredOffers}
                  onCardHover={setSelectedOfferId}
                />
              </div>
            </section>
            <div className="cities__right-section">
              {city && (
                <Map
                  city={city}
                  offers={filteredOffers}
                  selectedOfferId={selectedOfferId}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;

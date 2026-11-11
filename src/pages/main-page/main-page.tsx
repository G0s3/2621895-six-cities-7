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
import { SortingOptions } from '../../components/sorting-options/sorting-options';

type MainPageProps = {
  offers: Offer[];
};

const OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

const MainPage = ({ offers }: MainPageProps) => {
  const dispatch = useDispatch();
  const activeCity = useSelector((state: RootState) => state.city);

  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Popular');

  const filteredOffers = offers.filter(
    (offer) => offer.city.name === activeCity,
  );
  const city = filteredOffers[0]?.city;

  const sortedOffers = [...filteredOffers].sort((a, b) => {
    switch (activeFilter) {
      case 'Price: low to high':
        return a.price - b.price;
      case 'Price: high to low':
        return b.price - a.price;
      case 'Top rated first':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

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
              onCityChange={
                (selectedCity) => dispatch(cityChangeAction(selectedCity))
                // eslint-disable-next-line react/jsx-curly-newline
              }
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
              <form
                className="places__sorting"
                action="#"
                method="get"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  {activeFilter}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                {isOpen && (
                  <SortingOptions
                    options={OPTIONS}
                    activeFilter={activeFilter}
                    onFilterChange={(option) => {
                      setActiveFilter(option);
                      setIsOpen(false);
                    }}
                  />
                )}
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={sortedOffers}
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

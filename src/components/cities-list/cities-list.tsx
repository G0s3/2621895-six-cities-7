type CitiesListProps = {
  cities: readonly string[];
  activeCity: string;
  onCityChange: (city: string) => void;
};

export const CitiesList = ({ cities, activeCity, onCityChange }: CitiesListProps) => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li key={city} className="locations__item">
        <a
          className={`locations__item-link tabs__item${city === activeCity ? ' tabs__item--active' : ''}`}
          onClick={() => onCityChange(city)}
          href="#"
        >
          <span>{city}</span>
        </a>
      </li>
    ))}
  </ul>
);

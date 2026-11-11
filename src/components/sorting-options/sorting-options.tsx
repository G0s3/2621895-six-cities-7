type SortingOptionsProps = {
  options: string[];
  activeFilter: string;
  onFilterChange: (option: string) => void;
};

export const SortingOptions = ({
  options,
  activeFilter,
  onFilterChange,
}: SortingOptionsProps) => (
  <ul className="places__options places__options--custom places__options--opened">
    {options.map((option) => (
      <li
        key={option}
        className={`places__option${option === activeFilter ? ' places__option--active' : ''}`}
        tabIndex={0}
        onClick={() => onFilterChange(option)}
      >
        {option}
      </li>
    ))}
  </ul>
);

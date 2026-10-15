import { Offer } from '../mocks/offers';
import { CityCard } from './city-card/сity-сard';

type OffersListProps = {
  offers: Offer[];
  onCardHover: (offerId: string | null) => void;
  variant?: 'cities' | 'favorites' | 'near-places';
};

export const OffersList = ({ offers, onCardHover, variant }: OffersListProps) => (
  <div>
    {offers.map((offer) => (
      <CityCard key={offer.id} offer={offer} onCardHover={onCardHover} variant={variant} />
    ))}
  </div>
);

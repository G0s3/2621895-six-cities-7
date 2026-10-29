import { Link } from 'react-router-dom';
import { Offer } from '../../mocks/offers';

type CityCardProps = {
  offer: Offer;
  onCardHover: (offerId: string | null) => void;
  variant?: 'cities' | 'favorites' | 'near-places';
};

export const CityCard = ({ offer, onCardHover, variant = 'cities' }: CityCardProps) => {
  const isFavorites = variant === 'favorites';

  return (
    <article
      className={`${variant}__card place-card`}
      onMouseEnter={() => onCardHover(offer.id)}
      onMouseLeave={() => onCardHover(null)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${variant}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={isFavorites ? 150 : 260}
            height={isFavorites ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={isFavorites ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(offer.rating) / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

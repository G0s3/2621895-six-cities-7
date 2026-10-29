import { useEffect, useRef } from 'react';
import { Offer } from '../../mocks/offers';
import { useMap } from '../../hooks/useMap';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
} from '../../constants/constants';

type MapProps = {
  city: Offer['city'];
  offers: Offer[];
  selectedOfferId: string | null;
};

export const Map = ({ city, offers, selectedOfferId }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city.location);

  useEffect(() => {
    if (!map) {
      return;
    }

    const defaultCustomIcon = leaflet.icon({
      iconUrl: URL_MARKER_DEFAULT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const currentCustomIcon = leaflet.icon({
      iconUrl: URL_MARKER_CURRENT,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const markerLayer = leaflet.layerGroup().addTo(map);

    offers.forEach((offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: offer.id === selectedOfferId ? currentCustomIcon : defaultCustomIcon,
          },
        )
        .addTo(markerLayer);
    });

    return () => {
      markerLayer.clearLayers();
    };
  }, [map, offers, selectedOfferId]);

  return <div className="cities__map" ref={mapRef}></div>;
};

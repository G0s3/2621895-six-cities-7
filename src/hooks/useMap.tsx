import { useEffect, useRef, useState } from 'react';
import leaflet from 'leaflet';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export const useMap = (
  mapRef: React.RefObject<HTMLElement | null>,
  location: Location,
) => {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer('cb1_5gix_1_2eb2474e63f612407614bb98', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, location]);

  return map;
};

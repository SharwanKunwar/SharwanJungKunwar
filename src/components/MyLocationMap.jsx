import React, { useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl/maplibre";

function MyLocationMap() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  const layers = location
    ? [
        new ScatterplotLayer({
          id: "my-location",
          data: [location],
          getPosition: (d) => [d.longitude, d.latitude],
          getRadius: 100,
          getFillColor: [255, 0, 0],
        }),
      ]
    : [];

  return (
  <DeckGL
    style={{ position: "relative", width: "100%", height: "100%" }}
    initialViewState={{
      longitude: location?.longitude || 85.324,
      latitude: location?.latitude || 27.7172,
      zoom: 12,
    }}
    controller={true}
    layers={layers}
  >
    <Map
      style={{ width: "100%", height: "100%" }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    />
  </DeckGL>
);
}

export default MyLocationMap;
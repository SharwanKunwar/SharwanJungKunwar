import React, { useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { Map } from "react-map-gl/maplibre";

function MyLocationMap() {
  const [myLocation, setMyLocation] = useState(null);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setMyLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });

    // Fake data (you can replace with real API)
    setPoints([
      { position: [85.324, 27.7172], weight: 1 },
      { position: [85.33, 27.72], weight: 2 },
      { position: [85.31, 27.71], weight: 3 },
      { position: [85.35, 27.715], weight: 4 },
    ]);
  }, []);

  const layers = [
    new HeatmapLayer({
      id: "heatmap",
      data: points,
      getPosition: (d) => d.position,
      getWeight: (d) => d.weight,
      radiusPixels: 60,
    }),
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <DeckGL
        style={{ position: "absolute", width: "100%", height: "100%" }}
        initialViewState={{
          longitude: myLocation?.longitude || 85.324,
          latitude: myLocation?.latitude || 27.7172,
          zoom: 13,
        }}
        controller={true}
        layers={layers}
      >
        <Map
          style={{ width: "100%", height: "100%" }}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        />
      </DeckGL>
    </div>
  );
}

export default MyLocationMap;
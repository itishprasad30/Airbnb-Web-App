import ReactMapGL, { Marker, Popup } from "react-map-gl";
import React, { useState } from "react";

import getCenter from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  //Transform the searchResults into
  // {longitute:232.1212,latitude: 234.123312}
  // object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  //   console.log(coordinates);

  const center = getCenter(coordinates);
  //   console.log(center);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.latitude,
    zoom: 11,
  });
  // console.log(selectedLocation);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/itishprasad30/ckt6sgrys1g5q19pinqqrfszn"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextviewport) => {
        setViewport(nextviewport);
      }}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              aria-label="push-pin"
              className="animate-bounce text-3xl cursor-pointer"
            >
              📌
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;

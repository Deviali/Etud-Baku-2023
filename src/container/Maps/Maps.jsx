import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./Maps.css";

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
  });
  const center = useMemo(
    () => ({ lat: 40.37267989298491, lng: 49.83517694722005 }),
    []
  );

  return (
    <div className="map">
      {!isLoaded ? (
        <h1 className="error">Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={18}
          // options={{ mapId: process.env.NEXT_PUBLIC_GOOGLE_STYLED_MAP }}
        >
          <Marker 
        position={{ lat: 40.37267989298491, lng: 49.83517694722005 }}
        // icon={"http://maps.google.com/mapfiles/kml/paddle/wht-circle.png"}
        />
        </GoogleMap>
      )}
    </div>
  );
};

export default Maps;

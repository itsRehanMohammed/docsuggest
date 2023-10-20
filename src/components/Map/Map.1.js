import React, { useMemo } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import useStyles from "./styles.js";
import { useMediaQuery } from "@material-ui/core";
import mapStyles from "../../mapStyles";
import Header from "../Header/Header.js";

export const Map = ({
  coords,
  places,
  setChildClicked,
  onPlaceChanged,
  onLoad,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  const center = useMemo(() => {
    if (coords.lat !== 0 && coords.lng !== 0) {
      // Use the coordinates from the selected location
      return { lat: coords.lat, lng: coords.lng };
    } else {
      // Default center coordinates
      return { lat: 19.076, lng: 72.8777 };
    }
  }, [coords]);

  return (
    <>
      {matches ? (
        <div className={classes.mapContainer}>
          <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
          <GoogleMap
            onChildClick={(child) => setChildClicked(child)}
            center={center} // Set the center based on the selected location
            zoom={14}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              styles: mapStyles,
            }}
            mapContainerClassName={classes.mapContainer}
          >
            {places.map((place, index) => {
              <MarkerF
                key={index}
                position={{ lat: place.latitude, lng: place.longitude }}
                onClick={() => onPlaceChanged(place)}
              />;
            })}
          </GoogleMap>
        </div>
      ) : null}
    </>
  );
};

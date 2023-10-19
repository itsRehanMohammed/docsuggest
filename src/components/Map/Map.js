import React, { useMemo } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from "@react-google-maps/api";
import useStyles from "./styles.js";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import mapStyles from "../../mapStyles";
import Header from "../Header/Header.js";
const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
  onPlaceChanged,
  onLoad,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  // const center = { lat: 48.858844, lng: 2.294351 }; // Eiffel Tower coordinates
  const center = useMemo(() => ({ lat: 19.076, lng: 72.8777 }), []);

  // console.log("places", places);
  return (
    <>
      {matches ? (
        <div className={classes.mapContainer}>
          <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
          {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}> */}
          <GoogleMap
            onChildClick={(child) => setChildClicked(child)}
            defaultCenter={center}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              styles: mapStyles,
            }}
            zoom={14}
            center={center}
            margin={[50, 50, 50, 50]}
            onChange={""}
            mapContainerClassName={classes.mapContainer}
          >
            {/* <MarkerF position={center} /> */}
            {places.length &&
              places.map((place, i) => (
                <div
                  className={classes.markerContainer}
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                  key={i}
                >
                  {!matches ? (
                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                  ) : (
                    <InfoWindowF
                      position={{
                        lat: Number(place.latitude),
                        lng: Number(place.longitude),
                      }}
                    >
                      <Paper elevation={3} className={classes.paper}>
                        <Typography
                          className={classes.typography}
                          variant="subtitle2"
                          gutterBottom
                        >
                          {" "}
                          {place.name}
                        </Typography>
                        <img
                          className={classes.pointer}
                          src={
                            place.photo
                              ? place.photo.images.large.url
                              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                          }
                        />
                        <Rating
                          name="read-only"
                          size="small"
                          value={Number(place.rating)}
                          readOnly
                        />
                      </Paper>
                    </InfoWindowF>
                  )}
                </div>
              ))}
          </GoogleMap>
          {/* </LoadScript> */}
        </div>
      ) : null}
    </>
  );
};

export default Map;

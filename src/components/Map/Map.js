import React, { useMemo } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from "@react-google-maps/api";
import useStyles from "./styles.js";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import mapStyles from "../../mapStyles";
import Header from "../Header/Header.js";
const Map = ({ coords, places, setChildClicked, onPlaceChanged, onLoad }) => {
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
            margin={[50, 50, 50, 50]}
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
                      // position={center}
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
        </div>
      ) : null}
    </>
  );
};

export default Map;

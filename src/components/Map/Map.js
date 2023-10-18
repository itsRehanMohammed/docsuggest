import React from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import useStyles from "./styles.js";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import mapStyles from "../../mapStyles";
const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const center = { lat: 44, lng: -80 };

  return (
    <div className={classes.mapContainer}>
      {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}> */}
      <GoogleMap onChildClick={(child) => setChildClicked(child)} options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }} zoom={10} center={center} mapContainerClassName={classes.mapContainer}>
        <Marker position={center} />
        {places.length &&
          places.map((place, i) => (
            <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
              {!matches ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                    {" "}
                    {place.name}
                  </Typography>
                  <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"} />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
            </div>
          ))}
      </GoogleMap>
      {/* </LoadScript> */}
    </div>
  );
};

export default Map;

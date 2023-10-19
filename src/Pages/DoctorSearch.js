import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Map from "../components/Map/Map";
import List from "../components/List/List";
import { LoadScript } from "@react-google-maps/api";
import data from "../places.json";
import { CssBaseline, Grid } from "@material-ui/core";
const DoctorSearch = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // console.log({ childClicked });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    // if (bounds) {
    setIsLoading(true);

    setPlaces(data.data.filter((place) => place.name && place.num_reviews > 0));
    setFilteredPlaces([]);
    setRating("");
    setIsLoading(false);
    // }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete && autocomplete.getPlace()) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();

      setCoords({ lat, lng });
    } else {
      // Handle the case where the autocomplete result is not available or valid
      console.error("Autocomplete result is not available or valid");
    }
  };

  return (
    <>
      <CssBaseline />
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={["places"]} // Specify "places" library
      >
        <Grid container spacing={1} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List
              isLoading={isLoading}
              childClicked={childClicked}
              places={places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Map
              setChildClicked={setChildClicked}
              setBounds={setBounds}
              setCoords={setCoords}
              coords={coords}
              places={places}
              onPlaceChanged={onPlaceChanged}
              onLoad={onLoad}
            />
          </Grid>
        </Grid>
      </LoadScript>
    </>
  );
};

export default DoctorSearch;

import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Map from "../components/Map/Map";
import List from "../components/List/List";
import { LoadScript, PanTo } from "@react-google-maps/api";
import data from "../places.json";
import { CssBaseline, Grid } from "@material-ui/core";
import { getDoctorsData } from "../api/doctorAPI";
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
  const [map, setMap] = useState(null); // Add a state variable to store the map instance

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
    setIsLoading(true);
    getDoctorsData(coords.lat, coords.lng).then((data) => {
      console.log({ data });
      setPlaces(
        data?.doctors.filter((place) => place.name && place.num_reviews > 0)
      );
      setFilteredPlaces([]);
      setRating("");
      setIsLoading(false);
    });
  }, [coords]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (autocomplete && autocomplete.getPlace()) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();

      setCoords({ lat, lng });

      // Use the map instance to pan to the selected location
      if (map) {
        const newCenter = { lat, lng };
        map.panTo(newCenter);
        // map.setZoom(14); // Optionally, set the zoom level as needed
      }
    } else {
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
              // alignItems: "center",
              padding: "25px 0px",
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
              setMap={setMap}
            />
          </Grid>
        </Grid>
      </LoadScript>
    </>
  );
};

export default DoctorSearch;

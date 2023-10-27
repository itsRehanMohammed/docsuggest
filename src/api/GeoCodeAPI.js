import React, { useState } from "react";
import axios from "axios";

const GeocodingComponent = () => {
  const [place, setPlace] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  const handleGeocode = () => {
    // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const geocodingEndpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${apiKey}`;

    axios
      .get(geocodingEndpoint)
      .then((response) => {
        const { results } = response.data;
        if (results.length > 0) {
          const location = results[0].geometry.location;
          setCoordinates(location);
          setError(null);
        } else {
          setError("Place not found");
          setCoordinates({ lat: null, lng: null });
        }
      })
      .catch((err) => {
        setError("Error occurred while geocoding");
        console.error(err);
        setCoordinates({ lat: null, lng: null });
      });
  };
  console.log({ coordinates });
  console.log({ place });
  return (
    <div>
      <h2>Geocoding Example</h2>
      <input
        type="text"
        placeholder="Enter a place name"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <button onClick={handleGeocode}>Geocode</button>
      {coordinates.lat && coordinates.lng ? (
        <p>
          Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
        </p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default GeocodingComponent;

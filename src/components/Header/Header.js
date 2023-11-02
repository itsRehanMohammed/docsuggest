import React, { useEffect } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";
import { useLocation, useSearchParams } from "react-router-dom";
const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const location = useLocation(); // Get the current location
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // Extract the 'city' query parameter from the location
    const city = searchParams.get("city");

    // If the 'city' parameter is available, set it as the search input value
    if (city) {
      document.getElementById("search-input").value = city;
    }
  }, [location]);
  return (
    <Toolbar className={classes.toolbar}>
      <Box display="flex">
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              id="search-input"
              placeholder="Search…"
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Autocomplete>
      </Box>
    </Toolbar>
  );
};

export default Header;

import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// style hooks from styles.js (material ui way)
import useStyles from './styles';


const Header = ({setCoordinates}) => {
    const classes = useStyles();

    const [ autocomplete, setAutocomplete ] = useState(null);

const onLoad = (auto) => setAutocomplete(auto);
const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat, lng});
}



  return (
      <AppBar position='static' className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
              <Typography variant='h5' className={classes.title}>
                  Travel Buddy 🚶‍♂️
              </Typography>
              <Typography variant='h6' className={classes.title}>
                  Explore as you move
              </Typography>
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                  <div className={classes.search}>
                      <div className={classes.searchIcon}>
                          <SearchIcon />
                      </div>
                      <InputBase placeholder='Search a Location...' classes={{ root: classes.inputRoot, input: classes.inputInput}}/>

                  </div>
              </Autocomplete>
          </Toolbar>
      </AppBar>
  );
};

export default Header;

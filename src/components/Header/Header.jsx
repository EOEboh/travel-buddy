import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { AppBar, Toolbar, Typography, InputBase, Box  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// style hooks from styles.js (material ui way)
import useStyles from './styles';


const Header = () => {
    const classes = useStyles();



  return (
      <AppBar position='static' className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
              <Typography variant='h5' className={classes.title}>
                  Travel Buddy 🚶‍♂️
              </Typography>
              <Typography variant='h6' className={classes.title}>
                  Explore as you move
              </Typography>
              {/* <Autocomplete> */}
                  <div className={classes.search}>
                      <div className={classes.searchIcon}>
                          <SearchIcon />
                      </div>
                      <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput}}/>

                  </div>
              {/* </Autocomplete> */}
          </Toolbar>
      </AppBar>
  );
};

export default Header;

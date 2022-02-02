import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import { CssBaseline, Grid } from '@material-ui/core';

// api data
import { getPlacesData } from './api';

const App = () => {
    
    const [ places, setPlaces ] = useState([]);
    const [ coordinates, setCoordinates ] = useState({});
    const [ bounds, setBounds ] = useState({});
    
    console.log(coordinates, bounds)

    // to get the user's location on page load
    useEffect( () => {
        navigator.geolocation.getCurrentPosition( ({coords: {latitude, longitude}}) => {
            setCoordinates( { lat: latitude, lng: longitude });
        } )
    }, [])

        // to get the api data depending on the coordinates and bounds
    useEffect(() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                // console.log(data)
                setPlaces(data)
            })
    }, [coordinates, bounds])




  return (<div>
      
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places} />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                />
            </Grid>
        </Grid>
         
        </>
  </div>);
};

export default App;

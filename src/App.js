import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import { CssBaseline, Grid } from '@material-ui/core';

// api data
import { getPlacesData } from './api';

const App = () => {

    
  // state for type
  const [ type, setType ] = useState('restaurants');
  
  // state for rating
  const [ rating, setRating ] = useState('');

  // state for the filtered places based on rating
  const [ filteredPlaces, setFilteredPlaces ] = useState([]);
    
    const [ places, setPlaces ] = useState([]);
    const [ coordinates, setCoordinates ] = useState({});
    const [ bounds, setBounds ] = useState({});
    
    console.log(coordinates, bounds)

    // state for knowing which specific element was clicked 
    const [childClicked, setChildClicked] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    // to get the user's location on page load
    useEffect( () => {
        navigator.geolocation.getCurrentPosition( ({coords: {latitude, longitude}}) => {
            setCoordinates( { lat: latitude, lng: longitude });
        } )
    }, []);

        // to get the api data depending on the coordinates and bounds and type selection
    useEffect(() => {
        setIsLoading(true);

        getPlacesData(type, bounds.sw, bounds.ne)
            .then((data) => {
                // console.log(data)
                setPlaces(data);
                setFilteredPlaces([])
                setIsLoading(false);
            })
    }, [type, coordinates, bounds]);

    useEffect(()=> {
        const filteredPlaces = places.filter((place) => place.rating > rating )
        
        setFilteredPlaces(filteredPlaces);
    },[rating])




  return (<div>
      
        <>
        <CssBaseline />
        <Header setCoordinates={setCoordinates}/>
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List places={filteredPlaces.length ? filteredPlaces : places} 
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={filteredPlaces.length ? filteredPlaces : places}
                    setChildClicked={setChildClicked}
                />
            </Grid>
        </Grid>
         
        </>
  </div>);
};

export default App;

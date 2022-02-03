import React from 'react';

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import rest from './rest.jpg'

const PlaceDetails = ({ place }) => {
  console.log(place)
    const classes = useStyles();

  return (
  <Card elevation={6}>
    <CardMedia
    style={{ height: 350 }}
    image={place.photo ? place.photo.images.large.url : `${rest}`} 
    title={place.name}
    />
    <CardContent>
      <Typography gutterBottom variant='h5'>{place.name}</Typography>
      <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
      </Box>
      <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
      </Box>
      {/* mapping over the awards inner array */}
      {place?.awards?.map((award) => (
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <img src={award.images.small} alt={award.display_name} />
          <Typography avriant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
        </Box>
      ))}
      {/* mapping over the cuisine inner array */}
      {place?.cuisine?.map( ({name}) => (
          <Chip key={name}
              size='small'
              label={name}
              className='classes.chip' />
      ))}
     {/* if there is an address then..... */}
      {place?.address && (
        <Typography gutterBottom variant='body2' color='textSecondary' className={classes.subtitle}>
          <LocationOnIcon /> {place.address}
        </Typography>
      )}
        {/* if there is a phone number */}
        {place?.phone && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size='small' color='primary' onClick={()=> window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={()=> window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions>
    </CardContent>

  </Card>
  );
};

export default PlaceDetails;

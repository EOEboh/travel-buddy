import React from 'react';

const PlaceDetails = ({ place }) => {
  console.log(place)

  return (
  <div>{place.name}</div>
  );
};

export default PlaceDetails;

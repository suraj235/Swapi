import React from 'react';
import { useApiData } from '../helpers/fetchApiData';

function StarShips({endpointUrl}) {
  const { data, isLoading, error } = useApiData(endpointUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return data.name
}

export default StarShips;


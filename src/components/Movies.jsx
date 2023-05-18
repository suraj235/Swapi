import { useApiData } from '../helpers/fetchApiData';

function Movies({endpointUrl}) {
  const { data, isLoading, error } = useApiData(endpointUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return 'Episode ' + data.episode_id + ': ' + data.title
}

export default Movies;


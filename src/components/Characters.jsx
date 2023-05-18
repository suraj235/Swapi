import React, { useState, useEffect } from 'react';
import Species from './Species';

function Characters() {
  const [page, setPage] = useState(1);
  const [charactersList, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle pagination for next button
  const handleNext = () => {
    setPage(page + 1)
  }

  // Handle pagination for prev button
  const handlePrev = () => {
    setPage(page - 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCharacters(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (isLoading) {
    return <div className='text-center text-lg text-gray-800'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center text-lg text-gray-800'>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className='text-2xl font-medium mb-4'>Star War Characters</h2>
      <div className='grid grid-cols-2 md:gap-8 gap-5'>
        { charactersList && charactersList.results.map( ( character, index) =>
          (
            <div key={(index+1) + 10*(page - 1)} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center md:py-6 py-4 px-3">
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{ character.name && character.name }</h5>
                  <span className="text-base text-gray-500 dark:text-gray-400">{ character.species.length > 0 && character.species.map( (s, index) => (
                    <div key={index} className='flex'>
                      <b className='mr-1'>Species:</b> <Species endpointUrl={s} key={index}/>
                    </div>
                  ) ) }</span>
                  <span className="text-base text-gray-500 dark:text-gray-400"><b>Birth Year:</b> { character.birth_year && character.birth_year }</span>

                  <div className="flex mt-4 space-x-3 md:mt-4">
                      <a href={`/characters/${(index+1) + 10*(page - 1)}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</a>
                  </div>
              </div>
            </div>
          )
        ) }
      </div>
      {/* Pagination */}
      <div className='flex justify-center items-center mt-8'>
          { page > 1 && <button className='mr-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => handlePrev()}>Prev</button>}
          { page < Math.floor(charactersList.count/charactersList.results.length) && <button className='ml-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => handleNext()}>Next</button> }
      </div>
    </div>
  );
}

export default Characters;
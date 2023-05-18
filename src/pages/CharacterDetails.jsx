import React from "react";
import { useParams } from 'react-router-dom';
import { useApiData } from "../helpers/fetchApiData";
import Species from "../components/Species";
import Movies from "../components/Movies"
import StarShips from "../components/StarShips"

export default function CharactersList() {
    const { id } = useParams();

    const { data, isLoading, error } = useApiData(`https://swapi.dev/api/people/${id}`);

    if (isLoading) {
      return <div className='text-center text-lg text-gray-800 mt-10'>Loading...</div>;
    }

    if (error) {
      return <div className='text-center text-lg text-gray-800'>Error: {error.message}</div>;
    }

    return(
        <div className="container0 py-10 md:py-14">
            <div className="w-3/5 mx-auto border dark:border-gray-800 rounded-lg px-6 py-10">
                <h2 className="text-2xl font-bold text-blue-900">{ data.name } Details</h2>
                <div className="mt-6">
                   <p className="text-lg"><b>Name: </b> { data.name }</p>
                   <p className="text-lg flex"><b className="mr-1">Species: </b> 
                    { data.species.length > 0 ? data.species.map( (s, index) => (
                        <div className='flex'>
                            <Species endpointUrl={s} key={index}/> { index !== data.species.length - 1 && ', ' }
                        </div>
                    ) ) : 'N/A' }
                   </p>

                   <p className="text-lg flex"><b className="mr-1">Movies: </b>
                    { data.films.length > 0 ? data.films.map( (film, index) => (
                        <>
                            <Movies endpointUrl={film} key={index}/>{ index !== data.films.length - 1 && ', ' }
                        </>
                    ) ) : 'N/A' }
                   </p>

                   <p className="text-lg flex"><b className="mr-1">Starships: </b>
                     { data.starships.length > 0 ? data.starships.map( (starship, index) => (
                        <>
                            <StarShips endpointUrl={starship} key={index}/>{ index !== data.starships.length - 1 && ', ' }
                        </>
                    ) ) : 'N/A' }
                   </p>
                </div>

                
                <a href="/">
                    <button className='mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        Go back to Listing
                    </button>
                </a>
            </div>
        </div>
    )
}
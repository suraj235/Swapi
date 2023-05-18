import React, { useState, useEffect } from 'react';

export function useApiData(apiEndpoint) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiEndpoint);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [apiEndpoint]);
  
    return { data, isLoading, error };
}
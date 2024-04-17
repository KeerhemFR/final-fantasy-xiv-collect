//React imports
import { useState, useEffect } from 'react';
//API imports
import ffxivcollect from '@api/ffxivcollect';
//Content imports
import { PATHS } from '@contents/api';
//Type imports
import { ResultsDataType } from '@customTypes/apiResults.type';

/**
 * Custom hooks which purpose is to connect to the API, set the associates
 * parameters to the said API, and return the results to the components calling it
 *
 * @param {PATHS} path set the path including the data we want to retrieve
 * @returns results and searchable entity to filter more specific wanted results
 */
const useResults = (path: PATHS) => {
  const [results, setResults] = useState<ResultsDataType[] | null>(null);

  /**
   * Function calling the API with the appropriate path and storing the data in a usable state
   *
   * @param {PATHS} path path we want to call to collect the data
   */
  const searchApi = async (path: PATHS): Promise<void> => {
    try {
      const response = await ffxivcollect.get(path, {
        params: {
          language: 'fr',
        },
      });
      setResults(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi(path);
  }, []);

  return {
    searchApi,
    results,
  };
};

export default useResults;

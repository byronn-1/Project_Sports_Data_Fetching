import { useState, useEffect, useCallback } from "react";
import "./App.css";

import CountryList from './CountryList';
import MainNavigation from "./MainNavigation";

const API_END_POINT = process.env.REACT_APP_URL_ENDPOINT;
const API_KEY = process.env.REACT_APP_KEY;

function App() {

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchResponse = await fetch(`${API_END_POINT}` + "/countries", {
        method: "GET",
        headers: {
          "x-rapidapi-host": API_END_POINT,
          "x-rapidapi-key": API_KEY,
        },
        redirect: 'follow',
      })
      const data = await fetchResponse.json();

      console.log(data);

      if (!fetchResponse.ok) {
        throw new Error('Something went wrong')
      }

      const countriesList = data.response.map((country) => {
        return {
          name: country.name,
        }

      });
      console.log(countriesList);
      setCountries(countriesList);
    } catch (error){
      setError(error.message);
    }
    setIsLoading(false);
  },[]);


  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);
  

  let content = <p>Found no list</p>

  if (countries.length > 0) {
    content = <CountryList countryList={countries}/>
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <>
      <MainNavigation  />
      {content}
    </>
  );
}


export default App;

import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import Country from './Country';

const API_END_POINT = process.env.REACT_APP_URL_ENDPOINT;
const API_KEY = process.env.REACT_APP_KEY;

function App() {

  const [countries, setCountries] = useState();

  useEffect(() => {

    const fetchData = async () => {
      fetch(`${API_END_POINT}` + "/leagues", {
        method: "GET",
        headers: {
          "x-rapidapi-host": API_END_POINT,
          "x-rapidapi-key": API_KEY,
        },
        redirect: 'follow',
      }).then((response) => response.json()
      ).then((data) => setCountries(data.response));
    };

    fetchData();
  }, []);
  


  return (
    <>
      {countries?.map((country ) => (
        <Country country={country} />
      ))}
    </>
  );
}


export default App;

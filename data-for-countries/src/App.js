import React, { useState, useEffect } from 'react';
import CountrySearchFrom from './components/CountrySearchForm';
import Countries from './components/Countries';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('');
  // const [filteredCountryVal, setFilteredCountryVal] = useState('');
  const restCountriesAPI = 'https://restcountries.eu/rest/v2'

  useEffect(() => {
    axios.get(`${restCountriesAPI}/all`)
      .then(response => setCountries(response.data))      
  }, [])

  const handleCountryNameSearch = (event) => setCountryName(event.target.value);

  // console.log(countries);
  return (
    <div >
      <CountrySearchFrom 
        countryName={countryName}
        handleCountryNameSearch={handleCountryNameSearch}
      />
      <Countries
        countryName={countryName}
        countries={countries}
      />
    </div>
  );
}

export default App;

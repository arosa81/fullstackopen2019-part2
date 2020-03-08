import React from 'react';

const CountrySearchForm = ({ countryName, handleCountryNameSearch }) => {
  return (
    <form action="">
      <p> Find countries: 
      <input 
        value={countryName}
        onChange={handleCountryNameSearch}
      />
      </p>
    </form>
  )
}

export default CountrySearchForm;

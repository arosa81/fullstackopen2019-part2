import React from 'react';

const CountryDetails = ({ filteredCountryObj }) => {
  return (
    <div>
      <h1>{filteredCountryObj.name}</h1>
      <p>Capital: {filteredCountryObj.capital}</p>
      <p>Population: {filteredCountryObj.population}</p>
      <h2>languages</h2>
      {filteredCountryObj.languages.map((language, index) =>
        <li style={{ marginLeft: `${2}em` }} key={index}>{language.name}</li>)}
      <p>
        <img
          src={filteredCountryObj.flag}
          alt={`${filteredCountryObj.name} flag`}
          width="200" height="100"
        />
      </p>
    </div>
  )
}

export default CountryDetails;
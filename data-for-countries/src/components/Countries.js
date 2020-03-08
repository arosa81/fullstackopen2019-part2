import React from 'react';

const Countries = ({ countryName, countries }) => {
  const filteredCountries = () => countryName === ''
    ? countries 
    : countries.filter(country => 
        country.name.toLowerCase().trim().indexOf(countryName.toLowerCase()) !== -1
          ? country : null)

  const numCountries = filteredCountries().length;
  const filteredCountryObj = filteredCountries()[0];

  return (
    <div>
      {/* {console.log(filteredCountries())} */}
      {numCountries === 0 && (<p></p>)}
      {numCountries === 1 && (
        <div>
          <h1>{filteredCountryObj.name}</h1>
          <p>Capital: {filteredCountryObj.capital}</p>
          <p>Population: {filteredCountryObj.population}</p>
          <h2>languages</h2>
          {filteredCountryObj.languages.map((language, index) => 
            <li style={{marginLeft: `${2}em`}} key={index}>{language.name}</li>)}
          <p>
            <img 
              src={filteredCountryObj.flag} 
              alt={`${filteredCountryObj.name} flag`}
              width="200" height="100"
            />
          </p>
        </div>
      )}
      {(countryName !== '' && numCountries > 10) && <p>Too many countries</p>}
      {(numCountries > 1 && numCountries <= 10) && 
        filteredCountries().map(country => <li key={country.id}>{country.name}</li>) }
    </div>
  )
}

export default Countries;
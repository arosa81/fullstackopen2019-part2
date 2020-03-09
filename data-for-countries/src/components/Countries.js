import React from 'react';
import CountryDetails from './CountryDetails';

const Countries = ({ countryName, countries, setCountryName }) => {
  const filteredCountries = () => countryName === ''
    ? countries 
    : countries.filter(country => 
        country.name.toLowerCase().trim().indexOf(countryName.toLowerCase()) !== -1
          ? country : null)

  let numCountries = filteredCountries().length;
  const filteredCountryObj = filteredCountries().length === 1 ? filteredCountries()[0] : null;
  const showCountryDetails = (name) => setCountryName(name);

  return (
    <div>
      {numCountries === 0 && (<p></p>)}
      {numCountries === 1 && (
        <CountryDetails filteredCountryObj={filteredCountryObj} />
      )}
      {(countryName !== '' && numCountries > 10) && <p>Too many countries</p>}
      {(numCountries > 1 && numCountries <= 10) && 
        filteredCountries().map(country => 
          <li key={country.id}>{country.name} 
            <button onClick={() => showCountryDetails(country.name)}>show</button>
          </li>)
      }
    </div>
  )
}

export default Countries;
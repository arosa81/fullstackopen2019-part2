import React from 'react';

const Countries = ({ countryName, countries }) => {
  const filteredCountries = () => countryName === '' ? countries 
    : countries.filter(country => 
      country.name.toLowerCase().indexOf(countryName.toLowerCase()) !== -1
        ? country : null)

  return (
    <div>
      {filteredCountries().map(country => {
        console.log(country);
        return <li>{country.name}</li>;
      })}
    </div>
  )
}

export default Countries;
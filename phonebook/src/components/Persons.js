import React from 'react';
import Person from './Person';

const Persons = ({ persons, filteredVal }) => {
  const filterPersons = () => filteredVal === '' ? persons
    : persons.filter(person =>
      Object.values(person).join(' ').toLowerCase().indexOf(filteredVal.toLowerCase()) !== -1
        ? person : null)

  return (
    <div>
      {filterPersons().map(person => <Person key={person.id} person={person}></Person>)}
    </div>
  )
}

export default Persons;
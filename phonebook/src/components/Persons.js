import React from 'react';
import Person from './Person';
import personService from '../services/persons';

const Persons = ({ persons, filteredVal, setPersons }) => {
  const filterPersons = () => filteredVal === '' ? persons
    : persons.filter(person =>
      Object.values(person).join(' ').toLowerCase().indexOf(filteredVal.toLowerCase()) !== -1
        ? person : null)

  const deletePersonOf = id => {
    const person = persons.find(p => p.id === id);
    const deleteConfirmed = window.confirm(`Delete ${person.name} ?`);
    return deleteConfirmed 
      ? 
        personService.updatePerson(id, person)
          .then(returnedPerson => setPersons(persons.filter(person => person.id !== returnedPerson.id)))
          .then(personService.deletePerson(id, person))
      : null
  }

  return (
    <div>
      {filterPersons().map(person => 
        <Person key={person.id} person={person} deletePerson={() => deletePersonOf(person.id)} />)}
    </div>
  )
}

export default Persons;
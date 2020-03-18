import React from 'react';
import personService from '../services/persons';

const PersonForm = (props) => {
  const personObj = {
    id: props.persons.length + 1,
    name: props.newName,
    number: props.newNumber
  }

  const checkPersonsArrayForExistingName = (name) =>
    props.persons.some(person => person.name.trim().toLowerCase() === name.trim().toLowerCase())

  const findSpecificPersonByName = name => props.persons.find(person => person.name.trim().toLowerCase() === name.trim().toLowerCase());

  const updatePhoneNumberOf = person => { return { ...person, number: props.newNumber } }
  
  const addNewName = (event) => {
    event.preventDefault();

    if (checkPersonsArrayForExistingName(props.newName)) {
      const updateConfirmed = window.confirm(`${props.newName} is already added to phonebook, replace the old number with a new one?`);
      if (updateConfirmed) {
        const updatedPerson = updatePhoneNumberOf(findSpecificPersonByName(props.newName));
        personService.updatePerson(updatedPerson.id, updatedPerson)
          .then(returnedPerson => props.setPersons(props.persons.map(person => person.id !== updatedPerson.id ? person : returnedPerson)))
      } else {
        return null;
      }
    } else {
      personService.createPerson(personObj)
        .then(returnedPerson => props.setPersons(props.persons.concat(returnedPerson)))
    }

    props.setNewName('');
    props.setNewNumber('');
  }

  return (
    <form onSubmit={addNewName}>
      <h2>Add a new</h2>
      <div>
        name: <input value={props.newName} onChange={props.handleNewName} />
        <br />
        phone: <input value={props.newNumber} onChange={props.handlenewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm;
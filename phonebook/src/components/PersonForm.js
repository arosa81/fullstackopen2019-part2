import React from 'react';

const PersonForm = (props) => {
  const personObj = {
    id: props.persons.length + 1,
    name: props.newName,
    number: props.newNumber
  }

  const checkPersonsArrayForExistingName = (name) =>
    props.persons.some(person => person.name.trim().toLowerCase() === name.trim().toLowerCase())

  const addNewName = (event) => {
    event.preventDefault();
    checkPersonsArrayForExistingName(props.newName)
      ? alert(`${props.newName} is already added to phonebook`)
      : props.setPersons(props.persons.concat(personObj))

    props.setNewName('');
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
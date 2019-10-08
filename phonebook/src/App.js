import React, { useState } from 'react';
import Person from './components/Person';

function App() {
  const [persons, setPersons] = useState([{ id: 1, name: 'Arto Hellas', phone: '999.111.2222' }]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleNewName = (event) => setNewName(event.target.value);
  const handleNewPhone = (event) => setNewPhone(event.target.value);

  const checkPersonsArrayForExistingName = (name) =>
    persons.some(person => person.name.trim().toLowerCase() === name.trim().toLowerCase())

  const addNewName = (event) => {
    event.preventDefault();
    checkPersonsArrayForExistingName(newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ id: persons.length + 1, name: newName, phone: newPhone }))

    setNewName('');
  }

  const peopleRow = () => persons.map(person => <Person key={person.id} person={person}></Person>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
          <br />
          phone: <input value={newPhone} onChange={handleNewPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleRow()}
    </div>
  );
}

export default App;

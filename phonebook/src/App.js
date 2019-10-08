import React, { useState } from 'react';
import Person from './components/Person';

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filteredVal, setFilteredVal] = useState('');

  const handleNewName = (event) => setNewName(event.target.value);
  const handleNewPhone = (event) => setNewPhone(event.target.value);
  const handleFilteredVal = (event) => setFilteredVal(event.target.value);

  const checkPersonsArrayForExistingName = (name) =>
    persons.some(person => person.name.trim().toLowerCase() === name.trim().toLowerCase())

  const addNewName = (event) => {
    event.preventDefault();
    checkPersonsArrayForExistingName(newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat({ id: persons.length + 1, name: newName, phone: newPhone }))

    setNewName('');
  }

  const filterPersons = () => filteredVal === '' ? persons
    : persons.filter(person =>
      Object.values(person).join(' ').toLowerCase().indexOf(filteredVal.toLowerCase()) !== -1 ? person : null)

  const peopleRow = () => filterPersons().map(person => <Person key={person.id} person={person}></Person>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>filter shown with <input value={filteredVal} onChange={handleFilteredVal} /></div>
        <h2>Add a new</h2>
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

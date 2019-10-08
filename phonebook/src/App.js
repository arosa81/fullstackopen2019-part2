import React, { useState } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredVal, setFilteredVal] = useState('');

  const handleNewName = (event) => setNewName(event.target.value);
  const handlenewNumber = (event) => setNewNumber(event.target.value);
  const handleFilteredVal = (event) => setFilteredVal(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filteredVal={filteredVal}
        handleFilteredVal={handleFilteredVal}
      />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleNewName={handleNewName}
        handlenewNumber={handlenewNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filteredVal={filteredVal}
      />
    </div>
  );
}

export default App;

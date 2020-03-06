import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredVal, setFilteredVal] = useState('');

  //fetches persons from db.json server
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

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

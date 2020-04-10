import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';
import personService from './services/persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredVal, setFilteredVal] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  //fetches persons from db.json server
  useEffect(() => {
    personService.getAll().then(initialPerson => setPersons(initialPerson))
  }, []);

  const handleNewName = (event) => setNewName(event.target.value);
  const handlenewNumber = (event) => setNewNumber(event.target.value);
  const handleFilteredVal = (event) => setFilteredVal(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification 
        message={message}
        messageType={messageType}
      />
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
        setMessage={setMessage}
        setMessageType={setMessageType}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filteredVal={filteredVal}
        setPersons={setPersons}
      />
    </div>
  );
}

export default App;

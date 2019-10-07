import React, { useState } from 'react';
import Person from './components/Person';

function App() {
  const [persons, setPersons] = useState([{ id: 1, name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNewName = (event) => setNewName(event.target.value);

  const addNewName = (event) => {
    event.preventDefault();
    setPersons(persons.concat({ id: persons.length + 1, name: newName }))
    setNewName('');
  }

  const peopleRow = () => persons.map(person => <Person key={person.id} person={person}></Person>)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
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

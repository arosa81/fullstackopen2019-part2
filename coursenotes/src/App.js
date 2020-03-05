import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('response fulfilled');
        setNotes(response.data);
      })
  }, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleNotesToShowToggle = () => setShowAll(!showAll)

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  }

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  return (
    <div>
      <button onClick={handleNotesToShowToggle}>
        show {showAll ? 'important' : 'all'}
      </button>
      <input 
        type="text"
        value={newNote} 
        onChange={handleNoteChange}
      />
      {notesToShow.map((note) => <Note key={note.id} note={note} />)}
    </div>
  );
}

export default App;

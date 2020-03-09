import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => setNotes(initialNotes))
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
    
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote));
        setNewNote('');
      })
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important }
    
    noteService
      .update(id, changedNote)
      .then(returnedNote => setNotes(notes.map(note => note.id !== id ? note : returnedNote)))
      .catch(error => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter(n => n.id !== id));
      })
  }

  const rows = () => 
    notesToShow.map((note) => 
      <Note 
        key={note.id} 
        note={note} 
        toggleImportance={() => toggleImportanceOf(note.id)}
      />)

  return (
    <div>
      <button onClick={handleNotesToShowToggle}>
        show {showAll ? 'important' : 'all'}
      </button>
      <br></br>
      <br></br>
      <input 
        type="text"
        value={newNote} 
        onChange={handleNoteChange}
      />
      <br></br>
      <button onClick={addNote}>Add Note</button>
      {rows()}
    </div>
  );
}

export default App;

import React from 'react';

const NoteContent = ({ note }) => <p>{note.content}</p>

const Note = ({ note }) => {
  return (
    <div>
      <NoteContent note={note} />
    </div>
  )
}

export default Note;
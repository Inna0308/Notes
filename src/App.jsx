import { useEffect, useState } from "react";

import NoteList from "./components/NoteList/NoteList";
import ArchivedNoteList from "./components/ArchivedNoteList/ArchivedNoteList";
import AddNote from "./components/AddNote/AddNote";

import notesData from "../notes.json";

import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState(() => {
    const saveNotes = localStorage.getItem("notes");
    return saveNotes ? JSON.parse(saveNotes) : notesData;
  });

  const [archivedNotes, setArchivedNotes] = useState(() => {
    const savedArchivedNotes = localStorage.getItem("archivedNotes");
    return savedArchivedNotes ? JSON.parse(savedArchivedNotes) : [];
  });

  const onAddNote = (values) => {
    const newNote = { ...values, id: nanoid() };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    const deletedNote = notes.find((note) => note.id === noteId);

    if (deletedNote) {
      setArchivedNotes((prev) => [...prev, deletedNote]);
    }

    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("archivedNotes", JSON.stringify(archivedNotes));
  }, [notes, archivedNotes]);

  return (
    <div>
      <AddNote onAddNote={onAddNote} />
      <NoteList notes={notes} onDeleteNote={onDeleteNote} />
      <ArchivedNoteList archivedNotes={archivedNotes} />
    </div>
  );
}

export default App;

import Note from "../Note/Note";

import styles from "./NoteList.module.css";

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Notes</h2>
      <ul className={styles.list}>
        {notes.map((note) => (
          <Note key={note.id} text={note.text} onDeleteNote={onDeleteNote} id={note.id} />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;

import ArchivedNote from "../ArchivedNote/ArchivedNote";

import styles from "./ArchivedNoteList.module.css";

const ArchivedNoteList = ({ archivedNotes }) => {
  return (
    <div>
      <h2 className={styles.title}>Archived Notes</h2>
      <ul className={styles.list}>
        {archivedNotes.map((note) => (
          <ArchivedNote key={note.id} text={note.text} />
        ))}
      </ul>
    </div>
  );
};

export default ArchivedNoteList;

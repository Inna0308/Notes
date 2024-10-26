import styles from "./Note.module.css";

const Note = ({ text, onDeleteNote, id }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{text}</p>
      <button className={styles.btn} type="button" onClick={() => onDeleteNote(id)}>
        ✔️
      </button>
    </li>
  );
};

export default Note;

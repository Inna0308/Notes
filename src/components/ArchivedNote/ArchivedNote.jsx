import styles from "./ArchivedNote.module.css";

const ArchivedNote = ({ text }) => {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default ArchivedNote;

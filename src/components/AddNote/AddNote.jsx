import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./AddNote.module.css";

const noteSchema = Yup.object().shape({
  text: Yup.string()
    .required("Note is required")
    .min(5, "Note must be at least 5 characters long")
    .max(50, "Note cannot exceed 50 characters"),
});

const INITIAL_VALUES = { text: "" };

const AddNote = ({ onAddNote }) => {
  const handleSubmit = (values, action) => {
    onAddNote(values);
    action.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik initialValues={INITIAL_VALUES} validationSchema={noteSchema} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <label className={styles.label}>
            <span className={styles.span}>Enter new note</span>
            <Field className={styles.input} type="text" name="text" />

            <ErrorMessage className={styles.error} name="text" component="span" />
          </label>

          <button className={styles.btn} type="submit">
            Add Note
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNote;

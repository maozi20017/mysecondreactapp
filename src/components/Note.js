// Note.js
import React from "react";
import styles from "../styles/Note.module.css";
function Note({ note, onRemove }) {
  return (
    <div className={styles.notes_item}>
      <div style={{ width: "90%" }}>
        <h4>{note.key + 1}</h4>
        <h4>Title: {note.title}</h4>
        <p>Note: {note.des}</p>
      </div>
      <button
        type="input"
        style={{
          fontSize: "20px",
          width: "8%",
          height: "35px",
          padding: "0 2% 0 2%",
          color: "black",
        }}
        onClick={() => onRemove(note.key)}
      >
        X
      </button>
    </div>
  );
}

export default Note;

import styles from "./styles/App.module.css";

import { useState, useEffect } from "react";
import Data from "./Data";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
function App() {
  const [title, setTitle] = useState();
  const [des, setDes] = useState();
  const [notes, setNotes] = useState(Data);
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(notes.length);
  }, [notes]);

  function remove(key) {
    setNotes(notes.filter((e) => e.key !== key));
  }

  // function handle() {
  //   if (!title || !des) {
  //     alert("不完整的輸入");
  //     return;
  //   }
  //   const newNote = { key: count, title: title, des: des };
  //   setNotes([...notes, newNote]);
  //   setTitle("");
  //   setDes("");
  // }
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !des) {
      alert("不完整的輸入");
      return;
    }
    const newNote = { key: count, title: title, des: des };
    setNotes([...notes, newNote]);
    setTitle("");
    setDes("");
  }
  return (
    <div className={styles.App}>
      <div className={styles.card}>
        <div className={styles.head}>
          <h1 className={styles.h1}>React 筆記本</h1>
          <h2>共{count}項</h2>
        </div>
        <div className={styles.notes}>
          {notes.map((note) => (
            <Note key={note.key} note={note} onRemove={remove} />
          ))}
          <AddNote
            title={title}
            des={des}
            onSetTitle={setTitle}
            onSetDes={setDes}
            // handle={handle}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

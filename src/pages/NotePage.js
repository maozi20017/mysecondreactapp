import styles from "../styles/App.module.css";

import { useState, useEffect } from "react";
import Data from "../Data"; // 匯入資料
import Note from "../components/Note"; // 匯入筆記
import AddNote from "../components/AddNote"; // 匯入新增筆記
function NotePage() {
  const [notes, setNotes] = useState(Data); // 筆記狀態
  const [count, setCount] = useState(); // 筆記數量狀態
  useEffect(() => {
    setCount(notes.length); // 在筆記狀態改變時更新筆記數量
  }, [notes]);

  function remove(key) {
    setNotes(notes.filter((e) => e.key !== key)); // 刪除指定筆記
  }
  function handleSubmit(e, title, des) {
    e.preventDefault();
    if (!title || !des) {
      alert("不完整的輸入");
      return;
    }
    const newNote = { key: count, title: title, des: des };
    setNotes([...notes, newNote]); // 新增筆記
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
          <AddNote onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default NotePage;

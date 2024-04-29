import styles from "./styles/App.module.css";

import { useState, useEffect } from "react";
import Data from "./Data"; // 匯入資料
import Note from "./components/Note"; // 匯入筆記
import AddNote from "./components/AddNote"; // 匯入新增筆記
import StarCitizenApi from "./components/StarCitizenApi"; // 匯入寶可夢
function App() {
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

  //StarCitizenApi
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (playerName) => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://api.starcitizen-api.com/ea8179a4e2b81067dbea45ac03cdb688/v1/live/user/${playerName}`,
          {
            method: "GET",
            headers: {
              Host: "api.starcitizen-api.com",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setSearchResult(data);
        alert(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <ul>
          <li>React筆記本</li>
          <li>星際公民玩家名api</li>
        </ul>
      </div>
      <div className={styles.content}>
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
          <StarCitizenApi onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}

export default App;

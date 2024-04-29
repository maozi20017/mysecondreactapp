import React, { useState } from "react";
import styles from "../styles/AddNote.module.css";
function AddNote(props) {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const desHandler = (event) => {
    setDes(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(event, title, des, setTitle, setDes); // 將 title 和 des 作為參數傳遞給 props.onSubmit
    setTitle("");
    setDes("");
  };

  return (
    <div className={styles.add}>
      <h3>Add Notes</h3>
      <form onSubmit={handleSubmit} method="POST">
        <input
          type="text"
          id="title"
          placeHolder="新增標題"
          value={title}
          onChange={titleHandler}
        ></input>
        <input
          type="text"
          id="description"
          placeholder="筆記"
          value={des}
          onChange={desHandler}
        ></input>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default AddNote;

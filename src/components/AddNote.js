import React from "react";
import styles from "../styles/AddNote.module.css";
function AddNote(props) {
  const titleHandler = (event) => {
    const name = event.target.value;
    props.onSetTitle(name);
  };
  const desHandler = (event) => {
    const name = event.target.value;
    props.onSetDes(name);
  };
  return (
    <div className={styles.add}>
      <h3>Add Notes</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          id="title"
          placeHolder="新增標題"
          value={props.title}
          onChange={titleHandler}
        ></input>
        <input
          type="text"
          id="description"
          placeholder="筆記"
          value={props.des}
          onChange={desHandler}
        ></input>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default AddNote;

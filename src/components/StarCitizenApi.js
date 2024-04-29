// StarCitizenApi.js
import React, { useState } from "react";

function StarCitizenApi(props) {
  const [inputValue, setInputValue] = useState("");

  const playerHandler = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player">星際公民玩家名搜尋</label>
        <input
          type="text"
          value={inputValue}
          onChange={playerHandler}
          id="player"
        />
        <button type="submit">搜尋</button>
      </form>
    </div>
  );
}

export default StarCitizenApi;

import React from "react";
import styles from "./styles/App.module.css";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <NavLink exact to="/notepage">
            React筆記本
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/starcitizenapipage">
            星際公民玩家名api
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;

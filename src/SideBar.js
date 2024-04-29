import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles/Sidebar.module.css";
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

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./SideBar";
import NotePage from "./pages/NotePage";
import StarCitizenApiPage from "./pages/StarCitizenApiPage";
import styles from "./styles/App.module.css";
function App() {
  return (
    <div className={styles.container}>
      <Router>
        <Sidebar className={styles.sidebar} />
        <Routes>
          <Route
            path="/notepage"
            element={<NotePage className={styles.content} />}
          />
          <Route
            path="/starcitizenapipage"
            element={<StarCitizenApiPage className={styles.content} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

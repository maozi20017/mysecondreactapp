import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import NotePage from "./pages/NotePage";
import StarCitizenApiPage from "./pages/StarCitizenApiPage";
import styles from "./styles/App.module.css";
function App() {
  return (
    <div className={styles.container}>
      <Router>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/notepage" element={<NotePage />} />
            <Route
              path="/starcitizenapipage"
              element={<StarCitizenApiPage />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

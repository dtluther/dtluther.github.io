import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NewHomePage from "./pages/NewHome";
import TimelinePage from "./pages/Timeline";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/newhome" element={<NewHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

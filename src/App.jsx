import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

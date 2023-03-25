import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Blog from './Components/Blog';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/psoper1.github.io/" element={<Home />} />
          <Route path="/psoper1.github.io/blog" element={<Blog />} />
          <Route path="/psoper1.github.io/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Blog from './Components/Blog';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
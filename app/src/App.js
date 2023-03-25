import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Blog from './Components/Blog';
import Projects from './Components/Projects';

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;




/* <Router>
  <HashRouter basename="/">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  </HashRouter>
</Router> */
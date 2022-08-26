import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Submit from './pages/Submit';
import Comment from './pages/Comment';

function App() {

  

  return (
    <div className="App">
      <Router>
        <header>
          <Link className="home-link" to="/">Home</Link>
        </header>
        <div className="submit-link-container" >
          <Link className="submit-link" to="/submit">
            Create Anonymous Post <span role="img" aria-label="ghost"> 💬 </span>
          </Link>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/submit" exact element={<Submit />} />
          <Route path="/comment/:id" exact element={<Comment />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

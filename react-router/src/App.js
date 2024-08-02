
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Contact from './components/contact'
import Lab from './components/lab'
import Home from './components/home'

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li >
            <NavLink to="/">Home</NavLink>
          </li>
          <li >
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li >
            <NavLink to="/lab">Lab</NavLink>
          </li>
        </ul>
      </nav>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/lab" element={<Lab/>}/>
     </Routes>
    </div>
  );
}

export default App;

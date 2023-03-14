import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SampleForm from './sampleForm';
import NoPage from './NoPage';


function App() {
  return (
    <BrowserRouter>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/SignUp' element={<SampleForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>)
}

export default App;

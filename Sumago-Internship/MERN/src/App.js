import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './Navbar1';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Team from './Team';
// import { Link } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Navbar1/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Team' element={<Team/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



import './App.css';

import React from 'react';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";

import Cartoons from './Cartoons';

import Serials from './Serials';

import FilterLogic from './FilterLogic';
import Home from './Home';



function App() {
  return  ( 
  
    <Router>

<nav className='header'>
  <Link to="/" className="logo" >Cinima<span>Film</span></Link>
  <div className='header-menu'>
  <Link to="/movies" className="link" >Фильмы</Link>
  <Link to="/serial" className="link">Сериалы</Link>
  <Link to="/cartoons" className="link" >Мультфильмы</Link>
  </div>
  
</nav>

<Routes>
  <Route path='/' element={<Home />} />
  <Route path="/movies" element={<FilterLogic />} />
  <Route path="/serial" element={<Serials />} />
  
  <Route path="/cartoons" element={<Cartoons />} />
</Routes>

</Router>

 
      
  )
  
}

export default App;

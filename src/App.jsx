import { useState } from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

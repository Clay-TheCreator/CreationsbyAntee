import { useState } from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Items from './components/items';
import itemsAll from './components/itemsData';

import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items itemsAll={itemsAll} />} />
          <Route path="/items/:category" element={<Items itemsAll={itemsAll}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

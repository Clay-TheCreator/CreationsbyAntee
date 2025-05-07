import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Shop from "./components/items";
import itemsAll from "./components/itemsData";
import ScrollToTop from "./components/scrolltotop";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />{" "}
        {/* This will reset scroll position on every route change */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop itemsAll={itemsAll} />} />
          <Route
            path="/shop/:category"
            element={<Shop itemsAll={itemsAll} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

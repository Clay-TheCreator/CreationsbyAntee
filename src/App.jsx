import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Collections from "./components/items";
import itemsAll from "./components/itemsData";
import ScrollToTop from "./components/scrolltotop";
import PopularItems from "./components/popularitems";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />{" "}
        
        <Routes>
          <Route path="/" element={<Home itemsAll={itemsAll} />} />
          
          <Route path="/collections" element={<Collections itemsAll={itemsAll} />} />
          <Route
            path="/collections/:category"
            element={<Collections itemsAll={itemsAll} />}
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

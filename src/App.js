import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import Shop from "./Components/Pages/Shop";
// import Sale from "./Components/Pages/Sale";
// import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
// import Reviews from "./Components/Pages/Reviews";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/sale" element={<Sale />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/reviews" element={<Reviews />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
 
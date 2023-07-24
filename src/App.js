import React, { Suspense } from "react";
//mport "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.jsx";
import Shop from "./Components/Pages/Shop";
import Sales from "./Components/Pages/Sales";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Reviews from "./Components/Pages/Reviews";
import Description from "./Components/Pages/Description";
import Information from "./Components/Pages/Information.jsx";
import Confirmation from "./Components/Pages/Confirmation.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cart from "./Components/Pages/Cart";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { createContext, useState } from "react";

export const ShopContext = createContext({cart: ['defaultCart'], setCart: () => {}});

export function App()
{

  let [cart, setCart] = useState(['exampleCart']);
  const value = {cart, setCart}
  return (
    <ShopContext.Provider value={value}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback="Loading...">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/description" element={<Description />} />
              <Route path="/information" element={<Information />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
            <Footer />
          </Router>
        </Suspense>
      </I18nextProvider>
    </ShopContext.Provider>
  );
}
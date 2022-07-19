import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Items from "../pages/Items";
import Thanks from "../pages/Thanks";
// import your route components too



const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;

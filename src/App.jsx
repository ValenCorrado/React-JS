import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./components/Context/Context";
import Navbar from "./components/Header/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center", color: "red" }}>
                404 - Página no encontrada
              </h1>
            }
          />
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
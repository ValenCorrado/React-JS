import './App.css';
import React from 'react';
import Navbar from './components/Header/NavBar';
import { Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './components/Context/Context'; 
import Home from './pages/home';
import Contact from './pages/Contact';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/:category" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
import React, { useState, Fragment } from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import { Login } from './components/Login';
import { ShoppingCart } from './components/WaiterView/ShoppingCart';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
// import { ButtonsAddLess } from '../src/components/ButtonsAddLess';
function App() {

  return (

    
    <div className="App">
    <div className="container-main">
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/shopping" element={<ShoppingCart/>}/>
    </Routes>
    </AuthProvider>

    </div>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import './App.css';

const App = () => {
  return (

    <div className='App'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
};

export default App;


//import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Dernier from "./pages/Dernier";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dernier" element={<Dernier />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

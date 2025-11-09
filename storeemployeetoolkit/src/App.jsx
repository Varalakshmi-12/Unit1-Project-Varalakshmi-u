import React from "react";
import {   Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./index.css";


export default function App() {
  return (
    <>
    <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      </>
  );
}
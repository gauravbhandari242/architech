import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Header/Header";
import Component from "./components/Componenttt/Compon";
import Service from "./components/Servicecopy/Service";
import About from "./components/About/About";
import Work from "./components/work/Work";
import Working from "./components/Working/Working";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/FooterSection/Footer";
import Customer from "./components/Customer_service/Customer";
import Founder from "./components/Founder/Founder";
import Aboutsss from "./components/ABOUTSSS/Aboutsss";

function Home() {
  return (
    <>
      <Component />
      <Aboutsss />
      <About />
      <Work />
      <Working />
      <Blog />
      <Customer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/Servicecopy" element={<Service />} />
        <Route path="/Working" element={<Work />} />
        <Route path="/Compon" element={<Blog />} />
        <Route path="/Componenttt" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

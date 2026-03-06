import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import Founder from "./Founder/Founder";
import Aboutsss from "./components/ABOUTSSS/Aboutsss";

import "./components/Header/Header.css";
import "./components/Componenttt/compon.css";
import "./components/Servicecopy/Service.css";
import "./components/About/About.css";
import "./components/work/Work.css";
import "./components/Working/Working.css";
import "./components/Blog/Blog.css";
import "./components/Contact/Contact.css";
import "./components/FooterSection/Footer.css";
import "./components/Customer_service/Customer.css";
import "./Founder/Founder.css";
import "./components/ABOUTSSS/Aboutsss.css";

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
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<Aboutsss />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

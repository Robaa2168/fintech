import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Pricing from './components/Pricing';
import About from './components/About';
import SignUp from './components/Signup';
import Contact from './components/Contact';
import Questions from './components/FAQ';
import Coming from './components/Coming';
import Footer  from './components/footer';
function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/faq" element={<Questions />} />
        <Route path="*" element={<Coming />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

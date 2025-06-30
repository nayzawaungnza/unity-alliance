import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Brand from './pages/Brand';
import CSR from './pages/CSR';
import Agronomy from './pages/Agronomy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/agronomy" element={<Agronomy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
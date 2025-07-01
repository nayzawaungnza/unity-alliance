import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Brand from './pages/Brand';
import CSR from './pages/CSR';
import Agronomy from './pages/Agronomy';
import CookieConsent from './components/CookieConsent';
import CookiePolicy from './pages/CookiePolicy';
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
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;
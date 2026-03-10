import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ConsultationFAB from './components/ConsultationFAB';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        {/* Global CSS Noise Overlay */}
        <div className="noise-overlay"></div>

        <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <ConsultationFAB />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

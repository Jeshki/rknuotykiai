import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Paliekame tik Routes ir Route
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer'; 
import ApieManePage from './pages/ApieManePage';
import ArtimiausiRenginiaiPage from './pages/ArtimiausiRenginiaiPage';
import KontaktaiPage from './pages/KontaktaiPage';
import PaslaugosPage from './pages/PaslaugosPage';
import ZygiaiPage from './pages/ZygiaiPage';
import './index.css';


function App() {
  return (
    <ThemeProvider>
      {/* Pašaliname <Router> ir </Router> žymes */}
      <div className="app-container"> 
        <Navigation />
        <main className="content"> 
          <Routes>
            <Route path="/" element={<ApieManePage />} />
            <Route path="/apie-mane" element={<ApieManePage />} />
           <Route path="/artimiausi-renginiai" element={<ArtimiausiRenginiaiPage />} />
            <Route path="/kontaktai" element={<KontaktaiPage />} />
           <Route path="/zygiai" element={<ZygiaiPage />} />
          </Routes>
        </main>
        <Footer /> 
      </div>
    </ThemeProvider>
  );
}

export default App;
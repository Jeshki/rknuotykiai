import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer'; 
import ApieManePage from './pages/ApieManePage';
import ArtimiausiRenginiaiPage from './pages/ArtimiausiRenginiaiPage';
import KontaktaiPage from './pages/KontaktaiPage';
import PaslaugosPage from './pages/PaslaugosPage';
import ZygiaiPage from './pages/ZygiaiPage';
// import './index.css'; // Nebereikia, nes stiliai perkelti

function App() {
  return (
    // app-container klasių nebereikia, nes jas pridėjome prie body ThemeContext.jsx
    <div className="flex-1"> {/* main elemento flex augimas */}
        <Navigation />
        <main className="flex-grow"> {/* content klasių nebereikia */}
          <Routes>
            <Route path="/" element={<ApieManePage />} />
            <Route path="/apie-mane" element={<ApieManePage />} />
            <Route path="/artimiausi-renginiai" element={<ArtimiausiRenginiaiPage />} />
            <Route path="/kontaktai" element={<KontaktaiPage />} />
            <Route path="/zygiai" element={<ZygiaiPage />} />
            <Route path="/paslaugos" element={<PaslaugosPage />} />
          </Routes>
        </main>
        <Footer /> 
    </div>
  );
}

export default App;
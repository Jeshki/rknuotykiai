// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import ApieManePage from './pages/ApieManePage.jsx';
import ArtimiausiRenginiaiPage from './pages/ArtimiausiRenginiaiPage.jsx';
import KontaktaiPage from './pages/KontaktaiPage.jsx';
import PaslaugosPage from './pages/PaslaugosPage.jsx';
import ZygiaiPage from './pages/ZygiaiPage.jsx';
import AtsiliepimaiPage from './pages/AtsiliepimaiPage.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<ApieManePage />} />
          <Route path="/apie-mane" element={<ApieManePage />} />
          <Route path="/artimiausi-renginiai" element={<ArtimiausiRenginiaiPage />} />
          <Route path="/kontaktai" element={<KontaktaiPage />} />
          <Route path="/zygiai" element={<ZygiaiPage />} />
          <Route path="/paslaugos" element={<PaslaugosPage />} />
          <Route path="/atsiliepimai" element={<AtsiliepimaiPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

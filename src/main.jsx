import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx'; // Importuojame ThemeProvider

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    {/* Pirmiausia apgaubiame ThemeProvider */}
    <ThemeProvider>
      {/* Tada apgaubiame BrowserRouter */}
      <BrowserRouter>
        {/* App komponentas dabar yra ThemeProvider viduje */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);

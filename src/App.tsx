import { HashRouter, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Obrigado from './pages/Obrigado';

// Função para checar o ambiente de Preview (Hybrid Routing)
function checkPreviewEnvironment() {
  const href = window.location.href;
  const hostname = window.location.hostname;
  
  // Strings indicadoras de proxy de desenvolvimento/preview
  const indicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox',
    'run.app' // Cloud Run / AI Studio preview
  ];
  
  return indicators.some(indicator => hostname.includes(indicator) || href.includes(indicator));
}

export default function App() {
  const isPreview = checkPreviewEnvironment();
  
  // Seleção dinâmica do Router
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado" element={<Obrigado />} />
        {/* Fallback de Catch-all para as rotas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

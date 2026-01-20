import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPortfolio from './pages/MainPortfolio';
import ThinkingPage from './pages/ThinkingPage';

export default function App() {
  return (
    <Router>
      <div className="bg-gray-950 text-white min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/thinking" element={<ThinkingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SoilManureRecommendation from './components/SoilManureRecommendation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/soil-manure-recommendation" element={<SoilManureRecommendation />} />
        {/* Add other routes here */}
        <Route path="/" element={<SoilManureRecommendation />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App; 
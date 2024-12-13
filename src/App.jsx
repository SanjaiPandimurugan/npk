import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SensorDashboard from './components/SensorDashboard';
import SoilManureRecommendation from './components/SoilManureRecommendation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={
              <div>
                <SensorDashboard />
                <div id="calculator-section" className="scroll-mt-20">
                  <SoilManureRecommendation />
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 
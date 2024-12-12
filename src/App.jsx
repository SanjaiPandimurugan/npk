import React from 'react';
import SoilManureCalculator from './components/SoilManureCalculator';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Fertile Future30</h1>
          <p className="text-sm mt-1">Soil Testing and Fertilizer Recommendation System</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <SoilManureCalculator />
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-100 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2024 Agricultural Nutrient Management System</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 
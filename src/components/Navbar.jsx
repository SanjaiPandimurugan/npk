import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calculator } from 'lucide-react';
import logo from '../assets/logo6.png';

const Navbar = () => {
  const location = useLocation();

  const scrollToCalculator = (e) => {
    e.preventDefault();
    const calculatorSection = document.getElementById('calculator-section');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-700 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow-md" />
            <span className="text-white font-semibold text-lg">FertileFuture30</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${location.pathname === '/' 
                  ? 'text-green-100 bg-green-700/50' 
                  : 'text-green-100 hover:bg-green-700/30'}`}
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            
            <button
              onClick={scrollToCalculator}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                text-green-100 hover:bg-green-700/30"
            >
              <Calculator size={18} />
              <span>OM Calculator</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
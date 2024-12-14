import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calculator, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';
import logo from '../assets/logo6.png';

const Navbar = () => {
  const location = useLocation();
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const t = translations[currentLanguage] || translations.english;

  const languages = [
    { code: 'english', label: 'English', flag: '🇬🇧' },
    { code: 'tamil', label: 'தமிழ்', flag: '🇮🇳' },
    { code: 'hindi', label: 'hindi', flag: '🇮🇳' },
    { code: 'punjabi', label: 'punjabi', flag: '🇮🇳' },
    { code: 'gujarati', label: 'gujarati', flag: '🇮🇳' },
    { code: 'haryanvi', label: 'haryanvi', flag: '🇮🇳' }
  ];

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
  };

  if (!t) {
    return null;
  }

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-700 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow-md" />
            <span className="text-white font-semibold text-lg">{t.brandName || 'Smart Agriculture'}</span>
          </div>

          {/* Navigation Links and Language Selector */}
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${location.pathname === '/' 
                  ? 'text-green-100 bg-green-700/50' 
                  : 'text-green-100 hover:bg-green-700/30'}`}
            >
              <Home size={18} />
              <span>{t.home || 'Home'}</span>
            </Link>

            {/* Language Selector Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium 
                         text-green-100 hover:bg-green-700/30 transition-colors"
                aria-label="Select Language"
              >
                <Globe size={18} />
                <span className="ml-1">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
                <span className="hidden md:inline ml-1">
                  {languages.find(lang => lang.code === currentLanguage)?.label}
                </span>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black 
                            ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                            transition-all duration-200 transform origin-top-right">
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center w-full px-4 py-2 text-sm text-left
                                ${currentLanguage === lang.code 
                                  ? 'bg-green-50 text-green-700' 
                                  : 'text-gray-700 hover:bg-green-50 hover:text-green-700'}
                                transition-colors duration-150`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculator Link */}
            <Link
              to="/calculator"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium 
                       text-green-100 hover:bg-green-700/30 transition-colors"
            >
              <Calculator size={18} />
              <span>{t.calculator || 'Calculator'}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

const SensorCard = ({ title, value, unit, icon, color, timestamp }) => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return null;
    return new Date(timestamp.seconds * 1000).toLocaleString();
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Status Indicator Strip */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-${color}-500 opacity-75`} />
      
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className={`p-3.5 rounded-xl bg-${color}-50 ring-2 ring-${color}-100`}>
              <div className={`text-${color}-600 w-6 h-6`}>{icon}</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <div className="flex items-center mt-1">
                <div className={`h-2 w-2 rounded-full ${value === '--' ? 'bg-yellow-400' : 'bg-green-400'} animate-pulse`} />
                <span className="text-xs text-gray-500 ml-2">
                  {value === '--' ? 'Updating...' : t?.sensors?.liveReading}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Display Section */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className={`text-5xl font-bold tracking-tight ${value === '--' ? 'text-gray-300' : `text-${color}-600`}`}>
              {value}
            </span>
            <span className={`text-lg ${value === '--' ? 'text-gray-300' : 'text-gray-500'}`}>
              {unit}
            </span>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="text-xs">
              {formatTimestamp(timestamp) || 'Syncing...'}
            </span>
          </div>

          {/* Range Indicator */}
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            value === '--' ? 'bg-gray-100 text-gray-500' : `bg-${color}-50 text-${color}-700`
          }`}>
            {value === '--' ? 'No reading' : t?.sensors?.normalRange}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-${color}-100/20 blur-2xl`} />
      <div className={`absolute -left-6 -bottom-6 w-24 h-24 rounded-full bg-${color}-100/20 blur-2xl`} />
    </div>
  );
};

export default SensorCard;
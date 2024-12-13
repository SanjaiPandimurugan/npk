import React from 'react';
import { Leaf, Droplets, Zap, FlaskConical, Calculator, FileSpreadsheet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import SensorCard from '../components/SensorCard';
import soilAnalysisImage from '../assets/soil-analysis.jpg';
import nutrientCalculatorImage from '../assets/nutrient-calculator.jpg';

const Home = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const sensorData = {
    nitrogen: {
      current: 140,
      history: [
        { nitrogen: 135 },
        { nitrogen: 138 },
        { nitrogen: 139 },
        { nitrogen: 140 }
      ],
      range: { min: 120, max: 160, optimal: 140 }
    },
    phosphorous: {
      current: 45,
      data: [
        { value: 41 },
        { value: 42 },
        { value: 44 },
        { value: 45 }
      ],
      range: { min: 30, max: 60, optimal: 45 }
    },
    potassium: {
      current: 185,
      history: [
        { potassium: 180 },
        { potassium: 182 },
        { potassium: 184 },
        { potassium: 185 }
      ],
      range: { min: 150, max: 200, optimal: 175 }
    },
    ph: {
      current: 6.5,
      history: [
        { ph: 6.3 },
        { ph: 6.4 },
        { ph: 6.4 },
        { ph: 6.5 }
      ],
      range: { min: 6.0, max: 7.0, optimal: 6.5 }
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Sensor Cards Section */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="w-2 h-8 bg-green-600 rounded-full mr-4"></div>
          <h2 className="text-2xl font-bold text-gray-800">
            Real-Time Nutrient Levels
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SensorCard
            title={t.nitrogenTitle}
            value={sensorData.nitrogen.current}
            unit="mg/kg"
            icon={<Leaf size={24} />}
            color="emerald"
            data={sensorData.nitrogen.history}
            range={sensorData.nitrogen.range}
          />

          <SensorCard
            title="Phosphorus"
            value={sensorData.phosphorous.current}
            unit="ppm"
            icon={<FlaskConical size={24} />}
            color="blue"
            data={sensorData.phosphorous.data}
            range={sensorData.phosphorous.range}
          />

          <SensorCard
            title={t.potassiumTitle}
            value={sensorData.potassium.current}
            unit="mg/kg"
            icon={<Zap size={24} />}
            color="amber"
            data={sensorData.potassium.history}
            range={sensorData.potassium.range}
          />

          <SensorCard
            title="pH Level"
            value={sensorData.ph.current}
            unit="pH"
            icon={<Droplets size={24} />}
            color="rose"
            data={sensorData.ph.history}
            range={sensorData.ph.range}
          />
        </div>
      </div>

      {/* Analysis and Calculator Options Section */}
      <div className="mt-16">
        <div className="flex items-center mb-8">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-green-600 rounded-full mr-4"></div>
          <h2 className="text-2xl font-bold text-gray-800">
            Soil Analysis Tools
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Soil Analysis Card */}
          <Link to="/soil-analysis" className="group">
            <div className="bg-white rounded-xl transition-all duration-300 
                          border-2 border-blue-200 hover:border-blue-400
                          shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]
                          hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)]
                          relative overflow-hidden h-[320px]">
              <div className="absolute inset-0 bg-cover bg-center opacity-20"
                   style={{ backgroundImage: `url(${soilAnalysisImage})` }}>
              </div>
              
              <div className="relative h-full p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 
                              border-2 border-blue-200 group-hover:scale-110 
                              transition-transform duration-300
                              shadow-[0_4px_12px_-2px_rgba(59,130,246,0.3)]">
                    <FileSpreadsheet size={24} />
                  </div>
                  <h3 className="text-lg font-bold ml-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                    Soil Analysis
                  </h3>
                </div>
                
                <p className="text-gray-600 ml-1 mb-4 text-sm leading-relaxed">
                  Get comprehensive insights about your soil composition and health
                </p>
              </div>
            </div>
          </Link>

          {/* Calculator Card */}
          <Link to="/step1" className="group">
            <div className="bg-white rounded-xl transition-all duration-300 
                          border-2 border-green-200 hover:border-green-400
                          shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]
                          hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)]
                          relative overflow-hidden h-[320px]">
              <div className="absolute inset-0 bg-cover bg-center opacity-20"
                   style={{ backgroundImage: `url(${nutrientCalculatorImage})` }}>
              </div>
              
              <div className="relative h-full p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-green-50 text-green-600 
                              border-2 border-green-200 group-hover:scale-110 
                              transition-transform duration-300
                              shadow-[0_4px_12px_-2px_rgba(34,197,94,0.3)]">
                    <Calculator size={24} />
                  </div>
                  <h3 className="text-lg font-bold ml-4 text-gray-800 group-hover:text-green-600 transition-colors">
                    Nutrient Calculator
                  </h3>
                </div>
                
                <p className="text-gray-600 ml-1 mb-4 text-sm leading-relaxed">
                  Calculate optimal nutrient requirements for your crops
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 
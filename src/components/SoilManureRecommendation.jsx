import React, { useState, useEffect } from 'react';
import { soilDatabase, deficiencyManagement } from '@/data/soilDatabase';
import { cropDatabase } from '@/data/cropDatabase';
import logo from '../assets/logo6.png'

const Navbar = () => (
  <nav className="bg-green-600 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="FertileFuture Logo" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold">FertileFuture30</h1>
            <p className="text-sm text-green-100">Smart Farming Solutions</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

const InfoCard = ({ title, children, className }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

const SoilManureRecommendation = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [landArea, setLandArea] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const states = Object.keys(soilDatabase);

  const getDistricts = (selectedState) => {
    return Object.keys(soilDatabase[selectedState]?.districts || {});
  };

  const getSuitableCrops = (selectedState, selectedDistrict) => {
    if (!selectedState || !selectedDistrict) return [];
    
    const districtData = soilDatabase[selectedState].districts[selectedDistrict];
    const soilTypes = districtData.soil_types;
    
    return Object.keys(cropDatabase).filter(crop => {
      const cropSoilTypes = cropDatabase[crop].soil_types;
      return cropSoilTypes.some(soilType => 
        soilTypes.includes(soilType)
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cropName: selectedCrop
        })
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to get predictions');
      }

      setRecommendations({
        cropName: selectedCrop,
        organic_manure: {
          fym: {
            quantity: data.predictions.fym,
            timing: "Apply before planting/sowing",
            method: "Broadcast and incorporate into soil",
            benefits: "Improves soil structure and nutrient content"
          },
          vermicompost: {
            quantity: data.predictions.vermicompost,
            timing: "Apply 2-3 weeks before planting",
            method: "Mix with soil in planting rows/beds",
            benefits: "Rich in nutrients and beneficial microorganisms"
          },
          neem_cake: {
            quantity: data.predictions.neem_cake,
            timing: "Apply during land preparation",
            method: "Spread evenly and mix with soil",
            benefits: "Natural pest repellent and soil enricher"
          }
        },
        npk_analysis: {
          soil: "Current soil NPK",
          crop: data.predictions.npk_ratio,
          deficit: "Additional nutrients needed"
        },
        deficiencies: []
      });

    } catch (err) {
      setError(err.message);
      setRecommendations(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Organic Manure Calculator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                State <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    setDistrict('');
                    setSelectedCrop('');
                    setRecommendations(null);
                  }}
                >
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                District <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none disabled:bg-gray-100"
                  value={district}
                  disabled={!state}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                    setSelectedCrop('');
                    setRecommendations(null);
                  }}
                >
                  <option value="">Select District</option>
                  {state && getDistricts(state).map(dist => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Crop <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none disabled:bg-gray-100"
                  value={selectedCrop}
                  disabled={!district}
                  onChange={(e) => {
                    setSelectedCrop(e.target.value);
                    setRecommendations(null);
                  }}
                >
                  <option value="">Select Crop</option>
                  {district && getSuitableCrops(state, district).map(crop => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Land Area (Hectares) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={landArea}
                onChange={(e) => setLandArea(e.target.value)}
                min="0.1"
                step="0.1"
                placeholder="Enter area in hectares"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !selectedCrop || !landArea}
            className="w-full mt-8 bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 disabled:bg-gray-400 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {loading ? 'Generating...' : 'Generate Recommendations'}
          </button>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
              {error}
            </div>
          )}
        </form>

        {recommendations && (
          <div className="space-y-12 mt-12">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-10">
              Analysis Results for {selectedCrop}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard title="NPK Analysis" className="border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Soil Analysis</p>
                    <p className="font-semibold">{recommendations.npk_analysis.soil}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Crop Requirement</p>
                    <p className="font-semibold">{recommendations.npk_analysis.crop}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Additional Nutrients Needed</p>
                    <p className="font-semibold text-green-600">{recommendations.npk_analysis.deficit}</p>
                  </div>
                </div>
              </InfoCard>

              <InfoCard title="Organic Manure Recommendations" className="border-t-4 border-yellow-500 hover:shadow-xl transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Farmyard Manure (FYM)</h4>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-700">
                        Quantity: {recommendations.organic_manure.fym.quantity} Kg
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Timing: {recommendations.organic_manure.fym.timing}
                      </p>
                      <p className="text-sm text-gray-600">
                        Method: {recommendations.organic_manure.fym.method}
                      </p>
                      <p className="text-sm text-gray-600 italic mt-1">
                        Benefits: {recommendations.organic_manure.fym.benefits}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Vermicompost</h4>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-700">
                        Quantity: {recommendations.organic_manure.vermicompost.quantity} kg
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Timing: {recommendations.organic_manure.vermicompost.timing}
                      </p>
                      <p className="text-sm text-gray-600">
                        Method: {recommendations.organic_manure.vermicompost.method}
                      </p>
                      <p className="text-sm text-gray-600 italic mt-1">
                        Benefits: {recommendations.organic_manure.vermicompost.benefits}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Neem Cake</h4>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="font-semibold text-gray-700">
                        Quantity: {recommendations.organic_manure.neem_cake.quantity} kg
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Timing: {recommendations.organic_manure.neem_cake.timing}
                      </p>
                      <p className="text-sm text-gray-600">
                        Method: {recommendations.organic_manure.neem_cake.method}
                      </p>
                      <p className="text-sm text-gray-600 italic mt-1">
                        Benefits: {recommendations.organic_manure.neem_cake.benefits}
                      </p>
                    </div>
                  </div>
                </div>
              </InfoCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SoilManureRecommendation; 
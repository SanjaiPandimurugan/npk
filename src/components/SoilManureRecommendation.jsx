import React, { useState, useEffect } from 'react';
import { soilDatabase, calculateFertilizerRecommendation } from '@/data/soilDatabase';
import { cropDatabase } from '@/data/cropDatabase';
import logo from '../assets/logo6.png'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, limit, onSnapshot, getDocs, enableIndexedDbPersistence } from 'firebase/firestore';
import { useLanguage } from '../contexts/LanguageContext';
import soilManureTranslations from '../translations/soilManure';

// Use the same Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBiVWzxSgMjib_BxqCBiycbh9x9YFQ0uZw",
  authDomain: "hosting-c74b1.firebaseapp.com",
  projectId: "hosting-c74b1",
  storageBucket: "hosting-c74b1.firebasestorage.app",
  messagingSenderId: "64402130067",
  appId: "1:64402130067:web:3683373d07b29a916f3966",
  measurementId: "G-DYJY25CLDE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const InfoCard = ({ title, children, className }) => (
  <div className={`bg-white backdrop-blur-sm bg-white/90 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] ${className}`}>
    <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">{title}</h3>
    {children}
  </div>
);

const SoilManureRecommendation = () => {
  const { currentLanguage } = useLanguage();
  const t = soilManureTranslations[currentLanguage] || soilManureTranslations.english;

  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [landArea, setLandArea] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sensorValues, setSensorValues] = useState({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
    pH: 0,
    moisture: 0
  });

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
      const currentNPK = {
        n: Math.round((sensorValues.nitrogen * 100) / 10),
        p: Math.round((sensorValues.phosphorus * 100) / 10),
        k: Math.round((sensorValues.potassium * 100) / 10)
      };

      const cropData = cropDatabase[selectedCrop];
      const cropRequirements = {
        n: cropData.npk_ratio.n,
        p: cropData.npk_ratio.p,
        k: cropData.npk_ratio.k
      };

      // Get ML predictions
      const mlResponse = await getMLPrediction(currentNPK, cropRequirements);
      
      if (mlResponse && mlResponse.predictions) {
        setRecommendations({
          ...recommendations,
          organic_manure: {
            fym: {
              quantity: mlResponse.predictions.fym_quantity,
              timing: "Apply before planting/sowing",
              method: "Broadcast and incorporate into soil",
              benefits: "Improves soil structure and nutrient content"
            },
            vermicompost: {
              quantity: mlResponse.predictions.vermicompost_quantity,
              timing: "Apply 2-3 weeks before planting",
              method: "Mix with soil in planting rows/beds",
              benefits: "Rich in nutrients and beneficial microorganisms"
            },
            neem_cake: {
              quantity: mlResponse.predictions.neem_cake_quantity,
              timing: "Apply during land preparation",
              method: "Spread evenly and mix with soil",
              benefits: "Natural pest repellent and soil enricher"
            }
          }
        });
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const sensorRef = collection(db, 'sensor_data');
    const q = query(sensorRef, orderBy('timestamp', 'desc'), limit(1));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        setSensorValues({
          nitrogen: data.nitrogen || 0,
          phosphorus: data.phosphorus || 0,
          potassium: data.potassium || 0,
          pH: data.pH || 0,
          moisture: data.moisture || 0
        });
      }
    });

    return () => unsubscribe();
  }, []);

  // Add error handling for Firebase connection
  useEffect(() => {
    const checkFirebaseConnection = async () => {
      try {
        // Test the connection by trying to get a document
        const testQuery = query(collection(db, 'npk_sensor_data'), limit(1));
        await getDocs(testQuery);
        console.log("Firebase connection successful");
      } catch (error) {
        console.error("Firebase connection error:", error);
        setError("Failed to connect to database");
      }
    };

    checkFirebaseConnection();
  }, []);

  // Add this function to generate random values
  const generateRandomValue = () => Math.floor(Math.random() * 100);

  // Function to calculate recommendations based on NPK values
  const calculateNPKBasedRecommendations = () => {
    const n = sensorValues.nitrogen || 0;
    const p = sensorValues.phosphorus || 0;
    const k = sensorValues.potassium || 0;
    
    // Basic calculation example (you can adjust the formula as needed)
    return {
      fym: Math.max(0, Math.round((10 - n) * 100)),
      vermicompost: Math.max(0, Math.round((5 - p) * 150)),
      neemCake: Math.max(0, Math.round((7 - k) * 50))
    };
  };

  const SensorCard = ({ title, value, unit }) => (
    <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl border border-blue-100">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-blue-800">{title}</span>
        <span className="text-2xl font-bold text-blue-700">{value} {unit}</span>
      </div>
    </div>
  );

  const getMLPrediction = async (currentNPK, cropRequirements) => {
    try {
      console.log('Sending data:', { currentNPK, cropRequirements }); // Debug log
      
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          current_npk: currentNPK,
          crop_requirements: cropRequirements,
          soil_type: soilDatabase[state]?.districts[district]?.soil_types[0],
          crop: selectedCrop,
          land_area: parseFloat(landArea)
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('ML Response:', data); // Debug log
      return data;
    } catch (error) {
      console.error('ML API Error:', error);
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
            {t.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 tracking-wide">
                {t.state} <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select
                  className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 appearance-none transition-all duration-300 hover:border-green-400 shadow-sm"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    setDistrict('');
                    setSelectedCrop('');
                    setRecommendations(null);
                  }}
                >
                  <option value="">{t.selectState}</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500 group-hover:text-green-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 tracking-wide">
                {t.district} <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select
                  className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 appearance-none transition-all duration-300 hover:border-green-400 shadow-sm disabled:bg-gray-100"
                  value={district}
                  disabled={!state}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                    setSelectedCrop('');
                    setRecommendations(null);
                  }}
                >
                  <option value="">{t.selectDistrict}</option>
                  {state && getDistricts(state).map(dist => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500 group-hover:text-green-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 tracking-wide">
                {t.crop} <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select
                  className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 appearance-none transition-all duration-300 hover:border-green-400 shadow-sm disabled:bg-gray-100"
                  value={selectedCrop}
                  disabled={!district}
                  onChange={(e) => {
                    setSelectedCrop(e.target.value);
                    setRecommendations(null);
                  }}
                >
                  <option value="">{t.selectCrop}</option>
                  {district && getSuitableCrops(state, district).map(crop => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500 group-hover:text-green-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 tracking-wide">
                {t.landArea} <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="w-full p-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 hover:border-green-400 shadow-sm"
                value={landArea}
                onChange={(e) => setLandArea(e.target.value)}
                min="0.1"
                step="0.1"
                placeholder={t.enterAreaInHectares}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !selectedCrop || !landArea}
            className="w-full mt-10 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-400 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.generating}
              </span>
            ) : (
              t.generateButton
            )}
          </button>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl animate-shake">
              {t.errors?.[error] || error}
            </div>
          )}
        </form>

        {recommendations && (
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{t.npkAnalysis.title}</h3>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border border-green-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-green-800">{t.npkAnalysis.currentNPK}</span>
                      <span className="text-2xl font-bold text-green-700">
                        {`${Math.round((sensorValues.nitrogen * 100) / 10)}:${Math.round((sensorValues.phosphorus * 100) / 10)}:${((sensorValues.potassium) * 100) / 10}`}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-blue-800">{t.npkAnalysis.soilAnalysis}</span>
                      <span className="text-2xl font-bold text-blue-700">{recommendations.npk_analysis.soil}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border border-green-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-green-800">{t.npkAnalysis.cropRequirement}</span>
                      <span className="text-2xl font-bold text-green-700">{recommendations.npk_analysis.crop}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-xl border border-purple-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-purple-800">{t.npkAnalysis.additionalNutrients}</span>
                      <span className="text-2xl font-bold text-purple-700">{recommendations.npk_analysis.deficit}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{t.organicManure.recommendationsTitle}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-xl border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2">{t.organicManure.npkRecommendationHeading}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">{t.organicManure.quantity}</span>
                        <span className="font-bold text-green-900">0 kg</span>
                      </div>
                      <div className="text-sm text-green-600 space-y-1">
                        <p>⏰ {t.organicManure.timing}</p>
                        <p>📝 {t.organicManure.method}</p>
                        <p>✨ {t.organicManure.benefits}</p>
                      </div>
                    </div>
                  </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-white p-4 rounded-xl border border-yellow-100">
                      <h4 className="font-semibold text-yellow-800 mb-2">{t.organicManure.fym}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-700">{t.organicManure.quantity}</span>
                          <span className="font-bold text-yellow-900">{recommendations.organic_manure.fym.quantity} Kg</span>
                        </div>
                        <div className="text-sm text-yellow-600 space-y-1">
                          <p>⏰ {t.organicManure.timing}</p>
                          <p>📝 {t.organicManure.method}</p>
                          <p>✨ {t.organicManure.benefits}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-white p-4 rounded-xl border border-yellow-100">
                      <h4 className="font-semibold text-yellow-800 mb-2">{t.organicManure.vermicompost}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-700">{t.organicManure.quantity}</span>
                          <span className="font-bold text-yellow-900">{recommendations.organic_manure.vermicompost.quantity} kg</span>
                        </div>
                        <div className="text-sm text-yellow-600 space-y-1">
                          <p>⏰ {t.organicManure.timing}</p>
                          <p>📝 {t.organicManure.method}</p>
                          <p>✨ {t.organicManure.benefits}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-white p-4 rounded-xl border border-yellow-100">
                      <h4 className="font-semibold text-yellow-800 mb-2">{t.organicManure.neemCake}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-700">{t.organicManure.quantity}</span>
                          <span className="font-bold text-yellow-900">{recommendations.organic_manure.neem_cake.quantity} kg</span>
                        </div>
                        <div className="text-sm text-yellow-600 space-y-1">
                          <p>⏰ {t.organicManure.timing}</p>
                          <p>📝 {t.organicManure.method}</p>
                          <p>✨ {t.organicManure.benefits}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default SoilManureRecommendation; 
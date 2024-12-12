import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { soilDatabase, deficiencyManagement, nutrientStatus } from '@/data/soilDatabase';
import { cropDatabase } from '@/data/cropDatabase';

const SoilManureCalculator = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [landArea, setLandArea] = useState('');
  const [recommendations, setRecommendations] = useState(null);

  // Get available states (Tamil Nadu and Haryana only)
  const states = ["Tamil Nadu", "Haryana"];

  // Get districts based on state
  const getDistricts = (selectedState) => {
    return Object.keys(soilDatabase[selectedState]?.districts || {});
  };

  // Get suitable crops based on district's soil conditions
  const getSuitableCrops = (selectedState, selectedDistrict) => {
    if (!selectedState || !selectedDistrict) return [];
    
    const districtData = soilDatabase[selectedState].districts[selectedDistrict];
    const soilTypes = districtData.soil_types;
    
    // Filter crops that are suitable for the district's soil types
    return Object.keys(cropDatabase).filter(crop => {
      const cropSoilTypes = cropDatabase[crop].soil_types;
      return cropSoilTypes.some(soilType => 
        soilTypes.some(districtSoil => 
          districtSoil.toLowerCase().includes(soilType.toLowerCase())
        )
      );
    });
  };

  // Calculate manure recommendations
  const calculateRecommendations = () => {
    if (!state || !district || !selectedCrop || !landArea) {
      console.log("Missing required fields");
      return;
    }

    try {
      const soilInfo = soilDatabase[state].districts[district];
      const cropInfo = cropDatabase[selectedCrop];
      const areaInHectares = parseFloat(landArea);

      // Get soil nutrient levels
      const soilNutrients = {
        n: parseFloat(soilInfo.nutrients.n_content.split('-')[0]),
        p: parseFloat(soilInfo.nutrients.p_content.split('-')[0]),
        k: parseFloat(soilInfo.nutrients.k_content.split('-')[0])
      };

      // Get crop NPK requirements and convert to kg/ha
      const cropNPK = {
        n: cropInfo.npk_ratio.n * 50, // Converting ratio to approximate kg/ha
        p: cropInfo.npk_ratio.p * 50,
        k: cropInfo.npk_ratio.k * 50
      };

      // Calculate nutrient deficits
      const nutrientDeficits = {
        n: Math.max(0, cropNPK.n - soilNutrients.n),
        p: Math.max(0, cropNPK.p - soilNutrients.p),
        k: Math.max(0, cropNPK.k - soilNutrients.k)
      };

      // Calculate fertilizer requirements
      const fertilizers = {
        urea: (nutrientDeficits.n * 2.17 * areaInHectares).toFixed(2),
        dap: (nutrientDeficits.p * 5.43 * areaInHectares).toFixed(2),
        mop: (nutrientDeficits.k * 1.67 * areaInHectares).toFixed(2)
      };

      // Calculate organic manure
      const organicManure = {
        fym: (areaInHectares * 10).toFixed(2),
        vermicompost: (areaInHectares * 5).toFixed(2),
        neem_cake: (areaInHectares * 0.5).toFixed(2)
      };

      // Generate application schedule
      const applicationSchedule = {
        basal: {
          description: "Before sowing/planting",
          fertilizers: {
            urea: `${(fertilizers.urea * 0.4).toFixed(2)} kg`,
            dap: fertilizers.dap + " kg",
            mop: `${(fertilizers.mop * 0.5).toFixed(2)} kg`,
            fym: organicManure.fym + " tonnes"
          }
        },
        vegetative: {
          description: "30-45 days after sowing",
          fertilizers: {
            urea: `${(fertilizers.urea * 0.3).toFixed(2)} kg`,
            mop: `${(fertilizers.mop * 0.25).toFixed(2)} kg`
          }
        },
        reproductive: {
          description: "60-75 days after sowing",
          fertilizers: {
            urea: `${(fertilizers.urea * 0.3).toFixed(2)} kg`,
            mop: `${(fertilizers.mop * 0.25).toFixed(2)} kg`
          }
        }
      };

      // Generate soil-specific tips
      const soilSpecificTips = [
        `For ${soilInfo.soil_types.join("/")} soil: Split fertilizer application`,
        `Maintain soil moisture for better nutrient uptake`,
        `Regular monitoring of crop growth is recommended`
      ];

      // Add deficiency-specific recommendations
      const deficiencyTips = soilInfo.deficiencies.map(def => {
        switch(def) {
          case 'Zn':
            return 'Apply Zinc Sulfate @ 25 kg/ha';
          case 'Fe':
            return 'Apply Ferrous Sulfate @ 20 kg/ha';
          case 'B':
            return 'Apply Borax @ 10 kg/ha';
          default:
            return `Apply ${def} containing fertilizer`;
        }
      });

      setRecommendations({
        npk_analysis: {
          required: `${cropNPK.n}:${cropNPK.p}:${cropNPK.k}`,
          current: `${soilNutrients.n}:${soilNutrients.p}:${soilNutrients.k}`,
          deficit: `${nutrientDeficits.n}:${nutrientDeficits.p}:${nutrientDeficits.k}`
        },
        fertilizers,
        organic_manure: organicManure,
        application_schedule: applicationSchedule,
        soil_specific_tips: soilSpecificTips,
        deficiency_tips: deficiencyTips,
        additional_tips: [
          `Best planting season: ${cropInfo.growth_time || 'Year-round'}`,
          `Maintain proper irrigation schedule`,
          `Monitor for ${cropInfo.diseases?.join(", ") || 'common diseases'}`
        ]
      });

    } catch (error) {
      console.error("Error in calculation:", error);
      setRecommendations({
        error: "Error calculating recommendations. Please check your inputs."
      });
    }
  };

  const simplifyRatio = (ratioString) => {
    const [n, p, k] = ratioString.split(':').map(Number);
    
    // Find the largest value to use as base for scaling
    const maxValue = Math.max(n, p, k);
    
    // Scale down to get single digits (target max value of 9)
    const scaleFactor = maxValue > 9 ? Math.ceil(maxValue / 9) : 1;
    
    // Calculate simplified values and round to nearest whole number
    const simplifiedN = Math.round(n / scaleFactor);
    const simplifiedP = Math.round(p / scaleFactor);
    const simplifiedK = Math.round(k / scaleFactor);
    
    // Further simplify by finding GCD
    const gcd = findGCD(findGCD(simplifiedN, simplifiedP), simplifiedK);
    
    // Return simplified whole numbers
    return `${Math.round(simplifiedN/gcd)}:${Math.round(simplifiedP/gcd)}:${Math.round(simplifiedK/gcd)}`;
  };

  const findGCD = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">Soil & Manure Calculator</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* State Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">State</label>
              <select
                className="w-full p-2 border rounded"
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
            </div>

            {/* District Selection */}
            {state && (
              <div>
                <label className="block text-sm font-medium mb-2">District</label>
                <select
                  className="w-full p-2 border rounded"
                  value={district}
                  onChange={(e) => {
                    setDistrict(e.target.value);
                    setSelectedCrop('');
                    setRecommendations(null);
                  }}
                >
                  <option value="">Select District</option>
                  {getDistricts(state).map(dist => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Crop Selection */}
            {district && (
              <div>
                <label className="block text-sm font-medium mb-2">Crop</label>
                <select
                  className="w-full p-2 border rounded"
                  value={selectedCrop}
                  onChange={(e) => {
                    setSelectedCrop(e.target.value);
                    setRecommendations(null);
                  }}
                >
                  <option value="">Select Crop</option>
                  {getSuitableCrops(state, district).map(crop => (
                    <option key={crop} value={crop}>{crop}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Land Area Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Land Area (Hectares)</label>
              <input
                type="number"
                className="w-full p-2 border rounded"
                value={landArea}
                onChange={(e) => setLandArea(e.target.value)}
                placeholder="Enter area in hectares"
              />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            onClick={calculateRecommendations}
            disabled={!state || !district || !selectedCrop || !landArea}
          >
            Calculate Recommendations
          </button>

          {/* Updated Recommendations Display */}
          {recommendations && !recommendations.error && (
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold">Detailed Recommendations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* NPK Analysis */}
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">NPK Analysis (kg/ha)</h4>
                  <p>Required: {recommendations.npk_analysis.required}</p>
                  <p>Current Soil: {recommendations.npk_analysis.current}</p>
                  <p>Deficit: {recommendations.npk_analysis.deficit}</p>
                </div>

                {/* Fertilizer Recommendations */}
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Chemical Fertilizers</h4>
                  <p>Urea: {recommendations.fertilizers.urea} kg</p>
                  <p>DAP: {recommendations.fertilizers.dap} kg</p>
                  <p>MOP: {recommendations.fertilizers.mop} kg</p>
                </div>

                {/* Application Schedule */}
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Application Schedule</h4>
                  {Object.entries(recommendations.application_schedule).map(([stage, data]) => (
                    <div key={stage} className="mb-2">
                      <p className="font-medium">{stage.charAt(0).toUpperCase() + stage.slice(1)}</p>
                      <p className="text-sm">{data.description}</p>
                      <ul className="text-sm">
                        {Object.entries(data.fertilizers).map(([fert, amount]) => (
                          <li key={fert}>{fert}: {amount}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Organic Manure */}
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Organic Manure</h4>
                  <p>FYM: {recommendations.organic_manure.fym} tonnes</p>
                  <p>Vermicompost: {recommendations.organic_manure.vermicompost} tonnes</p>
                  <p>Neem Cake: {recommendations.organic_manure.neem_cake} tonnes</p>
                </div>

                {/* Tips and Recommendations */}
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Soil-Specific Tips</h4>
                  {recommendations.soil_specific_tips.map((tip, index) => (
                    <p key={index} className="text-sm mb-1">{tip}</p>
                  ))}
                </div>

                {/* Deficiency Management */}
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold mb-2">Deficiency Management</h4>
                  {recommendations.deficiency_tips.map((tip, index) => (
                    <p key={index} className="text-sm mb-1">{tip}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {recommendations?.error && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded">
              {recommendations.error}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SoilManureCalculator; 
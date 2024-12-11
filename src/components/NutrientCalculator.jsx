import React, { useState, useEffect } from 'react';
import { ArrowLeft, Mountain, Beaker, Leaf } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { soilDatabase, cropRecommendations } from './data/soilDatabase';

const NutrientCalculator = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [soilType, setSoilType] = useState('');
  const [crop, setCrop] = useState('');
  const [landArea, setLandArea] = useState('');

  const states = Object.keys(soilDatabase);

  const getDistricts = (state) => {
    return Object.keys(soilDatabase[state]?.districts || {});
  };

  const getSoilTypes = (state, district) => {
    return soilDatabase[state]?.districts[district]?.soil_types || [];
  };

  const getSuitableCrops = (soilType) => {
    return cropRecommendations[soilType] || [];
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-4">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-4">Soil Nutrient Calculator</h2>
          
          {/* State Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">State</label>
            <select 
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setDistrict('');
                setSoilType('');
              }}
              className="w-full p-2 border rounded"
            >
              <option value="">Select State</option>
              {states.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* District Selection */}
          {state && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">District</label>
              <select 
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                  setSoilType('');
                }}
                className="w-full p-2 border rounded"
              >
                <option value="">Select District</option>
                {getDistricts(state).map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          )}

          {/* Display Soil Information */}
          {district && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              <h3 className="font-semibold mb-2">Soil Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">N Content:</p>
                  <p className="font-medium">{soilDatabase[state].districts[district].nutrients.n_content} kg/ha</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">P Content:</p>
                  <p className="font-medium">{soilDatabase[state].districts[district].nutrients.p_content} kg/ha</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">K Content:</p>
                  <p className="font-medium">{soilDatabase[state].districts[district].nutrients.k_content} kg/ha</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Rainfall:</p>
                  <p className="font-medium">{soilDatabase[state].districts[district].rainfall} mm</p>
                </div>
              </div>
            </div>
          )}

          {/* Rest of your component... */}
        </CardContent>
      </Card>
    </div>
  );
};

export default NutrientCalculator;
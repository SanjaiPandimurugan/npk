// src/components/ManurePrediction.jsx
import React, { useEffect } from 'react';
import axios from 'axios';

const ManurePrediction = ({ cropNPKRatio, onPredictionComplete }) => {
  useEffect(() => {
    const getPredictions = async () => {
      if (!cropNPKRatio) return;

      try {
        const [n, p, k] = cropNPKRatio.split(':').map(Number);
        
        const response = await axios.post('http://localhost:5001/predict', {
          nitrogen: n,
          phosphorus: p,
          potassium: k
        });

        if (response.data.success) {
          onPredictionComplete({
            fym: response.data.predictions.fym,
            vermicompost: response.data.predictions.vermicompost,
            neem: response.data.predictions.neem,
            currentNPK: response.data.predictions.current_npk
          });
        }
      } catch (err) {
        console.error('Prediction error:', err);
      }
    };

    getPredictions();
  }, [cropNPKRatio, onPredictionComplete]);

  return null;
};

export default ManurePrediction;
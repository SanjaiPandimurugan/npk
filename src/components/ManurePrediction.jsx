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
          onPredictionComplete(response.data.predictions);
        }
      } catch (err) {
        console.error('Prediction error:', err);
      }
    };

    getPredictions();
  }, [cropNPKRatio, onPredictionComplete]);

  return null; // Component doesn't render anything
};

export default ManurePrediction;
import React, { useState, useEffect } from 'react';
import { Leaf, Droplets, Zap, FlaskConical, Waves } from 'lucide-react';
import SensorCard from './SensorCard';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { useLanguage } from '../contexts/LanguageContext';
import translations from '../translations';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiVWzxSgMjib_BxqCBiycbh9x9YFQ0uZw",
  authDomain: "hosting-c74b1.firebaseapp.com",
  projectId: "hosting-c74b1",
  storageBucket: "hosting-c74b1.firebasestorage.app",
  messagingSenderId: "64402130067",
  appId: "1:64402130067:web:3683373d07b29a916f3966",
  measurementId: "G-DYJY25CLDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SensorDashboard = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const [latestValues, setLatestValues] = useState({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0
  });

  // Function to save sensor data to MongoDB
  const saveSensorData = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/sensor-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nitrogen: parseFloat(data.nitrogen) || 0,
          phosphorus: parseFloat(data.phosphorus) || 0,
          potassium: parseFloat(data.potassium) || 0,
          ph: parseFloat(data.ph) || 0,
          moisture: parseFloat(data.moisture) || 0
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save sensor data');
      }

      console.log('Sensor data saved to MongoDB');
    } catch (error) {
      console.error('Error saving sensor data:', error);
    }
  };

  useEffect(() => {
    // Subscribe to Firebase real-time updates
    const q = query(
      collection(db, 'sensor_data'),
      orderBy('timestamp', 'desc'),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        
        setLatestValues({
          ph: data.ph || '--',
          moisture: data.moisture || '--',
          nitrogen: data.nitrogen || '--',
          phosphorus: data.phosphorus || '--',
          potassium: data.potassium || '--',
          timestamp: data.timestamp
        });

        // Save to MongoDB when new data arrives
        saveSensorData(data);
      }
    });

    return () => unsubscribe();
  }, []);

  // Get sensor translations
  const sensorTranslations = t?.sensors || {};

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{t?.realTimeNutrients}</h2>
        <p className="text-sm text-gray-600">
          {t?.lastUpdated}: {latestValues.timestamp ? '5' : '--'} {t?.minutesAgo}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <SensorCard
          title={sensorTranslations.nitrogen?.title}
          value={(latestValues.nitrogen)*100}
          unit="%"
          icon={<Leaf size={24} className="text-emerald-500" />}
          color="emerald"
          timestamp={latestValues.timestamp}
          optimal={sensorTranslations.nitrogen?.optimal}
          status={sensorTranslations.nitrogen?.status}
        />
        <SensorCard
          title={sensorTranslations.phosphorous?.title}
          value={(latestValues.phosphorus)*100}
          unit="%"
          icon={<FlaskConical size={24} className="text-blue-500" />}
          color="blue"
          timestamp={latestValues.timestamp}
          optimal={sensorTranslations.phosphorous?.optimal}
          status={sensorTranslations.phosphorous?.status}
        />
        <SensorCard
          title={sensorTranslations.potassium?.title}
          value={((latestValues.potassium)*100).toFixed(1)}
          unit="%"
          icon={<Zap size={24} className="text-amber-500" />}
          color="amber"
          timestamp={latestValues.timestamp}
          optimal={sensorTranslations.potassium?.optimal}
          status={sensorTranslations.potassium?.status}
        />
        <SensorCard
          title={sensorTranslations.ph?.title}
          value={latestValues.ph}
          unit={sensorTranslations.ph?.unit}
          icon={<Droplets size={24} className="text-rose-500" />}
          color="rose"
          timestamp={latestValues.timestamp}
          optimal={sensorTranslations.ph?.optimal}
          status={sensorTranslations.ph?.status}
        />
        <SensorCard
          title={sensorTranslations.moisture?.title}
          value={latestValues.moisture}
          unit={sensorTranslations.moisture?.unit}
          icon={<Waves size={24} className="text-cyan-500" />}
          color="cyan"
          timestamp={latestValues.timestamp}
          optimal={sensorTranslations.moisture?.optimal}
          status={sensorTranslations.moisture?.status}
          range={{ min: 30, max: 60, optimal: 45 }}
        />
      </div>
    </div>
  );
};

export default SensorDashboard; 
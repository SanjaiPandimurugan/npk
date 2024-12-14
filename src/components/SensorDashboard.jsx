import React, { useState, useEffect } from 'react';
import { Leaf, Droplets, Zap, FlaskConical, Waves } from 'lucide-react';
import SensorCard from './SensorCard';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);
const db = getFirestore(app);

const SensorDashboard = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const [latestValues, setLatestValues] = useState({
    ph: '--',
    moisture: '--',
    nitrogen: '--',
    phosphorus: '--',
    potassium: '--',
    timestamp: null
  });

  const saveSensorDataToMongo = async (data) => {
    try {
      await fetch('http://localhost:5000/api/sensor-data', {
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
    } catch (error) {
      console.error('Error saving to MongoDB:', error);
    }
  };

  const fetchLatestData = async () => {
    try {
      const q = query(
        collection(db, 'sensor_data'),
        orderBy('timestamp', 'desc'),
        limit(1)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        console.log('Fetched data:', data);

        setLatestValues({
          ph: data.ph || '--',
          moisture: data.moisture || '--',
          nitrogen: data.nitrogen || '--',
          phosphorus: data.phosphorus || '--',
          potassium: data.potassium || '--',
          timestamp: data.timestamp
        });

        // Save to MongoDB
        await saveSensorDataToMongo(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLatestValues(prev => ({
        ...prev,
        ph: '--',
        moisture: '--',
        nitrogen: '--',
        phosphorus: '--',
        potassium: '--'
      }));
    }
  };

  useEffect(() => {
    fetchLatestData();
    const interval = setInterval(fetchLatestData, 5000);
    return () => clearInterval(interval);
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
          value={latestValues.nitrogen}
          unit={sensorTranslations.nitrogen?.unit}
          icon={<Leaf size={24} className="text-emerald-500" />}
          color="emerald"
          timestamp={latestValues.timestamp}
          optimal={sensorTranslations.nitrogen?.optimal}
          status={sensorTranslations.nitrogen?.status}
        />
        <SensorCard
          title={sensorTranslations.phosphorous?.title}
          value={latestValues.phosphorus}
          unit={sensorTranslations.phosphorous?.unit}
          icon={<FlaskConical size={24} className="text-blue-500" />}
          color="blue"
          timestamp={latestValues.timestamp}
          optimal={sensorTranslations.phosphorous?.optimal}
          status={sensorTranslations.phosphorous?.status}
        />
        <SensorCard
          title={sensorTranslations.potassium?.title}
          value={latestValues.potassium}
          unit={sensorTranslations.potassium?.unit}
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
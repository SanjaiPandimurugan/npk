import React, { useState, useEffect } from 'react';
import { Leaf, Droplets, Zap, FlaskConical, Waves } from 'lucide-react';
import SensorCard from './SensorCard';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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
  const [latestValues, setLatestValues] = useState({
    ph: '--',
    moisture: '--',
    nitrogen: '--',
    phosphorus: '--',
    potassium: '--',
    timestamp: null
  });

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
        console.log('Fetched data:', data); // Debug log

        setLatestValues({
          ph: data.ph || '--',
          moisture: data.moisture || '--',
          nitrogen: data.nitrogen || '--',
          phosphorus: data.phosphorus || '--',
          potassium: data.potassium || '--',
          timestamp: data.timestamp
        });
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

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <SensorCard
          title="Nitrogen"
          value={latestValues.nitrogen}
          unit="mg/kg"
          icon={<Leaf size={24} className="text-emerald-500" />}
          color="emerald"
          timestamp={latestValues.timestamp}
        />
        <SensorCard
          title="Phosphorus"
          value={latestValues.phosphorus}
          unit="mg/kg"
          icon={<FlaskConical size={24} className="text-blue-500" />}
          color="blue"
          timestamp={latestValues.timestamp}
        />
        <SensorCard
          title="Potassium"
          value={latestValues.potassium}
          unit="mg/kg"
          icon={<Zap size={24} className="text-amber-500" />}
          color="amber"
          timestamp={latestValues.timestamp}
        />
        <SensorCard
          title="pH Level"
          value={latestValues.ph}
          unit="pH"
          icon={<Droplets size={24} className="text-rose-500" />}
          color="rose"
          timestamp={latestValues.timestamp}
        />
        <SensorCard
          title="Moisture"
          value={latestValues.moisture}
          unit="%"
          icon={<Waves size={24} className="text-cyan-500" />}
          color="cyan"
          timestamp={latestValues.timestamp}
        />
      </div>
    </div>
  );
};

export default SensorDashboard; 
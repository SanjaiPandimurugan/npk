import React, { useState, useEffect } from 'react';
import { Leaf, Droplets, Zap, FlaskConical, Waves } from 'lucide-react';
import SensorCard from './SensorCard';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

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
  const [latestValues, setLatestValues] = useState({
    ph: null,
    moisture: null
  });

  useEffect(() => {
    const q = query(
      collection(db, 'sensor_data'),
      orderBy('timestamp', 'desc'),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added" || change.type === "modified") {
          const data = change.doc.data();
          setLatestValues({
            ph: data.ph,
            moisture: data.moisture
          });
        }
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <SensorCard
          title="Nitrogen"
          value={null}
          unit="ratio"
          icon={<Leaf size={24} className="text-emerald-500" />}
          color="emerald"
          data={[]}
          range={{ min: 0, max: 10, optimal: 6 }}
        />
        <SensorCard
          title="Phosphorus"
          value={null}
          unit="ratio"
          icon={<FlaskConical size={24} className="text-blue-500" />}
          color="blue"
          data={[]}
          range={{ min: 0, max: 5, optimal: 3 }}
        />
        <SensorCard
          title="Potassium"
          value={null}
          unit="ratio"
          icon={<Zap size={24} className="text-amber-500" />}
          color="amber"
          data={[]}
          range={{ min: 0, max: 10, optimal: 7 }}
        />
        <SensorCard
          title="pH Level"
          value={latestValues.ph}
          unit="pH"
          icon={<Droplets size={24} className="text-rose-500" />}
          color="rose"
          data={[]}
          range={{ min: 6.0, max: 7.0, optimal: 6.5 }}
        />
        <SensorCard
          title="Moisture"
          value={latestValues.moisture}
          unit="%"
          icon={<Waves size={24} className="text-cyan-500" />}
          color="cyan"
          data={[]}
          range={{ min: 30, max: 60, optimal: 45 }}
        />
      </div>
    </div>
  );
};

export default SensorDashboard; 
const sensorTranslations = {
  english: {
    realTimeNutrients: "Real-Time Nutrient Levels",
    nitrogen: {
      title: "Nitrogen (N)",
      status: "Status",
      optimal: "Optimal Range",
      current: "Current Level",
      unit: "mg/kg",
      low: "Low",
      good: "Good",
      high: "High"
    },
    phosphorous: {
      title: "Phosphorous (P)",
      // ... similar structure as nitrogen
    },
    potassium: {
      title: "Potassium (K)",
      // ... similar structure as nitrogen
    },
    ph: {
      title: "pH Level",
      // ... similar structure as nitrogen
    },
    moisture: {
      title: "Soil Moisture",
      // ... similar structure as nitrogen
    }
  },
  tamil: {
    realTimeNutrients: "நேரடி ஊட்டச்சத்து அளவுகள்",
    nitrogen: {
      title: "நைட்ரஜன் (N)",
      status: "நிலை",
      optimal: "சிறந்த வரம்பு",
      current: "தற்போதைய அளவு",
      unit: "மி.கி/கி.கி",
      low: "குறைவு",
      good: "நல்லது",
      high: "அதிகம்"
    },
    // Add other sensor translations...
  },
  // Add Hindi and Haryanvi translations...
};

export default sensorTranslations; 
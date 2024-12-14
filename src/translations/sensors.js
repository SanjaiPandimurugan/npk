const sensorTranslations = {
  english: {
    realTimeNutrients: "Real-Time Nutrient Levels",
    lastUpdated: "Last Updated",
    minutesAgo: "minutes ago",
    sensors: {
      normalRange: "Normal Range",
      nitrogen: {
        heading: "Nitrogen Levels",
        title: "Nitrogen (N)",
        unit: "mg/kg",
        optimal: "120-160",
        status: "Status",
        low: "Low",
        good: "Good",
        high: "High"
      },
      phosphorous: {
        heading: "Phosphorous Levels",
        title: "Phosphorous (P)",
        unit: "mg/kg",
        optimal: "40-50",
        status: "Status",
        low: "Low",
        good: "Good",
        high: "High"
      },
      potassium: {
        heading: "Potassium Levels",
        title: "Potassium (K)",
        unit: "mg/kg",
        optimal: "150-200",
        status: "Status",
        low: "Low",
        good: "Good",
        high: "High"
      },
      ph: {
        heading: "pH Levels",
        title: "pH Level",
        unit: "pH",
        optimal: "6.0-7.0",
        status: "Status",
        low: "Acidic",
        good: "Neutral",
        high: "Alkaline"
      },
      moisture: {
        heading: "Moisture Levels",
        title: "Soil Moisture",
        unit: "%",
        optimal: "30-40",
        status: "Status",
        low: "Dry",
        good: "Moist",
        high: "Wet"
      }
    },
    normalRange: "Normal Range"
  },
  tamil: {
    realTimeNutrients: "நேரடி ஊட்டச்சத்து அளவுகள்",
    lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",
    minutesAgo: "நிமிடங்களுக்கு முன்",
    sensors: {
      normalRange: "சாதாரண வரம்பு",
      nitrogen: {
        heading: "நைட்ரஜன் அளவுகள்",
        title: "நைட்ரஜன் (N)",
        unit: "மி.கி/கி.கி",
        optimal: "120-160",
        status: "நிலை",
        low: "குறைவு",
        good: "நல்லது",
        high: "அதிகம்"
      },
      phosphorous: {
        heading: "பாஸ்பரஸ் அளவுகள்",
        title: "பாஸ்பரஸ் (P)",
        unit: "மி.கி/கி.கி",
        optimal: "40-50",
        status: "நிலை",
        low: "குறைவு",
        good: "நல்லது",
        high: "அதிகம்"
      },
      potassium: {
        heading: "பொட்டாசியம் அளவுகள்",
        title: "பொட்டாசியம் (K)",
        unit: "மி.கி/கி.கி",
        optimal: "150-200",
        status: "நிலை",
        low: "குறைவு",
        good: "நல்லது",
        high: "அதிகம்"
      },
      ph: {
        heading: "அமில-கார அளவுகள்",
        title: "pH அளவு",
        unit: "pH",
        optimal: "6.0-7.0",
        status: "நிலை",
        low: "அமிலம்",
        good: "நடுநிலை",
        high: "காரம்"
      },
      moisture: {
        heading: "ஈரப்பத அளவுகள்",
        title: "மண் ஈரப்பதம்",
        unit: "%",
        optimal: "30-40",
        status: "நிலை",
        low: "வறண்ட",
        good: "ஈரமான",
        high: "நனைந்த"
      }
    },
  },
  hindi: {
    realTimeNutrients: "वास्तविक समय पोषक स्तर",
    lastUpdated: "आखरी अपडेट",
    minutesAgo: "मिनट पहले",
    sensors: {
      normalRange: "सामान्य सीमा",
      liveReading: "लाइव रीडिंग",
      nitrogen: {
        heading: "नाइट्रोजन स्तर",
        title: "नाइट्रोजन (N)",
        unit: "मि.ग्रा/कि.ग्रा",
        optimal: "120-160",
        status: "स्थिति",
        low: "कम",
        good: "अच्छा",
        high: "अधिक"
      },
      phosphorous: {
        heading: "फास्फोरस स्तर",
        title: "फास्फोरस (P)",
        unit: "मि.ग्रा/कि.ग्रा",
        optimal: "40-50",
        status: "स्थिति",
        low: "कम",
        good: "अच्छा",
        high: "अधिक"
      },
      potassium: {
        heading: "पोटैशियम स्तर",
        title: "पोटैशियम (K)",
        unit: "मि.ग्रा/कि.ग्रा",
        optimal: "150-200",
        status: "स्थिति",
        low: "कम",
        good: "अच्छा",
        high: "अधिक"
      },
      ph: {
        heading: "पीएच स्तर",
        title: "पीएच स्तर",
        unit: "pH",
        optimal: "6.0-7.0",
        status: "स्थिति",
        low: "अम्लीय",
        good: "तटस्थ",
        high: "क्षारीय"
      },
      moisture: {
        heading: "नमी स्तर",
        title: "मिट्टी की नमी",
        unit: "%",
        optimal: "30-40",
        status: "स्थिति",
        low: "सूखा",
        good: "नम",
        high: "गीला"
      }
    }
  },
  punjabi: {
    realTimeNutrients: "ਰੀਅਲ-ਟਾਈਮ ਪੋਸ਼ਕ ਪੱਧਰ",
    lastUpdated: "ਆਖਰੀ ਅਪਡੇਟ",
    minutesAgo: "ਮਿੰਟ ਪਹਿਲਾਂ",
    sensors: {
      normalRange: "ਸਧਾਰਨ ਸੀਮਾ",
      liveReading: "ਲਾਈਵ ਰੀਡਿੰਗ",
      nitrogen: {
        heading: "ਨਾਈਟ੍ਰੋਜਨ ਪੱਧਰ",
        title: "ਨਾਈਟ੍ਰੋਜਨ (N)",
        unit: "ਮਿ.ਗ੍ਰਾ/ਕਿ.ਗ੍ਰਾ",
        optimal: "120-160",
        status: "ਸਥਿਤੀ",
        low: "ਘੱਟ",
        good: "ਵਧੀਆ",
        high: "ਜ਼ਿਆਦਾ"
      },
      phosphorous: {
        heading: "ਫਾਸਫੋਰਸ ਪੱਧਰ",
        title: "ਫਾਸਫੋਰਸ (P)",
        unit: "ਮਿ.ਗ੍ਰਾ/ਕਿ.ਗ੍ਰਾ",
        optimal: "40-50",
        status: "ਸਥਿਤੀ",
        low: "ਘੱਟ",
        good: "ਵਧੀਆ",
        high: "ਜ਼ਿਆਦਾ"
      },
      potassium: {
        heading: "ਪੋਟਾਸ਼ੀਅਮ ਪੱਧਰ",
        title: "ਪੋਟਾਸ਼ੀਅਮ (K)",
        unit: "ਮਿ.ਗ੍ਰਾ/ਕਿ.ਗ੍ਰਾ",
        optimal: "150-200",
        status: "ਸਥਿਤੀ",
        low: "ਘੱਟ",
        good: "ਵਧੀਆ",
        high: "ਜ਼ਿਆਦਾ"
      },
      ph: {
        heading: "ਪੀਐਚ ਪੱਧਰ",
        title: "ਪੀਐਚ ਪੱਧਰ",
        unit: "pH",
        optimal: "6.0-7.0",
        status: "ਸਥਿਤੀ",
        low: "ਤੇਜ਼ਾਬੀ",
        good: "ਸੰਤੁਲਿਤ",
        high: "ਖਾਰੀ"
      },
      moisture: {
        heading: "ਨਮੀ ਪੱਧਰ",
        title: "ਮਿੱਟੀ ਦੀ ਨਮੀ",
        unit: "%",
        optimal: "30-40",
        status: "ਸਥਿਤੀ",
        low: "ਸੁੱਕੀ",
        good: "ਨਮ",
        high: "ਗਿੱਲੀ"
      }
    }
  },
  haryanvi: {
    realTimeNutrients: "तुरंत पोषक तत्वां की मात्रा",
    lastUpdated: "आखरी अपडेट",
    minutesAgo: "मिनट पैहलां",
    sensors: {
      normalRange: "साधारण सीमा",
      liveReading: "लाइव रीडिंग",
      nitrogen: {
        heading: "नाइट्रोजन की मात्रा",
        title: "नाइट्रोजन (N)",
        unit: "मि.ग्राम/कि.ग्राम",
        optimal: "120-160",
        status: "स्थिति",
        low: "कम",
        good: "बढ़िया",
        high: "ज्यादा"
      },
      phosphorous: {
        heading: "फॉस्फोरस की मात्रा",
        title: "फॉस्फोरस (P)",
        unit: "मि.ग्राम/कि.ग्राम",
        optimal: "40-50",
        status: "स्थिति",
        low: "कम",
        good: "बढ़िया",
        high: "ज्यादा"
      },
      potassium: {
        heading: "पोटाश की मात्रा",
        title: "पोटाश (K)",
        unit: "मि.ग्राम/कि.ग्राम",
        optimal: "150-200",
        status: "स्थिति",
        low: "कम",
        good: "बढ़िया",
        high: "ज्यादा"
      },
      ph: {
        heading: "पीएच की मात्रा",
        title: "पीएच लेवल",
        unit: "pH",
        optimal: "6.0-7.0",
        status: "स्थिति",
        low: "खट्टा",
        good: "ठीक",
        high: "खारा"
      },
      moisture: {
        heading: "नमी की मात्रा",
        title: "मिट्टी की नमी",
        unit: "%",
        optimal: "30-40",
        status: "स्थिति",
        low: "सूखी",
        good: "नम",
        high: "गीली"
      }
    }
  },
  gujarati: {
    realTimeNutrients: "રીયલ-ટાઈમ પોષક સ્તર",
    lastUpdated: "છેલ્લું અપડેટ",
    minutesAgo: "મિનિટ પહેલા",
    sensors: {
      normalRange: "સામાન્ય શ્રેણી",
      liveReading: "લાઈવ રીડિંગ",
      nitrogen: {
        heading: "નાઈટ્રોજન સ્તર",
        title: "નાઈટ્રોજન (N)",
        unit: "મિ.ગ્રા/કિ.ગ્રા",
        optimal: "120-160",
        status: "સ્થિતિ",
        low: "ઓછું",
        good: "સારું",
        high: "વધારે"
      },
      phosphorous: {
        heading: "ફોસ્ફરસ સ્તર",
        title: "ફોસ્ફરસ (P)",
        unit: "મિ.ગ્રા/કિ.ગ્રા",
        optimal: "40-50",
        status: "સ્થિતિ",
        low: "ઓછું",
        good: "સારું",
        high: "વધારે"
      },
      potassium: {
        heading: "પોટેશિયમ સ્તર",
        title: "પોટેશિયમ (K)",
        unit: "મિ.ગ્રા/કિ.ગ્રા",
        optimal: "150-200",
        status: "સ્થિતિ",
        low: "ઓછું",
        good: "સારું",
        high: "વધારે"
      },
      ph: {
        heading: "પીએચ સ્તર",
        title: "પીએચ લેવલ",
        unit: "pH",
        optimal: "6.0-7.0",
        status: "સ્થિતિ",
        low: "એસિડિક",
        good: "સમતોલ",
        high: "ક્ષારીય"
      },
      moisture: {
        heading: "ભેજ સ્તર",
        title: "જમીનનો ભેજ",
        unit: "%",
        optimal: "30-40",
        status: "સ્થિતિ",
        low: "સૂકું",
        good: "ભેજવાળું",
        high: "પલળેલું"
      }
    }
  }
};

export default sensorTranslations; 
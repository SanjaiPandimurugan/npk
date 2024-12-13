export const cropDatabase = {
  "Ragi": {
    scientific_name: "Eleusine coracana",
    soil_types: ["Loamy", "Sandy loam"],
    npk_ratio: {
      n: 3,
      p: 1,
      k: 1
    },
    growth_time: "3-5 months",
    diseases: ["Blast", "Mosaic"],
    phenotype: "Spiked panicle, finger-like spikes",
    cultivation: "Intercropping with pulses",
    district_specific_details: {
      "Haryana": {
        "Ambala": {
          recommended_varieties: ["PR 202", "GPU 28"],
          sowing_time: "June-July",
          harvest_time: "October-November",
          irrigation_schedule: "3-4 irrigations",
          expected_yield: "2.5-3.0 tonnes/ha",
          local_practices: [
            "Intercropping with pulses recommended",
            "Zinc application beneficial"
          ]
        },
        "Karnal": {
          recommended_varieties: ["GPU 28", "PR 202"],
          sowing_time: "June-July",
          harvest_time: "October-November",
          irrigation_schedule: "4-5 irrigations",
          expected_yield: "2.0-2.5 tonnes/ha",
          local_practices: [
            "Row spacing of 30cm recommended",
            "Requires zinc supplementation"
          ]
        }
      },
      "Tamil Nadu": {
        "Coimbatore": {
          recommended_varieties: ["CO 15", "GPU 28"],
          sowing_time: "July-August",
          harvest_time: "November-December",
          irrigation_schedule: "5-6 irrigations",
          expected_yield: "3.0-3.5 tonnes/ha",
          local_practices: [
            "Sprinkler irrigation preferred",
            "Green manuring recommended"
          ]
        },
        "Ariyalur": {
          recommended_varieties: ["CO 15", "GPU 28", "ML 365"],
          sowing_time: "June-July",
          harvest_time: "October-November",
          irrigation_schedule: "4-5 irrigations",
          expected_yield: "2.8-3.2 tonnes/ha",
          local_practices: [
            "Intercropping with pulses recommended",
            "Application of FYM before sowing"
          ]
        },
        "Chengalpattu": {
          recommended_varieties: ["GPU 28", "KMR 301"],
          sowing_time: "July-August",
          harvest_time: "November-December",
          irrigation_schedule: "5-6 irrigations",
          expected_yield: "3.0-3.5 tonnes/ha",
          local_practices: [
            "Sprinkler irrigation preferred",
            "Green manuring beneficial"
          ]
        },
        "Cuddalore": {
          recommended_varieties: ["CO 15", "Indaf 8"],
          sowing_time: "June-July",
          harvest_time: "October-November",
          irrigation_schedule: "4-5 irrigations",
          expected_yield: "2.7-3.1 tonnes/ha",
          local_practices: [
            "Line sowing recommended",
            "Regular weeding important"
          ]
        },
        "Kallakurichi": {
          recommended_varieties: ["ML 365", "GPU 28"],
          sowing_time: "July-August",
          harvest_time: "November-December",
          irrigation_schedule: "5-6 irrigations",
          expected_yield: "2.9-3.3 tonnes/ha",
          local_practices: [
            "Seed treatment essential",
            "Organic manure application recommended"
          ]
        }
      }
    },
    growth_duration_days: 115,
    ph_range: "6.5-7.5"
  },
  "Bhendi": {
    scientific_name: "Abelmoschus esculentus",
    soil_types: ["Loamy"],
    npk_ratio: {
      n: 2,
      p: 1,
      k: 1
    },
    growth_time: "45 days",
    diseases: ["Wilt", "Mildew"],
    phenotype: "Tapering pods",
    cultivation: "Sown in rows"
  },
  "Banana": {
    scientific_name: "Musa spp.",
    soil_types: ["Rich loamy"],
    npk_ratio: {
      n: 2,
      p: 1,
      k: 3
    },
    growth_time: "8-11 months",
    diseases: ["Leaf Spot", "Wilt"],
    phenotype: "Herbaceous perennial",
    cultivation: "Soil with good drainage"
  },
  "Cashewnut": {
    scientific_name: "Anacardium occidentale",
    soil_types: ["Red sandy loam"],
    npk_ratio: {
      n: 1,
      p: 1,
      k: 1
    },
    growth_time: "5-10 kg/tree",
    diseases: ["Dieback"],
    phenotype: "Leathery leaves, curved fruit",
    cultivation: "Pits with organic manure"
  },
  "Carrot": {
    scientific_name: "Daucus carota",
    soil_types: ["Loose loamy"],
    npk_ratio: {
      n: 1,
      p: 1,
      k: 1
    },
    growth_time: "3-5 months",
    diseases: ["Leaf Spot", "Rot"],
    phenotype: "Edible taproot",
    cultivation: "Raised beds, loamy soil"
  },
  "Grapes": {
    scientific_name: "Vitis vinifera",
    soil_types: ["Well-drained loamy"],
    npk_ratio: {
      n: 1,
      p: 1,
      k: 2
    },
    growth_time: "Year-round",
    diseases: ["Mildew"],
    phenotype: "Woody vine, grape clusters",
    cultivation: "Planting pits filled with FYM"
  },
  "Papaya": {
    scientific_name: "Carica papaya",
    soil_types: ["Fertile tropical"],
    npk_ratio: {
      n: 1,
      p: 1,
      k: 1
    },
    growth_time: "6-9 months",
    diseases: ["Mildew", "Mosaic Virus"],
    phenotype: "Palmately lobed leaves",
    cultivation: "Pits with organic manure"
  },
  "Groundnut": {
    scientific_name: "Arachis hypogaea",
    soil_types: ["Sandy loam"],
    npk_ratio: {
      n: 1,
      p: 2,
      k: 3
    },
    growth_time: "90-120 days",
    diseases: ["Leaf Spot", "Rust"],
    phenotype: "Herbaceous plant",
    cultivation: "Row planting in furrows",
    district_specific_details: {
      "Tamil Nadu": {
        "Erode": {
          recommended_varieties: ["TMV 7", "VRI 2"],
          sowing_time: "June-July",
          harvest_time: "October-November",
          irrigation_schedule: "8-10 days interval",
          expected_yield: "2.5-3.0 tonnes/ha",
          local_practices: [
            "Gypsum application",
            "Sprinkler irrigation"
          ]
        },
        "Dindigul": {
          recommended_varieties: ["TMV 7", "CO 6"],
          sowing_time: "June-July",
          harvest_time: "October-November",
          irrigation_schedule: "7-10 days interval",
          expected_yield: "2.0-2.5 tonnes/ha",
          local_practices: [
            "Summer ploughing",
            "Seed treatment with Rhizobium"
          ]
        }
      }
    }
  },
  "Millet": {
    scientific_name: "Pennisetum glaucum",
    soil_types: ["Alluvial", "Sandy"],
    npk_ratio: {
      n: 2,
      p: 1,
      k: 1
    },
    growth_time: "60-100 days",
    diseases: ["Mildew", "Rust"],
    phenotype: "Tall stalks, dense seeds",
    cultivation: "Grown in rows"
  },
  "Pineapple": {
    scientific_name: "Ananas comosus",
    soil_types: ["Loamy", "Well-drained"],
    npk_ratio: {
      n: 14,
      p: 3,
      k: 10
    },
    growth_time: "15-18 months",
    diseases: ["Rot", "Fusariosis"],
    phenotype: "Short herbaceous perennial",
    cultivation: "High-density planting"
  },
  "Sapota": {
    scientific_name: "Manilkara zapota",
    soil_types: ["Sandy loam", "Alluvial"],
    npk_ratio: {
      n: 2,
      p: 1,
      k: 1
    },
    growth_time: "4-5 months",
    diseases: ["Leaf spot", "Sooty mold"],
    phenotype: "Round or oval fruit",
    cultivation: "High-density planting"
  },
  "Tomato": {
    scientific_name: "Solanum lycopersicum",
    soil_types: ["Well-drained loamy"],
    npk_ratio: {
      n: 5,
      p: 2.5,
      k: 2
    },
    growth_time: "50-80 days",
    diseases: ["Damping off", "Wilt"],
    phenotype: "Varies in size and shape",
    cultivation: "Warm season crop"
  },
  "Cotton": {
    scientific_name: "Gossypium",
    soil_types: ["Alluvial", "Clayey"],
    npk_ratio: {
      n: 2,
      p: 1,
      k: 1
    },
    growth_time: "90-150 days",
    diseases: ["Wilt", "Blight"],
    phenotype: "Sub-shrub with rigid stems",
    cultivation: "Rows planting",
    district_specific_details: {
      "Haryana": {
        "Sirsa": {
          recommended_varieties: ["H 1098", "H 1117"],
          sowing_time: "April-May",
          harvest_time: "October-November",
          irrigation_schedule: "4-5 irrigations",
          expected_yield: "20-25 quintals/ha",
          local_practices: [
            "BT cotton recommended",
            "IPM practices mandatory"
          ]
        },
        "Hisar": {
          recommended_varieties: ["H 1117", "H 1098"],
          sowing_time: "April-May",
          harvest_time: "October-November",
          irrigation_schedule: "5-6 irrigations",
          expected_yield: "18-22 quintals/ha",
          local_practices: [
            "Drip irrigation recommended",
            "Regular pest monitoring needed"
          ]
        }
      },
      "Tamil Nadu": {
        "Coimbatore": {
          recommended_varieties: ["MCU 5", "MCU 12", "MCU 13"],
          sowing_time: "August-September",
          harvest_time: "February-March",
          irrigation_schedule: "10-15 days interval",
          expected_yield: "15-20 quintals/ha",
          local_practices: [
            "High density planting",
            "Integrated pest management"
          ]
        },
        "Dindigul": {
          recommended_varieties: ["MCU 5", "SVPR 2"],
          sowing_time: "August-September",
          harvest_time: "January-February",
          irrigation_schedule: "8-12 days interval",
          expected_yield: "12-15 quintals/ha",
          local_practices: [
            "Border crop with maize",
            "Yellow sticky traps for pest control"
          ]
        }
      }
    }
  },
  "Sugarcane": {
    scientific_name: "Saccharum officinarum",
    soil_types: ["Loam", "Alluvial"],
    npk_ratio: {
      n: 5,
      p: 2,
      k: 2
    },
    growth_time: "12-18 months",
    diseases: ["Red Rot", "Smut"],
    phenotype: "Tall perennial",
    cultivation: "Propagated by cuttings",
    district_specific_details: {
      "Tamil Nadu": {
        "Erode": {
          recommended_varieties: ["CO 86032", "COC 24"],
          sowing_time: "December-January",
          harvest_time: "December-March",
          irrigation_schedule: "7-10 days interval",
          expected_yield: "100-120 tonnes/ha",
          local_practices: [
            "Wide row spacing",
            "Trash mulching",
            "Drip irrigation"
          ]
        },
        "Coimbatore": {
          recommended_varieties: ["CO 86032", "CO 0212"],
          sowing_time: "December-January",
          harvest_time: "December-March",
          irrigation_schedule: "7-10 days interval",
          expected_yield: "90-110 tonnes/ha",
          local_practices: [
            "Sustainable sugarcane initiative",
            "Chip bud method of planting"
          ]
        },
        "Ariyalur": {
          recommended_varieties: ["CO 86032", "CO 0238"],
          sowing_time: "December-January",
          harvest_time: "December-January",
          irrigation_schedule: "7-10 days interval",
          expected_yield: "90-95 tonnes/ha",
          local_practices: [
            "Wide row spacing",
            "Trash mulching"
          ]
        },
        "Chengalpattu": {
          recommended_varieties: ["CO 86032", "CO M 0265"],
          sowing_time: "January-February",
          harvest_time: "January-February",
          irrigation_schedule: "8-10 days interval",
          expected_yield: "85-90 tonnes/ha",
          local_practices: [
            "Drip irrigation preferred",
            "Propping recommended"
          ]
        }
      }
    }
  },
  "Turmeric": {
    scientific_name: "Curcuma longa",
    soil_types: ["Red soils", "Black soils"],
    npk_ratio: {
      n: 3,
      p: 1,
      k: 2.4
    },
    growth_time: "8-9 months",
    diseases: ["Leaf spot", "Rhizome rot"],
    phenotype: "Herbaceous perennial",
    cultivation: "Ridge and furrow method",
    district_specific_details: {
      "Tamil Nadu": {
        "Erode": {
          recommended_varieties: ["Salem", "Erode Local"],
          sowing_time: "June-July",
          harvest_time: "February-March",
          irrigation_schedule: "7-10 days interval",
          expected_yield: "25-30 tonnes/ha",
          local_practices: [
            "Raised bed planting recommended",
            "Organic mulching essential",
            "Drip irrigation preferred"
          ]
        },
        "Coimbatore": {
          recommended_varieties: ["BSR-2", "CO-2"],
          sowing_time: "June-July",
          harvest_time: "February-March",
          irrigation_schedule: "Weekly once",
          expected_yield: "22-25 tonnes/ha",
          local_practices: [
            "Shade cultivation preferred",
            "Intercropping with legumes"
          ]
        }
      }
    }
  },
  "Maize": {
    scientific_name: "Zea mays",
    soil_types: ["Red soils", "Black soils"],
    npk_ratio: {
      n: 2,
      p: 1,
      k: 1
    },
    growth_time: "95-105 days",
    diseases: ["Leaf blight", "Rust"],
    phenotype: "Tall annual grass",
    cultivation: "Ridge planting",
    district_specific_details: {
      "Tamil Nadu": {
        "Dindigul": {
          recommended_varieties: ["CO 6", "COH(M) 8", "NK 6240"],
          sowing_time: "June-July (Kharif), Jan-Feb (Rabi)",
          harvest_time: "Oct-Nov (Kharif), April-May (Rabi)",
          irrigation_schedule: "7-10 days interval",
          expected_yield: "8-10 tonnes/ha",
          local_practices: [
            "Ridge planting recommended",
            "Balanced NPK application",
            "Drip irrigation preferred"
          ]
        },
        "Coimbatore": {
          recommended_varieties: ["CO 6", "COH(M) 8", "COH(M) 5"],
          sowing_time: "June-July",
          harvest_time: "September-October",
          irrigation_schedule: "8-10 days interval",
          expected_yield: "7-9 tonnes/ha",
          local_practices: [
            "Drip fertigation recommended",
            "Integrated nutrient management"
          ]
        }
      }
    }
  },
  "Paddy": {
    scientific_name: "Oryza sativa",
    soil_types: ["Clayey", "Alluvial", "Black soils"],
    npk_ratio: {
      n: 4,
      p: 1,
      k: 1
    },
    growth_time: "120-150 days",
    diseases: ["Blast", "Bacterial leaf blight"],
    phenotype: "Tall grass with panicles",
    cultivation: "Transplanting method",
    district_specific_details: {
      "Tamil Nadu": {
        "Dindigul": {
          recommended_varieties: ["ADT 43", "CO 51", "ADT 45"],
          sowing_time: "June-July (Kuruvai), Sep-Oct (Samba)",
          harvest_time: "Oct-Nov (Kuruvai), Jan-Feb (Samba)",
          irrigation_schedule: "Daily irrigation",
          expected_yield: "5.5-6.0 tonnes/ha",
          local_practices: [
            "SRI method recommended",
            "Green manure application",
            "Alternate wetting and drying"
          ]
        },
        "Ariyalur": {
          recommended_varieties: ["ADT 43", "CR 1009"],
          sowing_time: "June-July",
          harvest_time: "October-November",
          irrigation_schedule: "Daily irrigation",
          expected_yield: "5.5-6.0 tonnes/ha",
          local_practices: [
            "SRI method recommended",
            "Green manuring beneficial"
          ]
        },
        "Chengalpattu": {
          recommended_varieties: ["ADT 45", "BPT 5204"],
          sowing_time: "August-September",
          harvest_time: "December-January",
          irrigation_schedule: "Daily irrigation",
          expected_yield: "5.8-6.2 tonnes/ha",
          local_practices: [
            "Direct seeding suitable",
            "Zinc application recommended"
          ]
        },
        "Cuddalore": {
          recommended_varieties: ["CO 51", "ADT 49"],
          sowing_time: "July-August",
          harvest_time: "November-December",
          irrigation_schedule: "Daily irrigation",
          expected_yield: "5.6-6.1 tonnes/ha",
          local_practices: [
            "Machine transplanting preferred",
            "Integrated pest management"
          ]
        },
        "Kallakurichi": {
          recommended_varieties: ["ADT 45", "CR 1009"],
          sowing_time: "August-September",
          harvest_time: "December-January",
          irrigation_schedule: "Daily irrigation",
          expected_yield: "5.7-6.3 tonnes/ha",
          local_practices: [
            "Line transplanting recommended",
            "Foliar spray of nutrients"
          ]
        }
      }
    }
  },
  "Tomato": {
    scientific_name: "Solanum lycopersicum",
    soil_types: ["Red soils", "Black soils", "Sandy loam"],
    npk_ratio: {
      n: 5,
      p: 2.5,
      k: 2
    },
    growth_time: "90-100 days",
    diseases: ["Early blight", "Leaf curl virus"],
    phenotype: "Determinate/Indeterminate growth",
    cultivation: "Raised bed system",
    district_specific_details: {
      "Tamil Nadu": {
        "Dindigul": {
          recommended_varieties: ["PKM 1", "CO 3", "Hybrid varieties"],
          sowing_time: "June-July, Dec-Jan",
          harvest_time: "Sep-Oct, March-April",
          irrigation_schedule: "3-4 days interval",
          expected_yield: "35-40 tonnes/ha",
          local_practices: [
            "Staking recommended",
            "Mulching essential",
            "IPM practices"
          ]
        }
      }
    }
  },
  "Chilli": {
    scientific_name: "Capsicum annuum",
    soil_types: ["Red soils", "Black soils"],
    npk_ratio: {
      n: 3,
      p: 1,
      k: 1
    },
    growth_time: "150-180 days",
    diseases: ["Die back", "Leaf curl virus"],
    phenotype: "Bushy, erect plant",
    cultivation: "Raised bed system",
    district_specific_details: {
      "Tamil Nadu": {
        "Dindigul": {
          recommended_varieties: ["K 2", "CO 4", "PKM 1"],
          sowing_time: "June-July",
          harvest_time: "November onwards",
          irrigation_schedule: "5-7 days interval",
          expected_yield: "2.5-3.0 tonnes/ha (dry)",
          local_practices: [
            "Seed treatment essential",
            "Drip irrigation with fertigation",
            "Integrated disease management"
          ]
        }
      }
    }
  },
  "Onion": {
    scientific_name: "Allium cepa",
    soil_types: ["Red soils", "Black soils", "Sandy loam"],
    npk_ratio: {
      n: 3,
      p: 1,
      k: 1
    },
    growth_time: "90-110 days",
    diseases: ["Purple blotch", "Thrips"],
    phenotype: "Bulbous vegetable",
    cultivation: "Raised bed system",
    district_specific_details: {
      "Tamil Nadu": {
        "Dindigul": {
          recommended_varieties: ["CO 4", "Aggregatum"],
          sowing_time: "May-June, Nov-Dec",
          harvest_time: "Aug-Sep, Feb-March",
          irrigation_schedule: "4-5 days interval",
          expected_yield: "14-16 tonnes/ha",
          local_practices: [
            "Bulb treatment before planting",
            "Micro irrigation recommended",
            "Need based plant protection"
          ]
        }
      }
    }
  },
  "Coconut": {
    scientific_name: "Cocos nucifera",
    soil_types: ["Sandy loam", "Red soils", "Alluvial"],
    npk_ratio: {
      n: 5,
      p: 3,
      k: 12
    },
    growth_time: "6-7 years (first yield)",
    diseases: ["Root wilt", "Stem bleeding"],
    phenotype: "Tall palm",
    cultivation: "Spacing 7.5 x 7.5m",
    district_specific_details: {
      "Tamil Nadu": {
        "Dindigul": {
          recommended_varieties: ["ECT", "WCT", "VHC 1"],
          sowing_time: "June-December",
          harvest_time: "Year round",
          irrigation_schedule: "7-10 days interval",
          expected_yield: "120-150 nuts/palm/year",
          local_practices: [
            "Basin irrigation",
            "Drip irrigation recommended",
            "Intercropping possible"
          ]
        }
      }
    }
  },
  "Banana": {
    scientific_name: "Musa spp.",
    soil_types: ["Red soils", "Black soils", "Sandy loam"],
    npk_ratio: {
      n: 2,
      p: 1,
      k: 3
    },
    growth_time: "12-14 months",
    diseases: ["Panama wilt", "Sigatoka leaf spot"],
    phenotype: "Herbaceous perennial",
    cultivation: "Pit system",
    district_specific_details: {
      "Tamil Nadu": {
        "Dindigul": {
          recommended_varieties: ["Poovan", "Nendran", "Grand Naine"],
          sowing_time: "June-July, Feb-March",
          harvest_time: "Year round",
          irrigation_schedule: "3-4 days interval",
          expected_yield: "40-45 tonnes/ha",
          local_practices: [
            "Propping essential",
            "Drip fertigation",
            "Bunch covering practice"
          ]
        }
      }
    }
  }
};

// Updated helper functions to include district-specific recommendations
export const getDistrictCropRecommendations = (state, district) => {
  const recommendations = [];
  
  for (const [cropName, cropData] of Object.entries(cropDatabase)) {
    if (cropData.district_specific_details?.[state]?.[district]) {
      recommendations.push({
        crop: cropName,
        details: cropData.district_specific_details[state][district],
        general_info: {
          soil_types: cropData.soil_types,
          npk_ratio: cropData.npk_ratio,
          diseases: cropData.diseases
        }
      });
    }
  }
  
  return recommendations;
};

export const getLocalizedCropInfo = (crop, state, district) => {
  const cropData = cropDatabase[crop];
  if (!cropData) return null;

  return {
    ...cropData,
    local_details: cropData.district_specific_details?.[state]?.[district] || null
  };
};

// Updated helper object for soil type based crop recommendations
export const soilTypeCrops = {
  "Loamy": ["Ragi", "Bhendi", "Banana", "Carrot", "Sugarcane"],
  "Sandy loam": ["Ragi", "Groundnut", "Sapota"],
  "Well-drained loamy": ["Grapes", "Tomato"],
  "Alluvial": ["Millet", "Cotton", "Sugarcane", "Sapota"],
  "Clayey": ["Cotton"]
};

// Updated ML service to use district-specific data
export const mlService = {
  async getCropRecommendations(state, district, landArea) {
    try {
      // Get district-specific recommendations
      const districtRecommendations = getDistrictCropRecommendations(state, district);
      
      // Get soil conditions from soilDatabase
      const soilConditions = soilDatabase[state].districts[district];
      
      // Filter and rank recommendations based on soil conditions
      const rankedRecommendations = districtRecommendations
        .map(rec => ({
          ...rec,
          suitability_score: calculateSuitabilityScore(
            rec,
            soilConditions,
            landArea
          )
        }))
        .sort((a, b) => b.suitability_score - a.suitability_score);

      return rankedRecommendations;
    } catch (error) {
      console.error('Error getting crop recommendations:', error);
      throw error;
    }
  }
};

// Helper function to calculate crop suitability score
const calculateSuitabilityScore = (recommendation, soilConditions, landArea) => {
  let score = 0;
  
  // Check soil type compatibility
  const soilTypeMatch = recommendation.general_info.soil_types.some(
    type => soilConditions.soil_types.includes(type)
  );
  if (soilTypeMatch) score += 5;
  
  // Check nutrient requirements vs availability
  const nutrientScore = calculateNutrientScore(
    recommendation.general_info.npk_ratio,
    soilConditions.nutrients
  );
  score += nutrientScore;
  
  // Consider rainfall requirements
  const rainfallMatch = isRainfallSuitable(
    recommendation.details.irrigation_schedule,
    soilConditions.rainfall
  );
  if (rainfallMatch) score += 3;
  
  return score;
};

// Helper object for cultivation methods
export const cultivationMethods = {
  "Row planting": ["Bhendi", "Groundnut", "Cotton", "Millet"],
  "Raised beds": ["Carrot"],
  "High-density planting": ["Pineapple", "Sapota"],
  "Pit planting": ["Grapes", "Papaya", "Cashewnut"]
};

// Disease susceptibility database
export const commonDiseases = {
  "Fungal": {
    "Wilt": ["Bhendi", "Banana", "Tomato", "Cotton"],
    "Mildew": ["Bhendi", "Grapes", "Papaya"],
    "Leaf Spot": ["Banana", "Carrot", "Groundnut", "Sapota"]
  },
  "Viral": {
    "Mosaic": ["Ragi", "Papaya"]
  },
  "Bacterial": {
    "Rot": ["Carrot", "Pineapple"]
  }
};

// Growth duration categories
export const growthDuration = {
  "Short (< 3 months)": ["Bhendi"],
  "Medium (3-6 months)": ["Ragi", "Carrot", "Sapota"],
  "Long (6-12 months)": ["Banana", "Papaya"],
  "Perennial": ["Grapes", "Cashewnut"]
};

// NPK requirement levels
export const npkRequirements = {
  "Low": {
    crops: ["Ragi", "Bhendi", "Carrot"],
    ratio: "1:1:1"
  },
  "Medium": {
    crops: ["Banana", "Groundnut", "Millet"],
    ratio: "2:1:2"
  },
  "High": {
    crops: ["Tomato", "Cotton", "Sugarcane"],
    ratio: "varies by crop"
  }
};

// Updated helper function to get district-specific crops
export const getDistrictCrops = (state, district) => {
  const districtCrops = [];
  
  for (const [cropName, cropData] of Object.entries(cropDatabase)) {
    if (cropData.district_specific_details?.[state]?.[district]) {
      districtCrops.push({
        name: cropName,
        details: cropData.district_specific_details[state][district],
        general_info: {
          scientific_name: cropData.scientific_name,
          soil_types: cropData.soil_types,
          npk_ratio: cropData.npk_ratio,
          diseases: cropData.diseases,
          cultivation: cropData.cultivation
        }
      });
    }
  }
  
  return districtCrops;
};

// Helper function to get crop recommendations based on soil type
export const getCropsBySoilType = (soilTypes) => {
  const recommendedCrops = new Set();
  
  soilTypes.forEach(soilType => {
    Object.entries(cropDatabase).forEach(([cropName, cropData]) => {
      if (cropData.soil_types.some(type => 
        type.toLowerCase().includes(soilType.toLowerCase())
      )) {
        recommendedCrops.add(cropName);
      }
    });
  });
  
  return Array.from(recommendedCrops);
};

// Helper function to get seasonal crop recommendations
export const getSeasonalCrops = (state, district, season) => {
  return getDistrictCrops(state, district).filter(crop => {
    const sowingTime = crop.details.sowing_time.toLowerCase();
    return sowingTime.includes(season.toLowerCase());
  });
};

const districtCrops = getDistrictCrops('Tamil Nadu', 'Dindigul');
console.log(districtCrops); // Will show all crops for Dindigul

// Get seasonal recommendations
const kharifCrops = getSeasonalCrops('Tamil Nadu', 'Dindigul', 'June-July');
console.log(kharifCrops); // Will show crops suitable for Kharif season

// Add helper function to calculate actual NPK values from ratio
export const calculateActualNPK = (crop, landArea) => {
  const baseValues = {
    "Paddy": { base: 30, multiplier: 1 },
    "Cotton": { base: 60, multiplier: 1 },
    "Maize": { base: 75, multiplier: 1 },
    "Sugarcane": { base: 50, multiplier: 2 },
    "Turmeric": { base: 50, multiplier: 1 },
    "Tomato": { base: 24, multiplier: 1 },
    "Chilli": { base: 75, multiplier: 1 },
    "Onion": { base: 30, multiplier: 1 },
    "Coconut": { base: 100, multiplier: 1 },
    "Banana": { base: 100, multiplier: 1 },
    "Ragi": { base: 30, multiplier: 1 },
    "Bhendi": { base: 100, multiplier: 1 }
  };

  const ratio = cropDatabase[crop].npk_ratio;
  const { base, multiplier } = baseValues[crop];

  return {
    n: Math.round(ratio.n * base * multiplier * landArea),
    p: Math.round(ratio.p * base * multiplier * landArea),
    k: Math.round(ratio.k * base * multiplier * landArea)
  };
};

// Add helper function to calculate fertilizer recommendations
export const calculateFertilizerAmounts = (npkValues) => {
  return {
    urea: Math.round(npkValues.n * 2.17),      // Convert N to Urea
    dap: Math.round(npkValues.p * 5.43),       // Convert P to DAP
    mop: Math.round(npkValues.k * 1.67),       // Convert K to MOP
    organic_manure: Math.round(npkValues.n * 10) // Basic organic manure calculation
  };
};

// Add helper function for application schedule
export const getFertilizerSchedule = (crop) => {
  const schedules = {
    "Paddy": {
      basal: { percentage: 40, timing: "Before transplanting" },
      vegetative: { percentage: 30, timing: "30 days after transplanting" },
      reproductive: { percentage: 30, timing: "60 days after transplanting" }
    },
    "Cotton": {
      basal: { percentage: 30, timing: "Before sowing" },
      vegetative: { percentage: 40, timing: "30-40 days after sowing" },
      reproductive: { percentage: 30, timing: "70-80 days after sowing" }
    },
    // ... Add schedules for other crops
  };

  return schedules[crop] || {
    basal: { percentage: 40, timing: "Before sowing" },
    vegetative: { percentage: 30, timing: "30 days after sowing" },
    reproductive: { percentage: 30, timing: "60 days after sowing" }
  };
};

export const calculateFertilizerRecommendation = (crop, soilData, landArea) => {
  // Get crop NPK requirements from cropDatabase
  const cropNPK = cropDatabase[crop]?.npk_ratio || { n: 1, p: 1, k: 1 };
  
  // Get soil NPK values
  const soilNPK = {
    n: parseFloat(soilData.nutrients.n_content.split('-')[0]),
    p: parseFloat(soilData.nutrients.p_content.split('-')[0]),
    k: parseFloat(soilData.nutrients.k_content.split('-')[0])
  };

  const simplifyRatio = (n, p, k) => {
    // Find the minimum value
    const minValue = Math.min(n, p, k);
    if (minValue === 0) return { n: 0, p: 0, k: 0 };

    // Calculate initial ratios
    let ratios = {
      n: Math.round((n / minValue) * 10) / 10,
      p: Math.round((p / minValue) * 10) / 10,
      k: Math.round((k / minValue) * 10) / 10
    };

    // Further simplify if all numbers are whole
    while (
      Number.isInteger(ratios.n) && 
      Number.isInteger(ratios.p) && 
      Number.isInteger(ratios.k) &&
      Math.max(ratios.n, ratios.p, ratios.k) > 9
    ) {
      ratios.n /= 2;
      ratios.p /= 2;
      ratios.k /= 2;
    }

    return {
      n: Math.round(ratios.n),
      p: Math.round(ratios.p),
      k: Math.round(ratios.k)
    };
  };

  // Calculate current soil ratio
  const currentRatio = simplifyRatio(
    soilNPK.n,
    soilNPK.p * 10, // Scale up P values to match N and K scale
    soilNPK.k
  );

  // Calculate required ratio from crop database
  const requiredRatio = simplifyRatio(
    cropNPK.n,
    cropNPK.p,
    cropNPK.k
  );

  // Calculate deficit (what needs to be added)
  const deficitRatio = simplifyRatio(
    Math.max(0, cropNPK.n - (soilNPK.n / 100)),
    Math.max(0, cropNPK.p - (soilNPK.p / 10)),
    Math.max(0, cropNPK.k - (soilNPK.k / 100))
  );

  return {
    analysis: {
      current_soil: `${currentRatio.n}:${currentRatio.p}:${currentRatio.k}`,
      required: `${requiredRatio.n}:${requiredRatio.p}:${requiredRatio.k}`,
      deficit: `${deficitRatio.n}:${deficitRatio.p}:${deficitRatio.k}`,
      raw_values: {
        soil: soilNPK,
        crop: cropNPK,
        deficit: deficitRatio
      }
    },
    fertilizers: {
      urea: Math.round((deficitRatio.n * 2.17) * landArea),
      dap: Math.round((deficitRatio.p * 5.43) * landArea),
      mop: Math.round((deficitRatio.k * 1.67) * landArea)
    },
    organic: {
      fym: Math.round(10000 * landArea / 1000),
      vermicompost: Math.round(5000 * landArea / 1000),
      neem_cake: Math.round(500 * landArea / 1000)
    }
  };
};
export const cropDatabase = {
  "Ragi": {
    scientific_name: "Eleusine coracana",
    soil_types: ["Loamy", "Sandy loam"],
    npk_ratio: {
      n: 2,
      p: 1,
      k: 1
    },
    growth_time: "3-5 months",
    diseases: ["Blast", "Mosaic"],
    phenotype: "Spiked panicle, finger-like spikes",
    cultivation: "Intercropping with pulses"
  },
  "Bhendi": {
    scientific_name: "Abelmoschus esculentus",
    soil_types: ["Loamy"],
    npk_ratio: {
      n: 1,
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
      k: 2
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
    cultivation: "Row planting in furrows"
  },
  "Millet": {
    scientific_name: "Pennisetum glaucum",
    soil_types: ["Alluvial", "Sandy"],
    npk_ratio: {
      n: 70,
      p: 35,
      k: 35
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
      n: 200,
      p: 250,
      k: 250
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
      n: 120,
      p: 60,
      k: 60
    },
    growth_time: "90-150 days",
    diseases: ["Wilt", "Blight"],
    phenotype: "Sub-shrub with rigid stems",
    cultivation: "Rows planting"
  },
  "Sugarcane": {
    scientific_name: "Saccharum officinarum",
    soil_types: ["Loam", "Alluvial"],
    npk_ratio: {
      n: 5,
      p: 5,
      k: 2
    },
    growth_time: "12-18 months",
    diseases: ["Red Rot", "Smut"],
    phenotype: "Tall perennial",
    cultivation: "Propagated by cuttings"
  }
};

// Helper object for soil type based crop recommendations
export const soilTypeCrops = {
  "Loamy": ["Ragi", "Bhendi", "Banana", "Carrot", "Sugarcane"],
  "Sandy loam": ["Ragi", "Groundnut", "Sapota"],
  "Well-drained loamy": ["Grapes", "Tomato"],
  "Alluvial": ["Millet", "Cotton", "Sugarcane", "Sapota"],
  "Clayey": ["Cotton"]
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
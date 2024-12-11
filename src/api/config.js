export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000/api',  // Python FastAPI default port
  ENDPOINTS: {
    SOIL: '/soil',
    CROP: '/crop',
    RECOMMENDATIONS: '/recommendations'
  },
  HEADERS: {
    'Content-Type': 'application/json'
  }
}; 
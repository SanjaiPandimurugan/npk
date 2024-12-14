import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import SensorData from '../models/SensorData.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/soil_sensors')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/api/sensor-data', async (req, res) => {
  try {
    const sensorData = new SensorData(req.body);
    await sensorData.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

app.get('/api/sensor-data/latest', async (req, res) => {
  try {
    const latestData = await SensorData.findOne().sort({ timestamp: -1 });
    res.status(200).json({ 
      success: true, 
      data: latestData || {
        nitrogen: 0,
        phosphorus: 0,
        potassium: 0,
        ph: 0,
        moisture: 0
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
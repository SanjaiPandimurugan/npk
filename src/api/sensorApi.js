import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import SensorData from '../models/SensorData.js';

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/soil_sensors', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// API endpoint to save sensor data
app.post('/api/sensor-data', async (req, res) => {
  try {
    const sensorData = new SensorData(req.body);
    await sensorData.save();
    res.status(201).json({ success: true, data: sensorData });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// API endpoint to get latest sensor data
app.get('/api/sensor-data/latest', async (req, res) => {
  try {
    const latestData = await SensorData.findOne().sort({ timestamp: -1 });
    res.status(200).json({ success: true, data: latestData });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
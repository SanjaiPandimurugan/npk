import mongoose from 'mongoose';

const sensorDataSchema = new mongoose.Schema({
  nitrogen: Number,
  phosphorus: Number,
  potassium: Number,
  ph: Number,
  moisture: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('SensorData', sensorDataSchema); 
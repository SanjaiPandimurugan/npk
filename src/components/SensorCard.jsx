import React from 'react';
import { Card, CardContent } from "./ui/card";

const SensorCard = ({ title, value, unit, icon, color, range }) => {
  // Ensure value is a number or show placeholder
  const numericValue = value !== undefined ? Number(value) : null;
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className={`p-2 rounded-lg bg-${color}-50`}>
            <div className={`text-${color}-500`}>{icon}</div>
          </div>
        </div>

        {/* Value */}
        <div className="mb-4">
          <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
          <div className="flex items-baseline">
            {numericValue !== null ? (
              <span className={`text-2xl font-bold text-${color}-600`}>
                {numericValue.toFixed(1)}
              </span>
            ) : (
              <span className="text-2xl font-bold text-gray-400">--</span>
            )}
            <span className="text-gray-500 text-sm ml-1">{unit}</span>
          </div>
        </div>

        {/* Range Info */}
        <div className="text-sm text-gray-500">
          <div className="flex justify-between mb-1">
            <span>Target: {range?.optimal || '--'} {unit}</span>
            <span className="text-gray-400">Awaiting data...</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SensorCard;
from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:5173"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

logging.basicConfig(level=logging.DEBUG)

# Add sensor data endpoint
@app.route('/api/sensor-data', methods=['GET', 'POST', 'OPTIONS'])
def sensor_data():
    if request.method == 'OPTIONS':
        return jsonify({}), 200
    
    try:
        if request.method == 'POST':
            data = request.json
            app.logger.info(f"Received sensor data: {data}")
            return jsonify({'message': 'Data received successfully'}), 200
        else:
            # Return mock sensor data for GET requests
            return jsonify({
                'nitrogen': 50,
                'phosphorus': 40,
                'potassium': 30,
                'pH': 6.5,
                'moisture': 60
            })
    except Exception as e:
        app.logger.error(f"Error handling sensor data: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        return jsonify({}), 200
        
    try:
        data = request.json
        app.logger.info(f"Received data: {data}")
        
        current_npk = data.get('current_npk', {})
        crop_requirements = data.get('crop_requirements', {})
        land_area = float(data.get('land_area', 1.0))
        
        current_n = float(current_npk.get('n', 0))
        current_p = float(current_npk.get('p', 0))
        current_k = float(current_npk.get('k', 0))
        
        required_n = float(crop_requirements.get('n', 0))
        required_p = float(crop_requirements.get('p', 0))
        required_k = float(crop_requirements.get('k', 0))
        
        n_deficit = max(0, required_n - current_n)
        p_deficit = max(0, required_p - current_p)
        k_deficit = max(0, required_k - current_k)
        
        fym_quantity = round((n_deficit * 15 + p_deficit * 10 + k_deficit * 5) * land_area)
        vermicompost_quantity = round((n_deficit * 10 + p_deficit * 15 + k_deficit * 8) * land_area)
        neem_cake_quantity = round((n_deficit * 5 + p_deficit * 5 + k_deficit * 15) * land_area)
        
        response_data = {
            'predictions': {
                'fym_quantity': fym_quantity,
                'vermicompost_quantity': vermicompost_quantity,
                'neem_cake_quantity': neem_cake_quantity
            }
        }
        
        app.logger.info(f"Sending response: {response_data}")
        return jsonify(response_data)
        
    except Exception as e:
        app.logger.error(f"Error processing request: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True) 
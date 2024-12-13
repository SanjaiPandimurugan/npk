from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from train_model import ManurePredictor

app = Flask(__name__)
CORS(app)

# Load the trained model and crop data
predictor = ManurePredictor.load_models('manure_predictor.joblib')
crop_data = pd.read_csv('crop_manure_data.csv')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        if not data or 'cropName' not in data:
            return jsonify({
                'success': False,
                'error': 'No crop name provided'
            }), 400
            
        crop_name = data['cropName']
        if not crop_name:
            return jsonify({
                'success': False,
                'error': 'Crop name cannot be empty'
            }), 400
        
        # Find the crop in the database
        crop_info = crop_data[crop_data['Crop_Name'].str.lower() == crop_name.lower()]
        
        if crop_info.empty:
            return jsonify({
                'success': False,
                'error': f'Crop {crop_name} not found in database'
            }), 400
            
        crop_info = crop_info.iloc[0]  # Get the first matching row
        
        # Get predictions directly from the CSV data
        predictions = {
            'fym': int(crop_info['FYM_kg']),
            'vermicompost': int(crop_info['Vermicompost_kg']),
            'neem_cake': int(crop_info['Neem_Cake_kg']),
            'npk_ratio': crop_info['NPK_Ratio']
        }
        
        return jsonify({
            'success': True,
            'predictions': predictions
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000) 
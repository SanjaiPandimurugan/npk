from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("Received data:", data)  # Debug print
        
        # Load the dataset
        current_dir = os.path.dirname(os.path.abspath(__file__))
        csv_path = os.path.join(current_dir, 'data', 'crop_manure_data.csv')
        df = pd.read_csv(csv_path)
        
        # Get NPK values from request
        n_ratio = float(data.get('nitrogen', 0))
        p_ratio = float(data.get('phosphorus', 0))
        k_ratio = float(data.get('potassium', 0))
        
        # Convert to ratio string
        input_ratio = f"{n_ratio}:{p_ratio}:{k_ratio}"
        print(f"Looking for NPK ratio: {input_ratio}")
        
        # Find matching crop
        def find_closest_crop(input_ratio, df):
            input_n, input_p, input_k = map(float, input_ratio.split(':'))
            
            closest_crop = None
            min_difference = float('inf')
            
            for _, row in df.iterrows():
                db_n, db_p, db_k = map(float, row['NPK_Ratio'].split(':'))
                
                difference = abs(input_n - db_n) + abs(input_p - db_p) + abs(input_k - db_k)
                
                if difference < min_difference:
                    min_difference = difference
                    closest_crop = row
            
            return closest_crop
        
        matched_crop = find_closest_crop(input_ratio, df)
        
        if matched_crop is None:
            raise ValueError("No matching crop found")
            
        print(f"Matched crop: {matched_crop['Crop_Name']}")
        
        # Get manure recommendations
        predictions = {
            'fym': int(matched_crop['FYM_kg']),
            'vermicompost': int(matched_crop['Vermicompost_kg']),
            'neem': int(matched_crop['Neem_Cake_kg'])
        }
        
        return jsonify({
            'success': True,
            'predictions': predictions,
            'crop_info': {
                'crop_name': matched_crop['Crop_Name'],
                'npk_ratio': matched_crop['NPK_Ratio'],
                'soil_type': matched_crop['Soil_Type'],
                'growth_duration': int(matched_crop['Growth_Duration_Days']),
                'yield_potential': float(matched_crop['Yield_Potential_Tonnes_per_ha'])
            }
        })
        
    except Exception as e:
        print(f"Error during prediction: {str(e)}")  # Debug print
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    app.run(port=5001, debug=True)
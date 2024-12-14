import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import xgboost as xgb
import joblib
import os

def prepare_data():
    try:
        # Get the absolute path to the data file
        current_dir = os.path.dirname(os.path.abspath(__file__))
        data_path = os.path.join(current_dir, 'crop_manure_data.csv')  # Changed path
        
        print(f"Looking for data file at: {data_path}")  # Debug print
        
        # Read the dataset
        df = pd.read_csv(data_path)
        
        # Create label encoder
        label_encoder = LabelEncoder()
        
        # Encode categorical columns
        categorical_columns = ['Crop_Name', 'Variety', 'Season', 'Soil_Type', 'Region']
        for col in categorical_columns:
            df[f'{col}_Encoded'] = label_encoder.fit_transform(df[col])
        
        # Extract NPK ratios
        df[['N_Ratio', 'P_Ratio', 'K_Ratio']] = df['NPK_Ratio'].str.split(':', expand=True).astype(float)
        
        # Prepare features
        features = [
            'Crop_Name_Encoded', 'Variety_Encoded', 'Season_Encoded',
            'N_Ratio', 'P_Ratio', 'K_Ratio', 'Growth_Duration_Days',
            'Soil_Type_Encoded', 'Region_Encoded', 'Yield_Potential_Tonnes_per_ha',
            'Irrigation_Interval_Days'
        ]
        
        X = df[features]
        y_fym = df['FYM_kg']
        y_vermi = df['Vermicompost_kg']
        y_neem = df['Neem_Cake_kg']
        
        return X, y_fym, y_vermi, y_neem, label_encoder
        
    except Exception as e:
        print(f"Error in prepare_data: {str(e)}")
        raise

def train_models():
    try:
        print("Starting data preparation...")
        X, y_fym, y_vermi, y_neem, label_encoder = prepare_data()
        
        # Create directory for saving models if it doesn't exist
        current_dir = os.path.dirname(os.path.abspath(__file__))
        models_dir = os.path.join(current_dir, 'models')
        os.makedirs(models_dir, exist_ok=True)
        
        # Train models
        models = {}
        targets = {
            'fym': y_fym,
            'vermicompost': y_vermi,
            'neem': y_neem
        }
        
        for name, y in targets.items():
            print(f"\nTraining {name} model...")
            
            # Split data
            X_train, X_test, y_train, y_test = train_test_split(
                X, y, test_size=0.2, random_state=42
            )
            
            # Create and train model
            model = xgb.XGBRegressor(
                objective='reg:squarederror',
                n_estimators=100,
                max_depth=6,
                learning_rate=0.1,
                random_state=42
            )
            
            model.fit(X_train, y_train)
            models[name] = model
            
            # Print performance metrics
            train_score = model.score(X_train, y_train)
            test_score = model.score(X_test, y_test)
            print(f"{name.upper()} Model Performance:")
            print(f"Training R² Score: {train_score:.4f}")
            print(f"Testing R² Score: {test_score:.4f}")
        
        # Save models and encoder
        print("\nSaving models and encoder...")
        joblib.dump(models, os.path.join(models_dir, 'xgboost_models.joblib'))
        joblib.dump(label_encoder, os.path.join(models_dir, 'label_encoder.joblib'))
        
        print("Training completed successfully!")
        
    except Exception as e:
        print(f"Error during training: {str(e)}")
        raise

if __name__ == "__main__":
    try:
        print("Starting model training process...")
        train_models()
    except Exception as e:
        print(f"Training failed: {str(e)}")

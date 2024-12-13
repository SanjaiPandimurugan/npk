import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib

class ManurePredictor:
    def __init__(self):
        self.fym_model = None
        self.vermicompost_model = None
        self.neem_cake_model = None
        
    def train(self, data_path='crop_manure_data.csv'):
        # Load data from your CSV file
        df = pd.read_csv(data_path)
        
        # Extract NPK values from ratio string
        df[['N', 'P', 'K']] = df['NPK_Ratio'].str.split(':', expand=True).astype(float)
        
        # Features and targets
        X = df[['N', 'P', 'K']]
        y_fym = df['FYM_kg']
        y_vermi = df['Vermicompost_kg']
        y_neem = df['Neem_Cake_kg']
        
        # Train models
        self.fym_model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.vermicompost_model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.neem_cake_model = RandomForestRegressor(n_estimators=100, random_state=42)
        
        self.fym_model.fit(X, y_fym)
        self.vermicompost_model.fit(X, y_vermi)
        self.neem_cake_model.fit(X, y_neem)
        
    def predict(self, npk_ratio):
        # Parse NPK ratio
        n, p, k = map(float, npk_ratio.split(':'))
        X_pred = [[n, p, k]]
        
        # Make predictions
        predictions = {
            'fym': round(self.fym_model.predict(X_pred)[0]),
            'vermicompost': round(self.vermicompost_model.predict(X_pred)[0]),
            'neem_cake': round(self.neem_cake_model.predict(X_pred)[0])
        }
        
        return predictions
    
    def save_models(self, filepath='manure_predictor.joblib'):
        models = {
            'fym': self.fym_model,
            'vermicompost': self.vermicompost_model,
            'neem_cake': self.neem_cake_model
        }
        joblib.dump(models, filepath)
    
    @classmethod
    def load_models(cls, filepath='manure_predictor.joblib'):
        instance = cls()
        models = joblib.load(filepath)
        instance.fym_model = models['fym']
        instance.vermicompost_model = models['vermicompost']
        instance.neem_cake_model = models['neem_cake']
        return instance

# Train and save the model if running this file directly
if __name__ == "__main__":
    predictor = ManurePredictor()
    predictor.train()
    predictor.save_models()
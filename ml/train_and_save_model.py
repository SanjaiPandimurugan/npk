from train_model import ManurePredictor

def main():
    # Initialize predictor
    predictor = ManurePredictor()
    
    # Train models
    predictor.train('crop_manure_data.csv')
    
    # Save models
    predictor.save_models('manure_predictor.joblib')

if __name__ == '__main__':
    main() 
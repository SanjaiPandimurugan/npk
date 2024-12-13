from train_model import ManurePredictor
import pandas as pd

def test_predictions():
    # Load the trained model
    predictor = ManurePredictor.load_models('manure_predictor.joblib')
    
    # Load some sample data from your CSV
    df = pd.read_csv('crop_manure_data.csv')
    sample_data = df.head()  # Test first 5 entries
    
    print("\nTesting Manure Predictions:")
    print("-" * 60)
    
    for _, row in sample_data.iterrows():
        print(f"\nCrop: {row['Crop_Name']} (NPK Ratio: {row['NPK_Ratio']})")
        print("Actual values:")
        print(f"FYM: {row['FYM_kg']} kg")
        print(f"Vermicompost: {row['Vermicompost_kg']} kg")
        print(f"Neem Cake: {row['Neem_Cake_kg']} kg")
        
        print("\nPredicted values:")
        try:
            predictions = predictor.predict(row['NPK_Ratio'])
            print(f"FYM: {predictions['fym']} kg")
            print(f"Vermicompost: {predictions['vermicompost']} kg")
            print(f"Neem Cake: {predictions['neem_cake']} kg")
        except Exception as e:
            print(f"Error: {str(e)}")
        print("-" * 60)

if __name__ == "__main__":
    test_predictions() 
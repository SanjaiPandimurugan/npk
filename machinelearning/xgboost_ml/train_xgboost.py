import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import xgboost as xgb
from sklearn.metrics import mean_squared_error, r2_score

# Read the CSV file
df = pd.read_csv('crop_manure_data.csv')

# Prepare features and target
# Convert categorical variables to numerical using Label Encoding
le = LabelEncoder()
categorical_columns = ['Crop_Name', 'Variety', 'Season', 'Soil_Type', 'Region']
for col in categorical_columns:
    df[col] = le.fit_transform(df[col])

# Split NPK_Ratio into separate columns
df[['N_Ratio', 'P_Ratio', 'K_Ratio']] = df['NPK_Ratio'].str.split(':', expand=True).astype(float)

# Extract numeric values from pH_Range
df[['pH_Min', 'pH_Max']] = df['pH_Range'].str.split('-', expand=True).astype(float)

# Features to use for training
features = ['Crop_Name', 'Variety', 'Season', 'N_Ratio', 'P_Ratio', 'K_Ratio', 
           'CurrentNPK_kg', 'FYM_kg', 'Vermicompost_kg', 'Neem_Cake_kg',
           'Growth_Duration_Days', 'Soil_Type', 'pH_Min', 'pH_Max',
           'Irrigation_Interval_Days']

X = df[features]
y = df['Yield_Potential_Tonnes_per_ha']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train XGBoost model
model = xgb.XGBRegressor(
    objective='reg:squarederror',
    n_estimators=100,
    max_depth=6,
    learning_rate=0.1,
    random_state=42
)

# Train the model
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Calculate metrics
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print("\nModel Performance Metrics:")
print(f"Root Mean Square Error: {rmse:.2f}")
print(f"R-squared Score: {r2:.2f}")

# Feature importance
feature_importance = pd.DataFrame({
    'feature': features,
    'importance': model.feature_importances_
})
feature_importance = feature_importance.sort_values('importance', ascending=False)

print("\nTop 10 Most Important Features:")
print(feature_importance.head(10))

# Save the model
model.save_model('crop_yield_model.json')
print("\nModel saved as 'crop_yield_model.json'")
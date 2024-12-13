import pandas as pd

# Create the dataset from the provided data
data = {
    'Crop_ID': [],
    'Crop_Name': [],
    'NPK_Ratio': [],
    'FYM_kg': [],
    'Vermicompost_kg': [],
    'Neem_Cake_kg': []
}

# Add the data (example entries - replace with your actual data)
crops = [
    ['AG001', 'Ragi', '3:1:1', 7500, 4500, 2500],
    ['AG002', 'Tomato', '5:2.5:2', 8200, 5200, 3200],
    ['AG003', 'Cotton', '2:1:1', 6800, 4200, 2200],
    ['AG004', 'Sugarcane', '5:2:2', 9000, 6000, 3500],
    ['AG005', 'Paddy', '4:1:1', 7000, 4800, 2800],
    # Add more entries based on your domain knowledge and local recommendations
]

for crop in crops:
    data['Crop_ID'].append(crop[0])
    data['Crop_Name'].append(crop[1])
    data['NPK_Ratio'].append(crop[2])
    data['FYM_kg'].append(crop[3])
    data['Vermicompost_kg'].append(crop[4])
    data['Neem_Cake_kg'].append(crop[5])

# Create DataFrame and save to CSV
df = pd.DataFrame(data)
df.to_csv('crop_manure_data.csv', index=False) 
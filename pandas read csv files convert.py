import pandas as pd
import json

with open("ukdata.json") as jsonfile:
    data = json.load(jsonfile)
    df = pd.DataFrame([data])
    print(df)
    df.to_json(r'ukdata1.json')

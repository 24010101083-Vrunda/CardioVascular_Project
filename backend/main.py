from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # User needs to update this with Vercel URL
    allow_methods=["*"],
    allow_headers=["*"],
)

class PatientData(BaseModel):
    model: str = "random_forest"
    age: float = 0
    gender: int = 1
    height: float = 0
    weight: float = 0
    ap_hi: float = 0
    ap_lo: float = 0
    cholesterol: int = 1
    gluc: int = 1
    smoke: int = 0
    alco: int = 0
    active: int = 0

@app.post("/api/predict")
def predict(data: PatientData):
    model_name = data.model
    
    if model_name == 'decision_tree':
        model = joblib.load('decision_tree_model.pkl')
    elif model_name == 'logistic_regression':
        model = joblib.load('logistic_regression_model.pkl')
    else:
        model = joblib.load('random_forest_model.pkl')
        
    features = pd.DataFrame([{
        'age': data.age,
        'gender': data.gender,
        'height': data.height,
        'weight': data.weight,
        'ap_hi': data.ap_hi,
        'ap_lo': data.ap_lo,
        'cholesterol': data.cholesterol,
        'gluc': data.gluc,
        'smoke': data.smoke,
        'alco': data.alco,
        'active': data.active
    }])
    
    risk_score = float(model.predict_proba(features)[0][1])
    
    if risk_score < 0.33:
        condition = "good"
        message = "Great job! Your cardiovascular health looks excellent. Keep up the good work!"
    elif risk_score < 0.66:
        condition = "average"
        message = "You are in an average condition. Consider improving your exercise duration, maintaining a balanced diet, and doing some regular workout routines."
    else:
        condition = "bad"
        message = "High risk detected. It is highly recommended to consult a doctor, monitor your blood pressure regularly, and make immediate lifestyle improvements."
        
    return {
        'status': 'success',
        'risk_score': round(risk_score, 2),
        'condition': condition,
        'message': message
    }

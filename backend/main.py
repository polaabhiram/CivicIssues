from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 🔥 CORS (IMPORTANT for React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔹 Home route
@app.get("/")
def home():
    return {"message": "Smart City Backend Running 🚀"}

# 🔹 Request format
class Complaint(BaseModel):
    text: str
    location: dict | None = None

# 🔹 Prediction API
@app.post("/predict")
def predict(data: Complaint):
    return {
        "sector": "roads",
        "severity": "high",
        "priority": "critical"
    }

#text-score

def get_text_urgency(text: str) -> float:
    text = text.lower()

    high_keywords = ["fire", "accident", "collapse", "dead", "injury"]
    medium_keywords = ["leak", "damage", "broken", "pothole"]

    for word in high_keywords:
        if word in text:
            return 1.0

    for word in medium_keywords:
        if word in text:
            return 0.6

    return 0.2

#location-risk
def get_location_risk(location: dict | None) -> float:
    if not location:
        return 0.3

    # 🔥 mock logic
    # (later: hospital, highway, etc.)
    return 0.7

#this will be replaced my image model
def get_severity() -> float:
    return 0.8


#overall priority
def compute_priority(text: str, location: dict | None):
    text_score = get_text_urgency(text)
    location_score = get_location_risk(location)
    severity_score = get_severity()

    priority_score = (
        0.5 * severity_score +
        0.3 * location_score +
        0.2 * text_score
    )

    if priority_score > 0.75:
        return "critical"
    elif priority_score > 0.5:
        return "high"
    elif priority_score > 0.3:
        return "medium"
    else:
        return "low"
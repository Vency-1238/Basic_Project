from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware

#init app FASTAPI
app=FastAPI()

#Allow request from frontend(CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Load the model AI emotion-detector -> Hugging Face
classifier = pipeline("text-classification", model="j-hartmann/emotion-english-distilroberta-base", return_all_scores=True)

#Model input user
class TextRequest(BaseModel):
    text: str
    
#endpoint Post /predict
@app.post("/predict")
def predict_emotion(req: TextRequest):
    result = classifier(req.text)
    return {"emotions": result[0]}

@app.get("/")
def read_root():
    return {"message": "Backend is running."}

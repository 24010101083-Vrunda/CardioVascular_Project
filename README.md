# CardioAI - Cardiovascular Machine Learning Project

This project includes a fully responsive, modern React UI and a Python Flask backend to serve your Machine Learning model.

## Folder Structure

- `frontend/`: Contains the React UI built with Vite, Tailwind CSS, Framer Motion, and Lucide React.
- `backend/`: Contains the Flask API (`app.py`) to connect your machine learning model (`.pkl` or `.h5`) to the UI.

## How to run the Frontend

1. Open a terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to `http://localhost:5173`.

## How to run the Backend (and connect your model)

1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
3. Open `app.py` and modify the `predict()` function to load your trained model:
   ```python
   # Uncomment and modify these lines in app.py:
   # import joblib
   # model = joblib.load('my_trained_model.pkl')
   # prediction = model.predict([features])
   ```
4. Run the Flask API:
   ```bash
   python app.py
   ```

The backend runs on `http://localhost:5000` and the React UI is pre-configured to send prediction requests to `http://localhost:5000/api/predict`.

## Features
- **Dark/Light Mode**: Toggle available in the Navigation bar.
- **Pagination Form**: Inputs are split into 3 logical steps (Personal, Medical, Lifestyle).
- **Dynamic Results**: 
  - 🎉 **Good**: Confetti animation and positive feedback.
  - 💡 **Average**: Suggestions for workouts, better diet, and exercises.
  - ⚠️ **Bad**: Immediate medical consultation advice.

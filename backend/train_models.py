import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

print("Loading data...")
df = pd.read_csv("../cardio_train (1).csv", sep=";")

# Feature columns
X = df[['age', 'gender', 'height', 'weight', 'ap_hi', 'ap_lo', 'cholesterol', 'gluc', 'smoke', 'alco', 'active']]
y = df['cardio']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("Training Decision Tree...")
dt = Pipeline([
    ('scaler', StandardScaler()),
    ('model', DecisionTreeClassifier(max_depth=10, random_state=42))
])
dt.fit(X_train, y_train)
joblib.dump(dt, "decision_tree_model.pkl")

print("Training Logistic Regression...")
lr = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LogisticRegression(random_state=42, max_iter=1000))
])
lr.fit(X_train, y_train)
joblib.dump(lr, "logistic_regression_model.pkl")

print("Training Random Forest...")
rf = Pipeline([
    ('scaler', StandardScaler()),
    ('model', RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42))
])
rf.fit(X_train, y_train)
joblib.dump(rf, "random_forest_model.pkl")

print("Models trained and saved successfully!")

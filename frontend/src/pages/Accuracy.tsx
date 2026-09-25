import { Activity, Target, Crosshair, CheckCircle2 } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const accuracyData = [
  { name: 'Random Forest', Accuracy: 73.4, Precision: 74.1, Recall: 71.9, F1_Score: 73.0 },
  { name: 'Logistic Regression', Accuracy: 72.1, Precision: 72.8, Recall: 70.5, F1_Score: 71.6 },
  { name: 'Decision Tree', Accuracy: 64.8, Precision: 65.2, Recall: 63.9, F1_Score: 64.5 },
];

const crossValData = [
  { fold: 'Fold 1', score: 73.2 },
  { fold: 'Fold 2', score: 74.1 },
  { fold: 'Fold 3', score: 72.8 },
  { fold: 'Fold 4', score: 73.5 },
  { fold: 'Fold 5', score: 73.6 },
];

export default function Accuracy() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-text-main mb-2">Accuracy & Performance Metrics</h1>
        <p className="text-text-muted">In-depth statistical breakdown of our machine learning models.</p>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-bg-card border border-border p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-2">
            <Target className="w-5 h-5 text-brand" />
            <h3 className="text-sm font-semibold text-text-muted">Best Model Accuracy</h3>
          </div>
          <p className="text-3xl font-bold text-text-main">73.4%</p>
          <p className="text-xs text-success mt-1">Random Forest</p>
        </div>
        <div className="bg-bg-card border border-border p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-2">
            <Crosshair className="w-5 h-5 text-blue-500" />
            <h3 className="text-sm font-semibold text-text-muted">Precision</h3>
          </div>
          <p className="text-3xl font-bold text-text-main">74.1%</p>
          <p className="text-xs text-text-muted mt-1">True Positive Rate</p>
        </div>
        <div className="bg-bg-card border border-border p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-2">
            <Activity className="w-5 h-5 text-purple-500" />
            <h3 className="text-sm font-semibold text-text-muted">Recall (Sensitivity)</h3>
          </div>
          <p className="text-3xl font-bold text-text-main">71.9%</p>
          <p className="text-xs text-text-muted mt-1">Actual Positives Found</p>
        </div>
        <div className="bg-bg-card border border-border p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-2">
            <CheckCircle2 className="w-5 h-5 text-success" />
            <h3 className="text-sm font-semibold text-text-muted">F1-Score</h3>
          </div>
          <p className="text-3xl font-bold text-text-main">73.0%</p>
          <p className="text-xs text-text-muted mt-1">Harmonic Mean</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Model Comparison Chart */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-text-main mb-6">Model Comparison</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={accuracyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[50, 80]} />
                <Tooltip 
                  cursor={{ fill: '#1e2433' }}
                  contentStyle={{ backgroundColor: '#151923', borderColor: '#1e293b', color: '#f8fafc' }} 
                />
                <Legend />
                <Bar dataKey="Accuracy" fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Precision" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cross Validation Metrics */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-text-main mb-2">5-Fold Cross Validation</h3>
          <p className="text-sm text-text-muted mb-6">
            Cross-validation ensures the model's accuracy is consistent across different subsets of data, proving it hasn't overfit.
          </p>
          
          <div className="space-y-4 mt-8">
            {crossValData.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-text-main">{item.fold}</span>
                  <span className="text-brand font-bold">{item.score}%</span>
                </div>
                <div className="w-full bg-bg-main rounded-full h-2">
                  <div 
                    className="bg-brand h-2 rounded-full" 
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            <div className="mt-6 pt-4 border-t border-border flex justify-between items-center">
              <span className="text-text-muted font-medium">Mean CV Score</span>
              <span className="text-xl font-bold text-success">73.44%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

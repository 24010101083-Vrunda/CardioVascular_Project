import { CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Accuracy', rf: 96.8, dt: 93.4, lr: 91.2 },
  { name: 'Precision', rf: 96.2, dt: 92.8, lr: 90.5 },
  { name: 'Recall', rf: 97.5, dt: 94.1, lr: 92.0 },
  { name: 'F1 Score', rf: 96.8, dt: 93.4, lr: 91.2 },
];

const featureImportanceData = [
  { name: 'Systolic BP', value: 95 },
  { name: 'Age', value: 88 },
  { name: 'Cholesterol', value: 75 },
  { name: 'Weight / BMI', value: 68 },
  { name: 'Glucose', value: 55 },
];

export default function ModelInsights() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Random Forest Card (Selected) */}
        <div className="bg-bg-card border border-brand rounded-xl p-6 relative shadow-[0_0_15px_rgba(99,102,241,0.15)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Random Forest</h3>
              <span className="text-xs text-brand font-medium">v2.1.0</span>
            </div>
            <div className="bg-brand/10 border border-brand/20 px-3 py-1 rounded-full flex items-center space-x-1">
              <CheckCircle size={12} className="text-brand" />
              <span className="text-xs text-brand font-semibold">SELECTED MODEL</span>
            </div>
          </div>
          <p className="text-sm text-text-muted mb-6">
            Ensemble learning method using multiple decision trees for robust cardiovascular risk classification.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-text-muted">Accuracy</span>
              <div className="text-xl font-bold text-white">96.8%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">Precision</span>
              <div className="text-xl font-bold text-white">96.2%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">Recall</span>
              <div className="text-xl font-bold text-white">97.5%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">F1 Score</span>
              <div className="text-xl font-bold text-white">96.8%</div>
            </div>
          </div>
        </div>

        {/* Decision Tree Card */}
        <div className="bg-bg-card border border-border rounded-xl p-6 opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Decision Tree</h3>
              <span className="text-xs text-text-muted font-medium">v1.3.0</span>
            </div>
            <div className="px-3 py-1 rounded-full flex items-center space-x-1 border border-border">
              <div className="w-3 h-3 rounded-full border border-text-muted"></div>
              <span className="text-xs text-text-muted font-semibold">EVALUATED</span>
            </div>
          </div>
          <p className="text-sm text-text-muted mb-6">
            Tree-based classifier that splits data using feature thresholds for interpretable predictions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-text-muted">Accuracy</span>
              <div className="text-lg font-bold text-white">93.4%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">Precision</span>
              <div className="text-lg font-bold text-white">92.8%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">Recall</span>
              <div className="text-lg font-bold text-white">94.1%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">F1 Score</span>
              <div className="text-lg font-bold text-white">93.4%</div>
            </div>
          </div>
        </div>

        {/* Logistic Regression Card */}
        <div className="bg-bg-card border border-border rounded-xl p-6 opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Logistic Regression</h3>
              <span className="text-xs text-text-muted font-medium">v1.1.0</span>
            </div>
            <div className="px-3 py-1 rounded-full flex items-center space-x-1 border border-border">
              <div className="w-3 h-3 rounded-full border border-text-muted"></div>
              <span className="text-xs text-text-muted font-semibold">EVALUATED</span>
            </div>
          </div>
          <p className="text-sm text-text-muted mb-6">
            Linear model that estimates disease probability using a logistic function.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-text-muted">Accuracy</span>
              <div className="text-lg font-bold text-white">91.2%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">Precision</span>
              <div className="text-lg font-bold text-white">90.5%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">Recall</span>
              <div className="text-lg font-bold text-white">92.0%</div>
            </div>
            <div>
              <span className="text-xs text-text-muted">F1 Score</span>
              <div className="text-lg font-bold text-white">91.2%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Comparison */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="mb-6">
            <h3 className="font-semibold text-white">Performance Comparison</h3>
            <p className="text-xs text-text-muted">Evaluation metrics across tested models</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis domain={[85, 100]} stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{ backgroundColor: '#151923', borderColor: '#1e293b', color: '#fff' }}
                />
                <Bar dataKey="rf" name="Random Forest" fill="#6366f1" radius={[2, 2, 0, 0]} />
                <Bar dataKey="dt" name="Decision Tree" fill="#475569" radius={[2, 2, 0, 0]} />
                <Bar dataKey="lr" name="Logistic Regression" fill="#94a3b8" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Feature Importance */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="mb-6">
            <h3 className="font-semibold text-white">Top Patient Risk Features</h3>
            <p className="text-xs text-text-muted">Relative importance in the Random Forest model</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={featureImportanceData} margin={{ top: 10, right: 20, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{ backgroundColor: '#151923', borderColor: '#1e293b', color: '#fff' }}
                />
                <Bar dataKey="value" fill="#6366f1" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

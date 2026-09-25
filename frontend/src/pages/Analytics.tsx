import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyData = [
  { name: 'Mon', scans: 1800 },
  { name: 'Tue', scans: 1700 },
  { name: 'Wed', scans: 2000 },
  { name: 'Thu', scans: 2200 },
  { name: 'Fri', scans: 2100 },
  { name: 'Sat', scans: 1400 },
  { name: 'Sun', scans: 1400 },
];

const featureData = [
  { name: 'Age', value: 450 },
  { name: 'Cholesterol', value: 380 },
  { name: 'Systolic BP', value: 320 },
  { name: 'Glucose', value: 250 },
  { name: 'Diastolic BP', value: 210 },
  { name: 'Weight/BMI', value: 180 },
  { name: 'Smoking', value: 140 },
  { name: 'Physical Inactivity', value: 100 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="bg-bg-card border border-border rounded-xl p-5 mb-6 opacity-50 flex items-center justify-center h-40">
        {/* Placeholder for top area chart from screenshot */}
        <span className="text-text-muted text-sm font-medium">Monthly Trends Overview (Minimized)</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Scan Activity */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="mb-6">
            <h3 className="font-semibold text-white">Weekly Scan Activity</h3>
            <p className="text-xs text-text-muted">Volume of patient records processed per day</p>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{ backgroundColor: '#151923', borderColor: '#1e293b', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="scans" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Risk Features */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="mb-6">
            <h3 className="font-semibold text-white">Top Predictive Features</h3>
            <p className="text-xs text-text-muted">Most frequently correlating clinical metrics</p>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={featureData} margin={{ top: 0, right: 0, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{ backgroundColor: '#151923', borderColor: '#1e293b', color: '#fff' }}
                />
                <Bar dataKey="value" fill="#ef4444" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

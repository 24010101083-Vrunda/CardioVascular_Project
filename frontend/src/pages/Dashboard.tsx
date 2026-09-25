import { Search, ShieldAlert, ShieldCheck, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Mon', scans: 700, highRisk: 200, healthy: 500 },
  { name: 'Tue', scans: 1200, highRisk: 300, healthy: 900 },
  { name: 'Wed', scans: 1600, highRisk: 400, healthy: 1200 },
  { name: 'Thu', scans: 1900, highRisk: 500, healthy: 1400 },
  { name: 'Fri', scans: 2200, highRisk: 600, healthy: 1600 },
  { name: 'Sat', scans: 2500, highRisk: 700, healthy: 1800 },
  { name: 'Sun', scans: 2800, highRisk: 800, healthy: 2000 },
];

const pieData = [
  { name: 'Low Risk', value: 75, color: '#10b981' },
  { name: 'High Risk', value: 15, color: '#ef4444' },
  { name: 'Moderate', value: 10, color: '#f59e0b' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Overview</h1>
          <p className="text-sm text-text-muted">Monitor patient analysis activity and Machine Learning detection performance.</p>
        </div>
        <div className="flex items-center space-x-2 bg-bg-card border border-border px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-success"></span>
          <span className="text-xs font-semibold text-success">SYSTEMS OPERATIONAL</span>
          <span className="text-xs text-text-muted ml-2 border-l border-border pl-2">ML Latency: 45ms</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total Scans */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-text-muted">Total Scans</span>
            <div className="p-2 bg-brand/10 rounded-lg"><Search size={16} className="text-brand" /></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">124,592</div>
          <div className="flex items-center text-xs">
            <span className="text-success font-medium">↗ +12.5%</span>
            <span className="text-text-muted ml-1">vs last 30 days</span>
          </div>
        </div>

        {/* High Risk Detected */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-text-muted">High Risk Detected</span>
            <div className="p-2 bg-danger/10 rounded-lg"><ShieldAlert size={16} className="text-danger" /></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">14,205</div>
          <div className="flex items-center text-xs">
            <span className="text-danger font-medium">↘ -2.4%</span>
            <span className="text-text-muted ml-1">vs last 30 days</span>
          </div>
        </div>

        {/* Healthy Patients */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-text-muted">Healthy Patients</span>
            <div className="p-2 bg-success/10 rounded-lg"><ShieldCheck size={16} className="text-success" /></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">108,340</div>
          <div className="flex items-center text-xs">
            <span className="text-success font-medium">↗ +14.2%</span>
            <span className="text-text-muted ml-1">vs last 30 days</span>
          </div>
        </div>

        {/* Model Accuracy */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-medium text-text-muted">Model Accuracy</span>
            <div className="p-2 bg-brand/10 rounded-lg"><Activity size={16} className="text-brand" /></div>
          </div>
          <div className="text-3xl font-bold text-white mb-2">98.4%</div>
          <div className="flex items-center text-xs">
            <span className="text-success font-medium">↗ +0.2%</span>
            <span className="text-text-muted ml-1">vs last 30 days</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Detection Activity Chart */}
        <div className="lg:col-span-2 bg-bg-card border border-border rounded-xl p-5">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-white">Detection Activity</h3>
              <p className="text-xs text-text-muted">Scan volume and classification results over time</p>
            </div>
            <div className="flex space-x-1 text-xs">
              <button className="px-3 py-1 rounded text-text-muted hover:text-white">24H</button>
              <button className="px-3 py-1 rounded text-text-muted hover:text-white">7D</button>
              <button className="px-3 py-1 rounded bg-[#1e293b] text-white">30D</button>
              <button className="px-3 py-1 rounded text-text-muted hover:text-white">90D</button>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorHealthy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" tick={{fill: '#64748b', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#151923', borderColor: '#1e293b', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="healthy" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorHealthy)" />
                <Area type="monotone" dataKey="highRisk" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorRisk)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Distribution */}
        <div className="bg-bg-card border border-border rounded-xl p-5 flex flex-col">
          <div>
            <h3 className="font-semibold text-white">Risk Distribution</h3>
            <p className="text-xs text-text-muted">Overall classification breakdown</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#151923', borderColor: '#1e293b', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

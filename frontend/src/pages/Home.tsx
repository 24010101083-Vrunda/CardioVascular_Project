import { Link } from 'react-router-dom';
import { HeartPulse, Sun, BarChart2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#f8fafc] flex flex-col font-sans">
      {/* Topbar */}
      <header className="h-16 border-b border-[#1e293b] flex items-center justify-between px-8">
        <div className="flex items-center space-x-2 text-brand">
          <HeartPulse size={24} className="fill-[#6366f1] text-[#6366f1]" />
          <span className="text-lg font-bold text-white tracking-wide">CardioGuard AI</span>
        </div>
        
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-[#6366f1]">Home</Link>
          <Link to="/scanner" className="text-[#94a3b8] hover:text-white transition-colors">Scanner</Link>
          <Link to="/dashboard" className="text-[#94a3b8] hover:text-white transition-colors">Dashboard</Link>
          <Link to="/analytics" className="text-[#94a3b8] hover:text-white transition-colors">Analytics</Link>
          <Link to="/insights" className="text-[#94a3b8] hover:text-white transition-colors">Model Insights</Link>
          <Link to="/history" className="text-[#94a3b8] hover:text-white transition-colors">History</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="text-[#94a3b8] hover:text-white transition-colors">
            <Sun size={18} />
          </button>
          <Link to="/scanner" className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            Scan Patient
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1e293b]/50 border border-[#334155] text-xs font-medium text-[#94a3b8] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]"></span>
            <span>Powered by Machine Learning</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
          >
            <span className="text-[#a5b4fc]">Cardiovascular Risk</span><br/>
            <span>Detection System</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mb-10 leading-relaxed"
          >
            AI-powered patient risk analysis that uses Machine Learning to identify cardiovascular diseases based on clinical metrics.<br/><br/>
            Analyze patient records, understand their risk factors, and get an intelligent prediction powered by a trained Machine Learning model.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/scanner" className="w-full sm:w-auto bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#6366f1]/25">
              <span>Scan Patient</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/analytics" className="w-full sm:w-auto bg-transparent border border-[#334155] hover:bg-[#1e293b] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
              <BarChart2 size={18} />
              <span>View Analytics</span>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Search, Layers, BarChart2, 
  Cpu, History, Settings, HeartPulse, Sun, Moon,
  Info, HelpCircle, Activity
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;
  
  const navItemClass = (path: string) => 
    `flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${
      isActive(path) 
        ? 'bg-brand/10 text-brand' 
        : 'text-text-muted hover:bg-bg-card-hover hover:text-text-main'
    }`;

  return (
    <div className="flex h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-200">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-bg-card border-r border-border flex flex-col transition-colors duration-200">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <Link to="/" className="flex items-center space-x-2 text-brand">
            <HeartPulse size={24} className="fill-brand" />
            <span className="text-lg font-bold text-text-main tracking-wide">CardioGuard AI</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-thin">
          <div>
            <h3 className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Main</h3>
            <div className="space-y-1">
              <Link to="/dashboard" className={navItemClass('/dashboard')}>
                <LayoutDashboard size={18} />
                <span>Overview</span>
              </Link>
              <Link to="/scanner" className={navItemClass('/scanner')}>
                <Search size={18} />
                <span>Patient Scanner</span>
              </Link>
              <Link to="/bulk" className={navItemClass('/bulk')}>
                <Layers size={18} />
                <span>Bulk Scanner</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Analysis</h3>
            <div className="space-y-1">
              <Link to="/analytics" className={navItemClass('/analytics')}>
                <BarChart2 size={18} />
                <span>Analytics</span>
              </Link>
              <Link to="/insights" className={navItemClass('/insights')}>
                <Cpu size={18} />
                <span>Model Insights</span>
              </Link>
              <Link to="/accuracy" className={navItemClass('/accuracy')}>
                <Activity size={18} />
                <span>Accuracy Metrics</span>
              </Link>
              <Link to="/history" className={navItemClass('/history')}>
                <History size={18} />
                <span>Scan History</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Help & Support</h3>
            <div className="space-y-1">
              <Link to="/how-it-works" className={navItemClass('/how-it-works')}>
                <Info size={18} />
                <span>How It Works</span>
              </Link>
              <Link to="/faq" className={navItemClass('/faq')}>
                <HelpCircle size={18} />
                <span>FAQ</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">System</h3>
            <div className="space-y-1">
              <Link to="/settings" className={navItemClass('/settings')}>
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-border text-center text-xs text-text-muted">
          v1.0.0
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-bg-card border-b border-border flex items-center justify-between px-8 flex-shrink-0 transition-colors duration-200">
          <nav className="flex space-x-6 text-sm font-medium">
            <Link to="/" className={isActive('/') ? 'text-brand' : 'text-text-muted hover:text-text-main transition-colors'}>Home</Link>
            <Link to="/scanner" className={isActive('/scanner') ? 'text-brand' : 'text-text-muted hover:text-text-main transition-colors'}>Scanner</Link>
            <Link to="/dashboard" className={isActive('/dashboard') ? 'text-brand' : 'text-text-muted hover:text-text-main transition-colors'}>Dashboard</Link>
            <Link to="/analytics" className={isActive('/analytics') ? 'text-brand' : 'text-text-muted hover:text-text-main transition-colors'}>Analytics</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-text-main bg-bg-main rounded-full transition-colors border border-border"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <Link to="/scanner" className="bg-brand hover:bg-brand-hover text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-brand/20">
              Scan Patient
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-bg-main transition-colors duration-200">
          {children}
        </main>
      </div>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Scanner from './pages/Scanner';
import Analytics from './pages/Analytics';
import ModelInsights from './pages/ModelInsights';
import History from './pages/History';
import HowItWorks from './pages/HowItWorks';
import Accuracy from './pages/Accuracy';
import FAQ from './pages/FAQ';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Dashboard Routes with Sidebar Layout */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/scanner" element={<Layout><Scanner /></Layout>} />
        <Route path="/bulk" element={<Layout><Dashboard /></Layout>} />
        <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/insights" element={<Layout><ModelInsights /></Layout>} />
        <Route path="/accuracy" element={<Layout><Accuracy /></Layout>} />
        <Route path="/history" element={<Layout><History /></Layout>} />
        
        <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        
        <Route path="/settings" element={<Layout><Dashboard /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

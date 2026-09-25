import { Search, Filter, ShieldAlert, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Expanded mock data
const historyData = [
  { id: 'PT-10024', name: 'John Doe', prediction: 'Healthy', confidence: '98.7%', riskScore: '3 - Low Risk', model: 'Random Forest', time: '2h ago', status: 'success' },
  { id: 'PT-10025', name: 'Jane Smith', prediction: 'High Risk', confidence: '97.2%', riskScore: '97 - High Risk', model: 'Random Forest', time: '2h ago', status: 'danger' },
  { id: 'PT-10026', name: 'Mike Johnson', prediction: 'Healthy', confidence: '99.5%', riskScore: '2 - Low Risk', model: 'Random Forest', time: '2h ago', status: 'success' },
  { id: 'PT-10027', name: 'Emily Davis', prediction: 'High Risk', confidence: '94.5%', riskScore: '94 - High Risk', model: 'Random Forest', time: '2h ago', status: 'danger' },
  { id: 'PT-10028', name: 'Chris Wilson', prediction: 'Healthy', confidence: '99.1%', riskScore: '4 - Low Risk', model: 'Random Forest', time: '2h ago', status: 'success' },
  { id: 'PT-10029', name: 'Sarah Brown', prediction: 'High Risk', confidence: '96.3%', riskScore: '96 - High Risk', model: 'Random Forest', time: '3h ago', status: 'danger' },
  { id: 'PT-10030', name: 'David Lee', prediction: 'Healthy', confidence: '95.2%', riskScore: '12 - Low Risk', model: 'Logistic Regression', time: '4h ago', status: 'success' },
  { id: 'PT-10031', name: 'Emma Wilson', prediction: 'Average Risk', confidence: '78.1%', riskScore: '45 - Average Risk', model: 'Random Forest', time: '5h ago', status: 'warning' },
  { id: 'PT-10032', name: 'James Taylor', prediction: 'High Risk', confidence: '89.4%', riskScore: '89 - High Risk', model: 'Decision Tree', time: '1d ago', status: 'danger' },
  { id: 'PT-10033', name: 'Olivia Martinez', prediction: 'Healthy', confidence: '92.3%', riskScore: '18 - Low Risk', model: 'Random Forest', time: '1d ago', status: 'success' },
  { id: 'PT-10034', name: 'William Anderson', prediction: 'Average Risk', confidence: '68.5%', riskScore: '52 - Average Risk', model: 'Random Forest', time: '1d ago', status: 'warning' },
  { id: 'PT-10035', name: 'Sophia Thomas', prediction: 'Healthy', confidence: '96.8%', riskScore: '8 - Low Risk', model: 'Random Forest', time: '2d ago', status: 'success' },
  { id: 'PT-10036', name: 'Alexander Jackson', prediction: 'High Risk', confidence: '91.2%', riskScore: '91 - High Risk', model: 'Random Forest', time: '2d ago', status: 'danger' },
  { id: 'PT-10037', name: 'Isabella White', prediction: 'Healthy', confidence: '99.9%', riskScore: '1 - Low Risk', model: 'Logistic Regression', time: '2d ago', status: 'success' },
  { id: 'PT-10038', name: 'Daniel Harris', prediction: 'Healthy', confidence: '93.4%', riskScore: '15 - Low Risk', model: 'Random Forest', time: '3d ago', status: 'success' },
];

const ITEMS_PER_PAGE = 6;

export default function History() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data
  const filteredData = historyData.filter(record => 
    record.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    record.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-main mb-1">Scan History</h1>
          <p className="text-sm text-text-muted">View and filter previous patient analysis records.</p>
        </div>
      </div>

      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between items-center bg-bg-card-hover">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-text-muted" />
            </div>
            <input
              type="text"
              placeholder="Search patients by name or ID..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
              className="w-full pl-9 pr-3 py-2 bg-bg-main border border-border rounded-lg text-sm text-text-main focus:outline-none focus:border-brand transition-colors"
            />
          </div>
          <button className="flex items-center space-x-2 bg-bg-card hover:bg-border border border-border px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto justify-center">
            <Filter size={16} />
            <span>All Predictions</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-bg-card-hover text-xs uppercase text-text-muted font-semibold border-b border-border">
              <tr>
                <th className="px-6 py-4">PATIENT ID</th>
                <th className="px-6 py-4">PREDICTION</th>
                <th className="px-6 py-4">CONFIDENCE</th>
                <th className="px-6 py-4">RISK SCORE</th>
                <th className="px-6 py-4">MODEL</th>
                <th className="px-6 py-4">SCAN TIME</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {currentData.length > 0 ? currentData.map((record, idx) => (
                <tr key={idx} className="hover:bg-bg-card-hover transition-colors">
                  <td className="px-6 py-4 text-text-main font-medium">
                    {record.id} <span className="text-text-muted font-normal ml-2">{record.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {record.status === 'success' ? (
                        <ShieldCheck size={16} className="text-success" />
                      ) : record.status === 'warning' ? (
                        <ShieldAlert size={16} className="text-yellow-500" />
                      ) : (
                        <ShieldAlert size={16} className="text-danger" />
                      )}
                      <span className={`font-medium text-text-main`}>
                        {record.prediction}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-main">{record.confidence}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      record.status === 'success' ? 'bg-success/10 text-success' : 
                      record.status === 'warning' ? 'bg-yellow-500/10 text-yellow-500' : 
                      'bg-danger/10 text-danger'
                    }`}>
                      {record.riskScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-muted">{record.model}</td>
                  <td className="px-6 py-4 text-text-muted">{record.time}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-text-muted">
                    No patients found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {totalPages > 0 && (
          <div className="p-4 border-t border-border flex items-center justify-between bg-bg-card-hover">
            <span className="text-sm text-text-muted">
              Showing <span className="font-medium text-text-main">{startIndex + 1}</span> to <span className="font-medium text-text-main">{Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)}</span> of <span className="font-medium text-text-main">{filteredData.length}</span> results
            </span>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-1 rounded bg-bg-main border border-border text-text-muted hover:text-text-main disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${
                      currentPage === idx + 1 
                        ? 'bg-brand text-white' 
                        : 'bg-bg-main border border-border text-text-muted hover:text-text-main'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-1 rounded bg-bg-main border border-border text-text-muted hover:text-text-main disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

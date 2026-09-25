import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How accurate is the cardiovascular risk prediction?",
    answer: "Our models have been trained on a dataset of 70,000 patient records and cross-validated. The Random Forest model currently achieves an accuracy of approximately 73%, but it's constantly improving. This tool is for preliminary screening and should not replace professional medical advice."
  },
  {
    question: "What does the 'Risk Score' mean?",
    answer: "The risk score is a percentage representing the probability of cardiovascular disease presence based on your clinical inputs. A score below 33% is considered low risk, 33-66% is average, and above 66% is high risk."
  },
  {
    question: "Is my medical data stored securely?",
    answer: "We do not store your medical data permanently unless you explicitly save a scan to the history database. All active predictions are processed statelessly in real-time."
  },
  {
    question: "Which Machine Learning model is the best to use?",
    answer: "By default, we recommend the Random Forest model as it handles complex, non-linear relationships between health metrics better than Logistic Regression or a single Decision Tree."
  },
  {
    question: "Can I use this instead of visiting a doctor?",
    answer: "No. CardioGuard AI is a supplementary tool designed to aid early detection and lifestyle awareness. If the system flags a 'High Risk', you should schedule a consultation with a certified cardiologist immediately."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-brand/10 text-brand rounded-lg">
          <HelpCircle className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-text-main">Frequently Asked Questions</h1>
          <p className="text-text-muted">Everything you need to know about the product and how it works.</p>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="border border-border bg-bg-card rounded-xl overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="font-semibold text-text-main pr-8">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-text-muted transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-48 pb-4 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-text-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

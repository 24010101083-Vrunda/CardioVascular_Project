import { ArrowDown, Database, Cpu, Activity, Stethoscope } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: "1. Data Collection & Input",
      description: "We collect 11 key clinical features including age, gender, height, weight, blood pressure (systolic and diastolic), cholesterol, glucose levels, smoking habits, alcohol consumption, and physical activity.",
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "2. Data Preprocessing",
      description: "The raw data is cleaned and standardized. Categorical values are encoded and numerical features are scaled using standard scaling techniques to ensure our machine learning models interpret all data equally.",
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: <Activity className="w-8 h-8 text-brand" />,
      title: "3. Machine Learning Prediction",
      description: "The processed data is fed into our highly optimized ensemble model (Random Forest, Decision Tree, or Logistic Regression). The model analyzes non-linear relationships to output a precise probability score.",
      color: "bg-brand/10 border-brand/20"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-success" />,
      title: "4. Risk Assessment & Recommendations",
      description: "Based on the calculated probability, the system classifies the cardiovascular risk (Low, Average, High) and generates actionable lifestyle and medical recommendations.",
      color: "bg-success/10 border-success/20"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-text-main mb-4">How CardioGuard AI Works</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Understanding the step-by-step pipeline of how your clinical data is transformed into an accurate cardiovascular risk prediction.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-full p-6 rounded-2xl border ${step.color} bg-bg-card shadow-sm flex items-start space-x-6 transition-transform hover:-translate-y-1`}>
              <div className="p-4 bg-bg-main rounded-xl border border-border shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main mb-2">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
            
            {/* Arrow connecting steps */}
            {index < steps.length - 1 && (
              <div className="py-4 text-border">
                <ArrowDown className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

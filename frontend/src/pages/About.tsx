export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl flex-grow">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">About the Project</h1>
      
      <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        <p>
          CardioAI is a professional-grade machine learning interface designed to assess cardiovascular health risks based on clinical and lifestyle data.
        </p>
        <p>
          This project connects a predictive analytical model (trained on a comprehensive cardiovascular dataset) to a robust React frontend. The application evaluates 11 key metrics, including:
        </p>
        <ul className="list-disc pl-8 space-y-2 font-medium text-black dark:text-white">
          <li>Age and Gender</li>
          <li>Height and Weight (BMI indicators)</li>
          <li>Systolic and Diastolic Blood Pressure</li>
          <li>Cholesterol and Glucose levels</li>
          <li>Lifestyle factors (Smoking, Alcohol, Physical Activity)</li>
        </ul>
        <p className="mt-8">
          The system provides a clear, actionable summary designed strictly for professional usage. All design decisions maintain a focused, minimal aesthetic prioritizing data legibility and clarity through a black, white, and blue visual language.
        </p>
      </div>
    </div>
  );
}

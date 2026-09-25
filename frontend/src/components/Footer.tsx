export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-black dark:text-white font-semibold mb-2">
          &copy; {new Date().getFullYear()} CardioAI Machine Learning Project
        </p>
        <p className="text-sm text-gray-500">
          Professional Cardiovascular Risk Assessment System
        </p>
      </div>
    </footer>
  );
}

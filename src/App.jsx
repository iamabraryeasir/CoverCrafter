import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navbar, Developers } from "./components/index";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ErrorBoundary } from "react-error-boundary";

// Lazy load these components
const CoverPageGenerator = lazy(() =>
  import("./components/CoverPageGenerator")
);
const UserInputForm = lazy(() => import("./components/UserInputForm"));

// Create a loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function ErrorFallback({ error }) {
  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
  const [formData, setFormData] = useLocalStorage("formData", {
    courseTitle: "",
    courseCode: "",
    reportNumber: "",
    reportName: "",
    dateOfSolving: "",
    dateOfSubmission: "",
    nameOfStudent: "",
    studentID: "",
    department: "",
    batch: "",
    semester: "",
    section: "",
    teacherName: "",
    teacherDesignation: "",
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="font-poppins px-3">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <UserInputForm
                    onSubmit={setFormData}
                    formData={formData}
                    setFormData={setFormData}
                  />
                }
              />
              <Route
                path="/cover-page"
                element={<CoverPageGenerator formData={formData} />}
              />
            </Routes>
          </Suspense>
          <Developers />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

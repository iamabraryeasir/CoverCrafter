import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  UserInputForm,
  Developers,
  CoverPageGenerator,
} from "./components/index";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleFormSubmit = (data) => {
    setFormData(data);
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);

    const savedFormData = JSON.parse(localStorage.getItem("formData"));

    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  // Toggle theme and save preference
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <div className="font-poppins px-3">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <UserInputForm
                onSubmit={handleFormSubmit}
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
        <Developers />
      </div>
    </BrowserRouter>
  );
}

export default App;

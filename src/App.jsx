import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  UserInputForm,
  CoverPage,
  Developers,
} from "./components/index";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  // Toggle theme and save preference
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={<UserInputForm onSubmit={handleFormSubmit} />}
          />
          <Route
            path="/cover-page"
            element={<CoverPage formData={formData} />}
          />
        </Routes>
        <Developers />
      </div>
    </BrowserRouter>
  );
}

export default App;

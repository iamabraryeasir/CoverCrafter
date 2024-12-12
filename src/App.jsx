import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  UserInputForm,
  CoverPage,
  Developers,
} from "./components/index";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Navbar />
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

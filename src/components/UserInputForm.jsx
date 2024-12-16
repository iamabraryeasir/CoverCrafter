import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { INPUT_FIELDS } from "../helpers/formFields";

// Firebase Imports
import { collection, addDoc } from "firebase/firestore";
import { db } from "../helpers/firebase";

const UserInputForm = ({ onSubmit, formData, setFormData }) => {
  const inputItemList = INPUT_FIELDS;

  const navigate = useNavigate();

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const isFormValid = useCallback((data) => {
    return Object.values(data).every(
      (value) =>
        value != null &&
        (typeof value === "string" ? value.trim() !== "" : !isNaN(value))
    );
  }, []);

  const sentDbInsights = async () => {
    try {
      const docRef = await addDoc(collection(db, "insights"), {
        batch: formData.batch,
        department: formData.department,
        section: formData.section,
        semester: formData.semester,
        studentName: formData.nameOfStudent,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.log("Error Sending Form Data to Firebase:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sentDbInsights();
    onSubmit(formData);
    navigate("/cover-page");
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleClearInput = () => {
    setFormData({
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
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 font-poppins"
    >
      {inputItemList.map((item) => (
        <InputField
          key={item.key}
          id={item.key}
          label={item.label}
          placeholder={item.placeholder}
          value={formData[item.key]}
          type={item.inputType}
          onChange={(value) => handleInputChange(item.key, value)}
        />
      ))}

      <button
        type="submit"
        disabled={!isFormValid(formData)}
        className={`md:col-span-3 px-4 py-2 rounded-md font-poppins transition-all duration-300 ${
          isFormValid(formData)
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-blue-200 text-blue-400 dark:text-slate-600 cursor-not-allowed hover:bg-blue-200 dark:bg-slate-500"
        }`}
      >
        Generate Cover Page
      </button>

      <button
        type="button"
        onClick={handleClearInput}
        className="md:hidden px-4 py-2 rounded-md bg-red-500/80"
      >
        Clear Input Fields
      </button>
    </form>
  );
};

export default UserInputForm;

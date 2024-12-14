import { useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const UserInputForm = ({ onSubmit }) => {
  const inputItemList = [
    {
      label: "Course Title:",
      placeholder: "Enter course title",
      key: "courseTitle",
      inputType: "text",
    },
    {
      label: "Course Code:",
      placeholder: "Enter course code",
      key: "courseCode",
      inputType: "text",
    },
    {
      label: "Report Number:",
      placeholder: "Enter report number",
      key: "reportNumber",
      inputType: "number",
    },
    {
      label: "Report Name:",
      placeholder: "Enter report name",
      key: "reportName",
      inputType: "text",
    },
    {
      label: "Date of Solving:    ",
      placeholder: "Enter date of solving",
      key: "dateOfSolving",
      inputType: "date",
    },
    {
      label: "Date of Submission:",
      placeholder: "Enter date of submission",
      key: "dateOfSubmission",
      inputType: "date",
    },
    {
      label: "Name of the Student:",
      placeholder: "Enter name of the student",
      key: "nameOfStudent",
      inputType: "text",
    },
    {
      label: "Student ID:",
      placeholder: "Enter student ID",
      key: "studentID",
      inputType: "text",
    },
    {
      label: "Department:",
      placeholder: "Enter department",
      key: "department",
      inputType: "text",
    },
    {
      label: "Batch:",
      placeholder: "Enter batch",
      key: "batch",
      inputType: "text",
    },
    {
      label: "Semester:",
      placeholder: "Enter semester",
      key: "semester",
      inputType: "text",
    },
    {
      label: "Section:",
      placeholder: "Enter section",
      key: "section",
      inputType: "text",
    },
    {
      label: "Teacher Name:",
      placeholder: "Enter teacher name",
      key: "teacherName",
      inputType: "text",
    },
    {
      label: "Teacher Designation:",
      placeholder: "Enter teacher designation",
      key: "teacherDesignation",
      inputType: "text",
    },
  ];

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

  const navigate = useNavigate();

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate("/cover-page");

    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 font-poppins"
    >
      {inputItemList.map((item) => (
        <InputField
          key={item.key}
          label={item.label}
          placeholder={item.placeholder}
          value={formData[item.key]}
          type={item.inputType}
          onChange={(value) => handleInputChange(item.key, value)}
        />
      ))}

      <button
        type="submit"
        disabled={!isFormValid()}
        className={`md:col-span-3 px-4 py-2 rounded-md font-poppins transition-all duration-300 ${
          isFormValid()
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-blue-200 text-blue-400 dark:text-slate-600 cursor-not-allowed hover:bg-blue-200 dark:bg-slate-500"
        }`}
      >
        Generate Cover Page
      </button>
    </form>
  );
};

export default UserInputForm;

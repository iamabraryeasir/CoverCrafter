import React, { useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const UserInputForm = ({ onSubmit }) => {
  const inputItemList = [
    {
      label: "Course Title:",
      placeholder: "Enter course title",
      key: "courseTitle",
    },
    {
      label: "Course Code:",
      placeholder: "Enter course code",
      key: "courseCode",
    },
    {
      label: "Report Number:",
      placeholder: "Enter report number",
      key: "reportNumber",
    },
    {
      label: "Report Name:",
      placeholder: "Enter report name",
      key: "reportName",
    },
    {
      label: "Date of Solving:    ",
      placeholder: "Enter date of solving",
      key: "dateOfSolving",
    },
    {
      label: "Date of Submission:",
      placeholder: "Enter date of submission",
      key: "dateOfSubmission",
    },
    {
      label: "Name of the Student:",
      placeholder: "Enter name of the student",
      key: "nameOfStudent",
    },
    {
      label: "Student ID:",
      placeholder: "Enter student ID",
      key: "studentID",
    },
    {
      label: "Department:",
      placeholder: "Enter department",
      key: "department",
    },
    {
      label: "Batch:",
      placeholder: "Enter batch",
      key: "batch",
    },
    {
      label: "Semester:",
      placeholder: "Enter semester",
      key: "semester",
    },
    {
      label: "Section:",
      placeholder: "Enter section",
      key: "section",
    },
    {
      label: "Teacher Name:",
      placeholder: "Enter teacher name",
      key: "teacherName",
    },
    {
      label: "Teacher Designation:",
      placeholder: "Enter teacher designation",
      key: "teacherDesignation",
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
          onChange={(value) => handleInputChange(item.key, value)}
        />
      ))}

      <button
        type="submit"
        disabled={!isFormValid()}
        className={`md:col-span-3 px-4 py-2 rounded-md font-poppins transition-all duration-300 ${
          isFormValid()
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-blue-200 text-blue-400 cursor-not-allowed hover:bg-blue-200"
        }`}
      >
        Generate Cover Page
      </button>
    </form>
  );
};

export default UserInputForm;

function CoverPage({ formData }) {
  if (!formData) {
    return (
      <div className="max-w-5xl mx-auto p-8 text-center">No data available</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="space-y-4">
        <p>Course Code: {formData.courseCode}</p>
        <p>Report Number: {formData.reportNumber}</p>
        <p>Report Name: {formData.reportName}</p>
        <p>Date of Solving: {formData.dateOfSolving}</p>
        <p>Date of Submission: {formData.dateOfSubmission}</p>
        <p>Student Name: {formData.nameOfStudent}</p>
        <p>Student ID: {formData.studentID}</p>
        <p>Department: {formData.department}</p>
        <p>Batch: {formData.batch}</p>
        <p>Semester: {formData.semester}</p>
        <p>Section: {formData.section}</p>
        <p>Teacher: {formData.teacherName}</p>
        <p>Teacher Designation: {formData.teacherDesignation}</p>
      </div>
      <button
        type="submit"
        disabled={!isFormValid()}
        className="px-4 py-2 rounded-md font-poppins transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600"
      >
        Generate Cover Page
      </button>
    </div>
  );
}

export default CoverPage;

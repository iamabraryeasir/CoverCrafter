function CoverPage({ formData }) {
  if (!formData) {
    return <div>No data available</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        {formData.courseTitle}
      </h1>

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
    </div>
  );
}

export default CoverPage;

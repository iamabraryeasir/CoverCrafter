import {
  Font,
  Text,
  Document,
  Page,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Registering Custom Font
Font.register({
  family: "Poppins",
  fonts: [
    {
      src: "/fonts/Poppins-Regular.ttf",
      fontWeight: 400,
    },
    {
      src: "/fonts/Poppins-SemiBold.ttf",
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  container: {
    padding: "0.35in",
    fontFamily: "Poppins",
  },

  border: {
    border: "2px solid black",
    padding: "0.25in",
  },

  pageTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "semibold",
    fontSize: 25,
  },
});

function CoverPage({ formData }) {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <View style={styles.border}>
            <Text style={styles.pageTitle}>Premier University Chattagram</Text>
            <Text>Course Code: {formData.courseCode}</Text>
            <Text>Report Number: {formData.reportNumber}</Text>
            <Text>Report Name: {formData.reportName}</Text>
            <Text>Date of Solving: {formData.dateOfSolving}</Text>
            <Text>Date of Submission: {formData.dateOfSubmission}</Text>
            <Text>Student Name: {formData.nameOfStudent}</Text>
            <Text>Student ID: {formData.studentID}</Text>
            <Text>Department: {formData.department}</Text>
            <Text>Batch: {formData.batch}</Text>
            <Text>Semester: {formData.semester}</Text>
            <Text>Section: {formData.section}</Text>
            <Text>Teacher: {formData.teacherName}</Text>
            <Text>Teacher Designation: {formData.teacherDesignation}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CoverPage;

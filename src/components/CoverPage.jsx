import {
  Font,
  Text,
  Document,
  Page,
  View,
  StyleSheet,
  Image,
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
      src: "/fonts/Poppins-Medium.ttf",
      fontWeight: 500,
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
    height: "100%",
  },

  pageTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "semibold",
    fontSize: 25,
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  departmentNameOuterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "20px 0",
  },

  departmentNameContainer: {
    border: "1px solid black",
    width: "70%",
    padding: "5px 10px",
  },

  departmentName: {
    textAlign: "center",
    fontSize: 13,
  },

  labReportHeadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },

  labReportHeading: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 17,
  },

  labReportHeadingUnderline: {
    width: "25%",
    borderBottom: "2px solid black",
  },

  reportDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
    gap: "5px",
    marginBottom: "50px",
    marginTop: "20px",
  },

  reportDetailsDataContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
  },

  reportDetailsTitle: {
    width: "40%",
    fontWeight: "medium",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  reportFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    fontSize: 14,
    gap: "10px",
  },

  reportFooterLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    width: "50%",
  },

  reportFooterRight: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    width: "50%",
  },

  reportFooterTitle: {
    paddingLeft: "10px",
    fontWeight: "medium",
  },

  reportFooterDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    border: "1px solid black",
    padding: "10px",
    height: "160px",
    fontSize: 11.5,
  },

  reportFooterDetailsDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "8px",
  },

  reportFooterDetailsDataTitle: {
    width: "35%",
    fontWeight: "medium",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

function CoverPage({ formData }) {
  formData.dateOfSolving = new Date(formData.dateOfSolving);
  formData.dateOfSubmission = new Date(formData.dateOfSubmission);
  return (
    <Document title={`${formData.courseTitle} Cover Page`}>
      <Page size="A4">
        {/* Main Page Container */}
        <View style={styles.container}>
          {/* Page Border */}
          <View style={styles.border}>
            <Text style={styles.pageTitle}>Premier University Chattagram</Text>
            {/* Department Name */}
            <View style={styles.departmentNameOuterContainer}>
              <View style={styles.departmentNameContainer}>
                <Text style={styles.departmentName}>
                  Department of Computer Science and Engineering
                </Text>
              </View>
            </View>

            {/* University Logo */}
            <View style={styles.imageContainer}>
              <Image src="/puc_logo.png" style={{ width: 200 }} />
            </View>

            {/* Lab Report Heading */}
            <View style={styles.labReportHeadingContainer}>
              <Text style={styles.labReportHeading}>Lab Report</Text>
              <View style={styles.labReportHeadingUnderline}></View>
            </View>

            {/* Report Details */}
            <View style={styles.reportDetailsContainer}>
              <View style={styles.reportDetailsDataContainer}>
                <View style={styles.reportDetailsTitle}>
                  <Text>Course Title</Text>
                  <Text>:</Text>
                </View>
                <Text>{formData.courseTitle.trim()}</Text>
              </View>
              <View style={styles.reportDetailsDataContainer}>
                <View style={styles.reportDetailsTitle}>
                  <Text>Course Code</Text>
                  <Text>:</Text>
                </View>
                <Text>{formData.courseCode.trim()}</Text>
              </View>
              <View style={styles.reportDetailsDataContainer}>
                <View style={styles.reportDetailsTitle}>
                  <Text>Report Number</Text>
                  <Text>:</Text>
                </View>
                <Text>{formData.reportNumber.trim()}</Text>
              </View>
              <View style={styles.reportDetailsDataContainer}>
                <View style={styles.reportDetailsTitle}>
                  <Text>Report Name</Text>
                  <Text>:</Text>
                </View>
                <Text>{formData.reportName.trim()}</Text>
              </View>
              <View style={styles.reportDetailsDataContainer}>
                <View style={styles.reportDetailsTitle}>
                  <Text>Date of Solving</Text>
                  <Text>:</Text>
                </View>
                <Text>
                  {formData.dateOfSolving.toLocaleDateString("hi-IN")}
                </Text>
              </View>
              <View style={styles.reportDetailsDataContainer}>
                <View style={styles.reportDetailsTitle}>
                  <Text>Date of Submission</Text>
                  <Text>:</Text>
                </View>
                <Text>
                  {formData.dateOfSubmission.toLocaleDateString("hi-IN")}
                </Text>
              </View>
            </View>

            {/* Report Footer */}
            <View style={styles.reportFooter}>
              <View style={styles.reportFooterLeft}>
                <View style={styles.reportFooterTitle}>
                  <Text>Submitted By: </Text>
                </View>
                <View style={styles.reportFooterDetails}>
                  <View style={styles.reportFooterDetailsDataContainer}>
                    <View style={styles.reportFooterDetailsDataTitle}>
                      <Text>Name</Text>
                      <Text>:</Text>
                    </View>
                    <Text>{formData.nameOfStudent.trim()}</Text>
                  </View>

                  <View style={styles.reportFooterDetailsDataContainer}>
                    <View style={styles.reportFooterDetailsDataTitle}>
                      <Text>Student ID</Text>
                      <Text>:</Text>
                    </View>
                    <Text>{formData.studentID.trim()}</Text>
                  </View>

                  <View style={styles.reportFooterDetailsDataContainer}>
                    <View style={styles.reportFooterDetailsDataTitle}>
                      <Text>Department</Text>
                      <Text>:</Text>
                    </View>
                    <Text>{formData.department.trim()}</Text>
                  </View>

                  <View style={styles.reportFooterDetailsDataContainer}>
                    <View style={styles.reportFooterDetailsDataTitle}>
                      <Text>Batch</Text>
                      <Text>:</Text>
                    </View>
                    <Text>{formData.batch.trim()}</Text>
                  </View>

                  <View style={styles.reportFooterDetailsDataContainer}>
                    <View style={styles.reportFooterDetailsDataTitle}>
                      <Text>Semester</Text>
                      <Text>:</Text>
                    </View>
                    <Text>{formData.semester.trim()}</Text>
                  </View>

                  <View style={styles.reportFooterDetailsDataContainer}>
                    <View style={styles.reportFooterDetailsDataTitle}>
                      <Text>Section</Text>
                      <Text>:</Text>
                    </View>
                    <Text>{formData.section.trim()}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.reportFooterRight}>
                <View style={styles.reportFooterTitle}>
                  <Text>Submitted To: </Text>
                </View>
                <View style={styles.reportFooterDetails}>
                  <Text style={{ fontWeight: "medium" }}>Teacher's Name:</Text>
                  <Text>{formData.teacherName.trim()}</Text>
                  <Text>{formData.teacherDesignation.trim()}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default CoverPage;

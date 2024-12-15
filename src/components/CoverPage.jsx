// CoverPage.jsx
import { memo } from "react";
import PropTypes from "prop-types";
import { Document, Page, View, Text, Image } from "@react-pdf/renderer";
import { styles } from "../helpers/CoverPage.styles";
import { registerFonts } from "../helpers/fonts";

// Register fonts
registerFonts();

// Reusable components
const DetailRow = memo(({ title, value }) => (
  <View style={styles.reportDetailsDataContainer}>
    <View style={styles.reportDetailsTitle}>
      <Text>{title}</Text>
      <Text>:</Text>
    </View>
    <Text
      style={styles.reportDetailsData}
      hyphenationCallback={(word) => [word]}
    >
      {value.trim()}
    </Text>
  </View>
));

const FooterDetailRow = memo(({ title, value }) => (
  <View style={styles.reportFooterDetailsDataContainer}>
    <View style={styles.reportFooterDetailsDataTitle}>
      <Text>{title}</Text>
      <Text>:</Text>
    </View>
    <Text
      style={{ wordBreak: "keep-all" }}
      hyphenationCallback={(word) => [word]}
    >
      {value.trim()}
    </Text>
  </View>
));

const CoverPage = ({ formData }) => {
  const submissionDate = new Date(formData.dateOfSubmission);
  const solvingDate = new Date(formData.dateOfSolving);

  return (
    <Document title={`${formData.courseTitle} Cover Page`}>
      <Page size="A4">
        <View style={styles.container}>
          <View style={styles.border}>
            <Text style={styles.pageTitle}>Premier University Chittagong</Text>

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
              <View style={styles.labReportHeadingUnderline} />
            </View>

            {/* Report Details */}
            <View style={styles.reportDetailsContainer}>
              <DetailRow title="Course Title" value={formData.courseTitle} />
              <DetailRow title="Course Code" value={formData.courseCode} />
              <DetailRow
                title="Report Number"
                value={
                  formData.reportNumber < 10
                    ? `0${formData.reportNumber}`
                    : formData.reportNumber
                }
              />
              <DetailRow title="Report Name" value={formData.reportName} />
              <DetailRow
                title="Date of Solving"
                value={solvingDate.toLocaleDateString("hi-IN")}
              />
              <DetailRow
                title="Date of Submission"
                value={submissionDate.toLocaleDateString("hi-IN")}
              />
            </View>

            {/* Report Footer */}
            <View style={styles.reportFooter}>
              <View style={styles.reportFooterLeft}>
                <View style={styles.reportFooterTitle}>
                  <Text>Submitted By: </Text>
                </View>
                <View style={styles.reportFooterDetails}>
                  <FooterDetailRow
                    title="Name"
                    value={formData.nameOfStudent}
                  />
                  <FooterDetailRow
                    title="Student ID"
                    value={formData.studentID}
                  />
                  <FooterDetailRow
                    title="Department"
                    value={formData.department}
                  />
                  <FooterDetailRow title="Batch" value={formData.batch} />
                  <FooterDetailRow title="Semester" value={formData.semester} />
                  <FooterDetailRow title="Section" value={formData.section} />
                </View>
              </View>

              <View style={styles.reportFooterRight}>
                <View style={styles.reportFooterTitle}>
                  <Text>Submitted To: </Text>
                </View>
                <View style={styles.reportFooterDetails}>
                  <Text style={{ fontWeight: "medium" }}>Teacher's Name:</Text>
                  <Text
                    style={{ wordBreak: "keep-all" }}
                    hyphenationCallback={(word) => [word]}
                  >
                    {formData.teacherName.trim()}
                  </Text>
                  <Text
                    style={{ wordBreak: "keep-all" }}
                    hyphenationCallback={(word) => [word]}
                  >
                    {formData.teacherDesignation.trim()}
                  </Text>
                  <Text style={{ fontWeight: 500, marginTop: 30 }}>
                    Signature: {".".repeat(50)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

CoverPage.propTypes = {
  formData: PropTypes.shape({
    courseTitle: PropTypes.string.isRequired,
    courseCode: PropTypes.string.isRequired,
    reportNumber: PropTypes.string.isRequired,
    reportName: PropTypes.string.isRequired,
    dateOfSolving: PropTypes.string.isRequired,
    dateOfSubmission: PropTypes.string.isRequired,
    nameOfStudent: PropTypes.string.isRequired,
    studentID: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    batch: PropTypes.string.isRequired,
    semester: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    teacherName: PropTypes.string.isRequired,
    teacherDesignation: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(CoverPage);

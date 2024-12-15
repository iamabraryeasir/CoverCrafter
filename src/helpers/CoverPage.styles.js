import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
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
    alignItems: "flex-start",
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

  reportDetailsData: {
    width: "60%",
    wordBreak: "keep-all",
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

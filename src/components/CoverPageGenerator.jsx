import { PDFViewer } from "@react-pdf/renderer";
import CoverPage from "./CoverPage";

function CoverPageGenerator({ formData }) {
  if (!formData) {
    return (
      <div className="max-w-5xl mx-auto p-8 text-center">No data available</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-5">
      <PDFViewer style={{ width: "100%", minHeight: "100vh" }}>
        <CoverPage formData={formData} />
      </PDFViewer>
    </div>
  );
}

export default CoverPageGenerator;

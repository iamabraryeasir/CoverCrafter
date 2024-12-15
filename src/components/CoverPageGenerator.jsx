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
      <div className="md:hidden bg-gray-100 p-4 mb-5 rounded-md text-center dark:bg-slate-700 dark:text-white">
        <h2 className="text-2xl font-semibold text-red-500"> ⚠️ Important! </h2>
        <p>💻 For the best experience, use a desktop.</p>
        <p>
          📱 On mobile? Long press the Open button and tap Download Link to save
          the PDF.
        </p>
      </div>
      <PDFViewer style={{ width: "100%", minHeight: "80vh" }}>
        <CoverPage formData={formData} />
      </PDFViewer>
    </div>
  );
}

export default CoverPageGenerator;

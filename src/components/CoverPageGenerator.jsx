import { PDFViewer } from "@react-pdf/renderer";
import CoverPage from "./CoverPage";
import { memo } from "react";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";

const MobileWarning = () => (
  <div className="md:hidden bg-gray-100 p-4 mb-5 rounded-md text-center dark:bg-slate-700 dark:text-white">
    <h2 className="text-2xl font-semibold text-red-500"> ⚠️ Important! </h2>
    <p>💻 For the best experience, use a desktop.</p>
    <p>
      📱 On mobile? Long press the Open button and tap Download Link to save the
      PDF.
    </p>
  </div>
);

const CoverPageGenerator = memo(({ formData }) => {
  if (!formData) {
    return (
      <div className="max-w-5xl mx-auto p-8 text-center">No data available</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-5">
      <MobileWarning />
      <ErrorBoundary
        fallback={
          <div className="md:hidden bg-gray-100 p-4 mb-5 rounded-md text-center dark:bg-slate-700 dark:text-white">
            <h2 className="text-2xl font-semibold text-red-500">
              ⚠️ Error loading PDF viewer
            </h2>
            <p>Please try again later.</p>
          </div>
        }
      >
        <PDFViewer className="w-full min-h-[80vh]">
          <CoverPage formData={formData} />
        </PDFViewer>
      </ErrorBoundary>
    </div>
  );
});

CoverPageGenerator.propTypes = {
  formData: PropTypes.object,
};

export default CoverPageGenerator;

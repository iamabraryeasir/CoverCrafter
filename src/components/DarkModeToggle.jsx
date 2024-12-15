import PropTypes from "prop-types";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="p-2.5 border rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 transition-colors"
    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
  >
    <img
      src={darkMode ? "/sun.png" : "/night-mode.png"}
      alt={darkMode ? "Sun icon" : "Moon icon"}
      className="w-5 h-5"
      width="20"
      height="20"
    />
  </button>
);

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default DarkModeToggle;

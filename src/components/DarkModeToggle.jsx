const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 m-4 border rounded dark:border-gray-700 dark:bg-gray-800"
    >
      Switch to {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
};

export default DarkModeToggle;

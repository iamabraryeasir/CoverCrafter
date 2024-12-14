const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2.5 border rounded-lg dark:border-gray-700 dark:bg-gray-800"
    >
      <img
        src={darkMode ? "/sun.png" : "/night-mode.png"}
        alt="CoverCrafter"
        className="w-5 h-5"
      />
    </button>
  );
};

export default DarkModeToggle;

const InputField = ({ label, placeholder, onChange, value, type }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md text-center dark:bg-slate-700 dark:text-white">
      <label>
        <span className="text-lg font-semibold">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 rounded-md text-center mt-2 dark:bg-slate-500"
        />
      </label>
    </div>
  );
};

export default InputField;

const InputField = ({ label, placeholder, onChange, value }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md text-center">
      <label>
        <span className="text-lg font-bold">{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 rounded-md text-center mt-2"
        />
      </label>
    </div>
  );
};

export default InputField;

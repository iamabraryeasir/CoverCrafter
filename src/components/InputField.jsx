import PropTypes from 'prop-types';

const InputField = ({ label, placeholder, onChange, value, type, id }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md text-center dark:bg-slate-700 dark:text-white">
      <label htmlFor={id} className="text-lg font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded-md text-center mt-2 dark:bg-slate-500"
        aria-label={label}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default InputField;

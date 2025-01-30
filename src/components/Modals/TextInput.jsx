import PropTypes from "prop-types";

const TextInput = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
}) => (
  <div className="mt-4">
    <label htmlFor={id} className="mb-2 block">
      {label}
    </label>
    <input
      required={true}
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border border-gray-300 p-2 font-mono text-sm"
    />
  </div>
);

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;

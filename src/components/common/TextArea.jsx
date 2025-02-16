import PropTypes from "prop-types";

const TextArea = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 
            ${error ? "border-red-500" : "border-gray-300"}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default TextArea;

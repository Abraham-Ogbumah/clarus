import PropTypes from "prop-types";

const TextArea = ({ label, error, ...props }) => {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-clarus-olive-green text-sm font-semibold mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-clarus-accent-green focus:border-clarus-accent-green transition-all duration-200 resize-vertical text-gray-900 placeholder-gray-500
            ${error ? "border-red-400 bg-red-50" : "border-gray-300 bg-white hover:border-clarus-light-green"}`}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
      )}
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default TextArea;

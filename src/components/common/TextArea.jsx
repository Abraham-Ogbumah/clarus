import PropTypes from "prop-types";

const TextArea = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-clarus-dark text-sm font-medium mb-1.5">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-clarus-accent-green focus:border-clarus-accent-green transition-all duration-200 resize-none text-clarus-dark placeholder-gray-400 text-sm
            ${error ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-clarus-light-green"}`}
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

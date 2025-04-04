import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-clarus-sage-green text-white px-4 py-2 rounded-md hover:bg-clarus-light-green transition-colors border-0",
    secondary:
      "bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50",
    text: "text-teal-600 hover:text-teal-700 underline",
    mobile:
      "w-full mt-2 bg-clarus-sage-green text-white px-4 py-2 rounded-md hover:bg-clarus-light-green transition-colors border-0",
  };

  return (
    <button
      className={`px-4 py-2 rounded-md transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Button;

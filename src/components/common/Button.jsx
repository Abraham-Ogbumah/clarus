import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    secondary:
      "bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50",
    text: "text-teal-600 hover:text-teal-700 underline",
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

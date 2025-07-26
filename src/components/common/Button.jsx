import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  target,
  ...props
}) => {
  const variants = {
    primary:
      "bg-clarus-sage-green text-white px-4 py-2 rounded-md hover:bg-clarus-light-green transition-colors border-0",
    secondary:
      "bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50",
    text: "text-teal-600 no-underline hover:text-clarus-olive-green", // updated variant
    mobile:
      "w-full mt-2 bg-clarus-sage-green text-white px-4 py-2 rounded-md hover:bg-clarus-light-green transition-colors border-0",
  };

  const sharedClasses = `px-4 py-2 rounded-md transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={sharedClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={sharedClasses} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default Button;

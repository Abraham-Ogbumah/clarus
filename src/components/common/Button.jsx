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
      "bg-clarus-sage-green text-white px-4 py-2 rounded-md hover:bg-clarus-accent-green hover:text-white transition-colors border-0",
    secondary:
      "bg-white text-clarus-sage-green border-2 border-clarus-sage-green hover:bg-clarus-accent-green hover:text-white hover:border-clarus-accent-green transition-colors",
    text: "text-clarus-sage-green hover:text-clarus-accent-green underline transition-colors",
    mobile:
      "w-full mt-2 bg-clarus-sage-green text-white px-4 py-2 rounded-md hover:bg-clarus-accent-green hover:text-white transition-colors border-0",
  };

  const baseClasses = `px-4 py-2 rounded-md transition-all duration-300 ${variants[variant]} ${className}`;

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`${baseClasses} inline-block text-center no-underline`}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Otherwise, render as a button
  return (
    <button className={baseClasses} {...props}>
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

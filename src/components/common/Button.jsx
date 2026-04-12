import PropTypes from "prop-types";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  target,
  disabled,
  // Destructure size so it never reaches the DOM element
  ...props
}) => {
  const variants = {
    // Solid accent-green — main CTA
    primary:
      "bg-clarus-accent-green text-white border-0 hover:bg-green-600 shadow-sm hover:shadow-md",
    // White outline — for use on dark backgrounds
    secondary:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-clarus-dark",
    // Accent-green outline — for use on light backgrounds
    outline:
      "bg-transparent text-clarus-accent-green border-2 border-clarus-accent-green hover:bg-clarus-accent-green hover:text-white",
    // Subtle ghost — icon buttons, nav toggles
    ghost:
      "bg-transparent text-clarus-sage-green hover:text-clarus-accent-green border-0 shadow-none",
    // Mobile nav — full-width primary
    mobile:
      "w-full bg-clarus-accent-green text-white border-0 hover:bg-green-600 shadow-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const base = [
    "inline-flex items-center justify-center",
    "font-semibold rounded-full",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-clarus-accent-green focus:ring-offset-2",
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} target={target} className={base} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "ghost",
    "mobile",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;

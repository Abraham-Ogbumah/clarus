import PropTypes from "prop-types";

const NavLink = ({ href, children, isCurrent, isScrolled }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.navigateTo(href);
  };

  const baseText = isScrolled
    ? "text-clarus-dark-grey hover:text-clarus-dark"
    : "text-white hover:text-clarus-lightest";

  const activeText = isScrolled ? "text-clarus-dark" : "text-white";

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
        isCurrent ? activeText : baseText
      }`}
    >
      {children}
      {/* Animated underline indicator */}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-clarus-accent-green rounded-full transition-all duration-300 ${
          isCurrent ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

export default NavLink;

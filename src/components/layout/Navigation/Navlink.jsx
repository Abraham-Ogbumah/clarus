import PropTypes from "prop-types";

const NavLink = ({ href, children, isCurrent }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // Use the window.navigateTo function we defined in Router
    window.navigateTo(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-gray-600 hover:text-teal-600 transition-colors 
        ${isCurrent ? "text-teal-600 font-semibold" : ""}`}
    >
      {children}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isCurrent: PropTypes.bool.isRequired,
};

export default NavLink;

import PropTypes from "prop-types";

const NavLink = ({ href, children, isCurrent }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.navigateTo(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-clarus-light-grey hover:text-clarus-sage-green transition-colors font-semibold
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

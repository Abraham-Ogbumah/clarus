import PropTypes from "prop-types";

const FooterLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // Use the window.navigateTo function we defined in Router
    window.navigateTo(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-white-400 hover:text-clarus-light-grey transition-colors"
    >
      {children}
    </a>
  );
};

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterLink;

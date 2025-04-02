import PropTypes from "prop-types";

const FooterLink = ({ href, children }) => {
  return (
    <a
      href={href}
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

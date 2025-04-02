import PropTypes from "prop-types";

const FooterColumn = ({ logoSrc, logoAlt, children }) => {
  return (
    <div>
      <img src={logoSrc} alt={logoAlt} className="h-8 mb-4 object-contain" />
      {children}
    </div>
  );
};

FooterColumn.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  children: PropTypes.node.isRequired,
};

FooterColumn.defaultProps = {
  logoAlt: "Company Logo",
};

export default FooterColumn;

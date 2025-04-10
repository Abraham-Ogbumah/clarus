import PropTypes from "prop-types";

const PageHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h1 className="text-4xl font-serif mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-clarus-dark-grey">{subtitle}</p>}
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

export default PageHeader;

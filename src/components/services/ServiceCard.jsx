import PropTypes from "prop-types";

const ServiceCard = ({ title, description, icon, duration, format, text }) => {
  return (
    <div className="shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="bg-white p-6 rounded-t-lg mb-2 flex-none h-64 flex flex-col">
        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-xl text-clarus-olive-green font-semibold mb-2 flex-shrink-0">
          {title}
        </h3>
        <p className="text-clarus-dark-grey mb-4 flex-grow">{description}</p>
        <div className="text-sm text-clarus-dark-grey flex-shrink-0">
          {duration && (
            <p>
              <strong>Duration:</strong> {duration}
            </p>
          )}
          {format && (
            <p>
              <strong>Format:</strong> {format}
            </p>
          )}
        </div>
      </div>

      <div className="bg-clarus-olive-green p-6 rounded-b-lg text-white flex-1 h-48 flex items-start">
        <p>{text}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  duration: PropTypes.string,
  format: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ServiceCard;

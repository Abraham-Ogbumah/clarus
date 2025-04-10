import PropTypes from "prop-types";

const ServiceCard = ({ title, description, icon, duration, format, text }) => {
  return (
    <div className="shadow-md hover:shadow-xl transition-all duration-300">
      <div className="bg-white p-6 rounded-t-lg mb-2">
        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl text-clarus-olive-green font-semibold mb-2">
          {title}
        </h3>
        <p className="text-clarus-dark-grey mb-4">{description}</p>
        <div className="text-sm text-clarus-dark-grey">
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

      <div className="bg-clarus-olive-green p-6 rounded-b-lg min-h-48">
        <p>{text}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  duration: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  text: PropTypes.string.iRequired,
};

export default ServiceCard;

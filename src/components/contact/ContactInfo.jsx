import PropTypes from "prop-types";

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-clarus-accent-green bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-clarus-olive-green text-lg mb-1">
          {title}
        </h3>
        <p className="text-clarus-dark-grey whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ContactInfo;

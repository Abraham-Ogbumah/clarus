import PropTypes from "prop-types";

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600">{content}</p>
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

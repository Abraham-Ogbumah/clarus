import PropTypes from "prop-types";

const TestimonialCard = ({ text, author, title }) => {
  return (
    <div className="text-center">
      <blockquote className="text-xl text-gray-600 mb-6">{text}</blockquote>
      <cite className="not-italic">
        <p className="font-medium">{author}</p>
        <p className="text-gray-500">{title}</p>
      </cite>
    </div>
  );
};

TestimonialCard.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TestimonialCard;

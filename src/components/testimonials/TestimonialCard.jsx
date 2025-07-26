import PropTypes from "prop-types";

const QuoteCard = ({ text, author }) => {
  return (
    <div className="text-center">
      <blockquote className="text-xl text-gray-600 mb-6">{text}</blockquote>
      <cite className="not-italic">
        <p className="font-medium">{author}</p>
      </cite>
    </div>
  );
};

QuoteCard.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default QuoteCard;

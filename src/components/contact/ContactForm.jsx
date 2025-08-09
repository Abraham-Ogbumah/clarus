import PropTypes from "prop-types";
import { useState } from "react";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        label="Name *"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        required
      />
      <Input
        label="Email *"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        required
      />
      <Input
        label="Phone (optional)"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
      />
      <TextArea
        label="Message *"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        placeholder="Tell us how we can help you..."
        required
      />
      <Button
        type="submit"
        className="w-full bg-clarus-accent-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 border-0 shadow-md hover:shadow-lg"
      >
        Send Message
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

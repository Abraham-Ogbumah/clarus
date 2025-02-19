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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Phone (optional)"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
      />
      <TextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        required
      />
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

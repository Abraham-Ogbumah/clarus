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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend/email service
      // For now, we'll simulate the submission

      // Example: await sendEmail(formData);

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert(
        "Thank you for your message! We'll get back to you within 24 hours.",
      );

      // Call the onSubmit prop if provided
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (error) {
      alert(
        `There was an ${error} sending your message. Please try again or call us directly.`,
      );
    } finally {
      setIsSubmitting(false);
    }
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
        disabled={isSubmitting}
      />
      <Input
        label="Email *"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        required
        disabled={isSubmitting}
      />
      <Input
        label="Phone (optional)"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        disabled={isSubmitting}
      />
      <TextArea
        label="Message *"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        placeholder="Tell us how we can help you..."
        required
        disabled={isSubmitting}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-clarus-accent-green hover:bg-clarus-accent-green text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 border-0 shadow-md hover:shadow-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;

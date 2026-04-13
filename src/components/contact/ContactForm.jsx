import PropTypes from "prop-types";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitStatus("success");

      if (onSubmit) onSubmit(formData);
    } catch {
      setSubmitStatus("error");
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
      {submitStatus === "success" && (
        <div className="rounded-md bg-green-50 border border-green-200 p-4 text-green-800 text-sm">
          Thank you for your message! We&apos;ll get back to you within 24
          hours.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-800 text-sm">
          Something went wrong sending your message. Please try again or call us
          directly at (613) 899-4918.
        </div>
      )}
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={isSubmitting}
        className="w-full"
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

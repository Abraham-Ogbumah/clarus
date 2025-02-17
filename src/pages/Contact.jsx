import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";
import { Section, PageHeader, Card } from "../components/common";

const ContactPage = () => {
  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Office Location",
      content: "123 Therapy Street, Suite 100\nLos Angeles, CA 90001",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "(555) 123-4567",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "contact@drsarah.com",
    },
  ];

  return (
    <main>
      <Section className="bg-gradient-to-r from-teal-50 to-teal-100">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch to begin your journey to wellness"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card>
            <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
            <ContactForm onSubmit={handleSubmit} />
          </Card>

          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}

            <Card className="mt-8 bg-red-50">
              <h3 className="text-xl font-medium text-red-700 mb-4">
                Emergency Resources
              </h3>
              <ul className="space-y-2 text-red-600">
                <li>National Crisis Line: 988</li>
                <li>Emergency Services: 911</li>
                <li>Local Crisis Center: (555) 555-5555</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;

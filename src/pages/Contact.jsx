import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Section from "../components/common/Section";
import PageHeader from "../components/common/PageHeader";
import Button from "../components/common/Button";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Thank you for your message. We'll get back to you within 24 hours.");
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-clarus-accent-green" />,
      title: "Office Location",
      content: "404 McArthur Ave\nOttawa, ON K1K 1G8",
    },
    {
      icon: <Phone className="w-6 h-6 text-clarus-accent-green" />,
      title: "Phone",
      content: "(438) 308-4595",
    },
    {
      icon: <Mail className="w-6 h-6 text-clarus-accent-green" />,
      title: "Email",
      content: "dorothy@claruspsychotherapy.com",
    },
  ];

  const officeHours = [
    { day: "Monday - Thursday", hours: "9:00 AM - 7:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-clarus-dark-olive overflow-hidden">
        <div className="py-32 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-contain bg-right bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/contact_hero.jpg')" }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-5xl font-serif text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-clarus-lightest mb-8">
                Ready to take the first step? We&apos;re here to support you on
                your journey to wellness.
              </p>
              <Button variant="primary" size="large">
                Book Your Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif text-clarus-olive-green mb-6">
              Send us a Message
            </h2>
            <p className="text-clarus-dark-grey mb-8">
              Fill out the form below and we&apos;ll get back to you within 24
              hours. All communications are confidential.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif text-clarus-olive-green mb-6">
              Contact Information
            </h2>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-clarus-accent-green"
                >
                  <ContactInfo {...info} />
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-clarus-olive-green">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-clarus-accent-green mr-3" />
                <h3 className="text-xl font-semibold text-clarus-olive-green">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-clarus-dark-grey font-medium">
                      {schedule.day}
                    </span>
                    <span className="text-clarus-dark-grey">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Booking */}
            <div className="mt-6 bg-clarus-olive-green text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-clarus-lightest mr-3" />
                <h3 className="text-xl font-semibold">Ready to Book?</h3>
              </div>
              <p className="mb-4 opacity-90">
                Schedule your initial consultation online or give us a call. We
                offer both in-person and virtual sessions.
              </p>
              <Button
                variant="primary"
                className="bg-clarus-accent-green hover:bg-green-600 border-0"
              >
                Book Online
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Location & Directions */}
      <Section className="bg-white">
        <PageHeader
          title="Visit Our Office"
          subtitle="Convenient location in Ottawa with easy access and parking"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-clarus-olive-green mb-4">
              Getting Here
            </h3>
            <div className="space-y-4 text-clarus-dark-grey">
              <p>
                <strong className="text-clarus-olive-green">By Car:</strong>{" "}
                Ample free parking available on-site. We&apos;re easily
                accessible from Highway 417 and Vanier Parkway.
              </p>
              <p>
                <strong className="text-clarus-olive-green">
                  By Public Transit:
                </strong>{" "}
                Multiple OC Transpo routes serve the area. The nearest stop is
                just a 3-minute walk from our office.
              </p>
              <p>
                <strong className="text-clarus-olive-green">
                  Accessibility:
                </strong>{" "}
                Our office is wheelchair accessible with barrier-free entrances
                and washroom facilities.
              </p>
            </div>

            <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-sm border-l-4 border-clarus-accent-green">
              <h4 className="font-semibold text-clarus-olive-green mb-4 text-lg">
                Office Features
              </h4>
              <ul className="space-y-2 text-clarus-dark-grey">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-clarus-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Private, soundproof therapy rooms
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-clarus-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comfortable waiting area
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-clarus-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Free Wi-Fi and refreshments
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-clarus-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Confidential and secure environment
                </li>
              </ul>
            </div>
          </div>

          <div>
            {/* Placeholder for map - you would integrate with Google Maps or similar */}
            <div className="bg-gradient-to-br from-clarus-light-grey to-gray-200 rounded-lg h-80 flex items-center justify-center shadow-md border">
              <div className="text-center text-clarus-dark-grey">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-clarus-accent-green" />
                <p className="font-semibold text-lg">
                  Interactive map would go here
                </p>
                <p className="text-sm mt-2">404 McArthur Ave, Ottawa, ON</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Emergency Resources */}
      <Section className="bg-red-50 border-t-4 border-red-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-red-700 mb-6">
            Crisis &amp; Emergency Resources
          </h2>
          <p className="text-red-600 mb-8 text-lg">
            If you are experiencing a mental health emergency or having thoughts
            of self-harm, please reach out for immediate help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                Crisis Line
              </h3>
              <p className="text-3xl font-bold text-red-600 mb-2">988</p>
              <p className="text-red-600">24/7 National Crisis Line</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                Emergency Services
              </h3>
              <p className="text-3xl font-bold text-red-600 mb-2">911</p>
              <p className="text-red-600">For immediate emergency</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                Local Crisis Support
              </h3>
              <p className="text-lg font-semibold text-red-600 mb-2">
                (613) 722-6914
              </p>
              <p className="text-red-600">Ottawa Crisis Line</p>
            </div>
          </div>

          <p className="mt-8 text-red-600 font-medium">
            Remember: Seeking help is a sign of strength, not weakness. You are
            not alone in this journey.
          </p>
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;

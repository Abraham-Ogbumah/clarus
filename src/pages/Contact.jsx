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

          {/* Content Container - Centered */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-clarus-lightest max-w-3xl mx-auto mb-8">
                Ready to take the first step? We&apos;re here to support you on
                your journey to wellness.
              </p>
              <Button
                variant="primary"
                size="large"
                className="px-8 py-4 text-lg"
              >
                Book Your Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl md:text-3xl font-serif text-clarus-olive-green mb-4 md:mb-6">
              Send us a Message
            </h2>
            <p className="text-clarus-dark-grey mb-6 md:mb-8">
              Fill out the form below and we&apos;ll get back to you within 24
              hours. All communications are confidential.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200 flex-1">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col h-full">
            <h2 className="text-2xl md:text-3xl font-serif text-clarus-olive-green mb-4 md:mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 md:space-y-6 flex-1 flex flex-col">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-clarus-accent-green flex items-center min-h-[80px]"
                >
                  <ContactInfo {...info} />
                </div>
              ))}

              {/* Office Hours */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-clarus-olive-green mt-auto">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-clarus-accent-green mr-3 flex-shrink-0" />
                  <h3 className="text-lg md:text-xl font-semibold text-clarus-olive-green">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-sm md:text-base"
                    >
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
            </div>
          </div>
        </div>

        {/* Quick Booking - Full width below the two columns */}
        <div className="mt-8 md:mt-12 bg-clarus-olive-green text-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 md:w-8 h-6 md:h-8 text-clarus-lightest mr-3" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Ready to Book?
              </h3>
            </div>
            <p className="mb-4 md:mb-6 opacity-90 text-base md:text-lg">
              Schedule your initial consultation online or give us a call. We
              offer both in-person and virtual sessions.
            </p>
            <Button
              variant="primary"
              className="bg-clarus-accent-green hover:bg-green-600 border-0 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
            >
              Book Online
            </Button>
          </div>
        </div>
      </Section>

      {/* Location & Directions */}
      <Section className="bg-white">
        <PageHeader
          title="Visit Our Office"
          subtitle="Convenient location in Ottawa with easy access and parking"
          className="text-clarus-dark-grey"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="h-80 md:h-96 flex flex-col">
            <h3 className="text-xl md:text-2xl font-semibold text-clarus-olive-green mb-4">
              Getting Here
            </h3>
            <div className="space-y-3 md:space-y-4 text-clarus-dark-grey flex-grow">
              <p className="text-sm md:text-base">
                <strong className="text-clarus-olive-green">By Car:</strong>{" "}
                Ample free parking available on-site. We&apos;re easily
                accessible from Highway 417 and Vanier Parkway.
              </p>
              <p className="text-sm md:text-base">
                <strong className="text-clarus-olive-green">
                  By Public Transit:
                </strong>{" "}
                Multiple OC Transpo routes serve the area. The nearest stop is
                just a 3-minute walk from our office.
              </p>
              <p className="text-sm md:text-base">
                <strong className="text-clarus-olive-green">
                  Accessibility:
                </strong>{" "}
                Our office is wheelchair accessible with barrier-free entrances
                and washroom facilities.
              </p>
            </div>

            <div className="mt-4 md:mt-6 p-4 md:p-6 bg-gray-50 rounded-lg shadow-sm border-l-4 border-clarus-accent-green">
              <h4 className="font-semibold text-clarus-olive-green mb-3 md:mb-4 text-base md:text-lg">
                Office Features
              </h4>
              <ul className="space-y-1 md:space-y-2 text-clarus-dark-grey text-sm md:text-base">
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

          <div className="h-80 md:h-96">
            {/* Placeholder for map - you would integrate with Google Maps or similar */}
            <div className="bg-gradient-to-br from-clarus-light-grey to-gray-200 rounded-lg h-full flex items-center justify-center shadow-md border">
              <div className="text-center text-clarus-dark-grey p-4">
                <MapPin className="w-8 md:w-12 h-8 md:h-12 mx-auto mb-2 md:mb-4 text-clarus-accent-green" />
                <p className="font-semibold text-base md:text-lg">
                  Interactive map would go here
                </p>
                <p className="text-xs md:text-sm mt-1 md:mt-2">
                  404 McArthur Ave, Ottawa, ON
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Emergency Resources */}
      <Section className="bg-red-50 border-t-4 border-red-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-red-700 mb-4 md:mb-6">
            Crisis &amp; Emergency Resources
          </h2>
          <p className="text-red-600 mb-6 md:mb-8 text-base md:text-lg">
            If you are experiencing a mental health emergency or having thoughts
            of self-harm, please reach out for immediate help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-red-400">
              <h3 className="text-base md:text-lg font-semibold text-red-700 mb-2">
                Crisis Line
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                988
              </p>
              <p className="text-red-600 text-sm md:text-base">
                24/7 National Crisis Line
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-red-400">
              <h3 className="text-base md:text-lg font-semibold text-red-700 mb-2">
                Emergency Services
              </h3>
              <p className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                911
              </p>
              <p className="text-red-600 text-sm md:text-base">
                For immediate emergency
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-l-4 border-red-400">
              <h3 className="text-base md:text-lg font-semibold text-red-700 mb-2">
                Local Crisis Support
              </h3>
              <p className="text-base md:text-lg font-semibold text-red-600 mb-2">
                (613) 722-6914
              </p>
              <p className="text-red-600 text-sm md:text-base">
                Ottawa Crisis Line
              </p>
            </div>
          </div>

          <p className="mt-6 md:mt-8 text-red-600 font-medium text-sm md:text-base">
            Remember: Seeking help is a sign of strength, not weakness. You are
            not alone in this journey.
          </p>
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;

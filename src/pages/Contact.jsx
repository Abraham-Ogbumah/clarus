import { useEffect } from "react";
import ContactForm from "../components/contact/ContactForm";
import Section from "../components/common/Section";
import Button from "../components/common/Button";
import { Globe, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | Clarus Psychotherapy Ottawa";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.content =
        "Contact Clarus Psychotherapy. Virtual counselling sessions across Ontario. Call (613) 899-4918, email us, or book online today.";
  }, []);

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <Globe className="w-6 h-6 text-clarus-accent-green" />,
      title: "Service Area",
      content: "Virtual Sessions\nAvailable across Canada",
    },
    {
      icon: <Phone className="w-6 h-6 text-clarus-accent-green" />,
      title: "Phone",
      content: "(613) 899-4918",
    },
    {
      icon: <Mail className="w-6 h-6 text-clarus-accent-green" />,
      title: "Email",
      content: "dorothy@claruspsychotherapy.com",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 4:00 PM" },
    { day: "Saturday and Sunday", hours: "Closed" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-clarus-dark-olive overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/home_image.png')" }}
          aria-hidden="true"
        />
        <div className="py-32 relative max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
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
                variant="secondary"
                size="lg"
                href="https://www.gorendezvous.com/en/ClarusCounsellingandPsychotherapy"
              >
                Book Your Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-clarus-lightest py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left — Contact Info panel */}
            <div className="lg:col-span-2 bg-clarus-dark rounded-2xl p-8 flex flex-col gap-6">
              <div>
                <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
                  Reach Out
                </p>
                <h2 className="text-3xl font-serif text-white leading-snug">
                  Contact Information
                </h2>
                <p className="mt-2 text-clarus-light-grey text-sm">
                  We&apos;re here to help. Reach out by phone or email — all
                  sessions are virtual and confidential.
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
                  >
                    <div className="w-10 h-10 bg-clarus-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-clarus-accent-green uppercase tracking-wide mb-0.5">
                        {info.title}
                      </p>
                      <p className="text-white text-sm whitespace-pre-line leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office hours */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-clarus-accent-green flex-shrink-0" />
                  <p className="text-sm font-semibold text-white uppercase tracking-wide">
                    Office Hours
                  </p>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-clarus-light-grey">
                        {schedule.day}
                      </span>
                      <span
                        className={`font-medium ${schedule.hours === "Closed" ? "text-clarus-sage-green" : "text-white"}`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book CTA inside panel */}
              <Button
                variant="primary"
                size="md"
                href="https://www.gorendezvous.com/en/ClarusCounsellingandPsychotherapy"
                className="w-full mt-auto"
              >
                Book Your Session
              </Button>
            </div>

            {/* Right — Form panel */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-clarus-lightest">
              <div className="mb-7">
                <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
                  Get in Touch
                </p>
                <h2 className="text-3xl font-serif text-clarus-dark leading-snug">
                  Send us a Message
                </h2>
                <p className="mt-2 text-clarus-dark-grey text-sm">
                  Fill out the form and we&apos;ll get back to you within 24
                  hours. All communications are confidential.
                </p>
              </div>
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>

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

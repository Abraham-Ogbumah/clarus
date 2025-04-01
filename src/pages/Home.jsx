import Hero from "../components/home/Hero";
import ServiceCard from "../components/services/ServiceCard";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import Section from "../components/common/Section";
import PageHeader from "../components/common/PageHeader";

const HomePage = () => {
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one therapy sessions tailored to your unique needs and goals.",
      icon: "👤",
      duration: "50 minutes",
      format: "In-person or Online",
    },
    {
      title: "Couples Counseling",
      description:
        "Build stronger relationships through improved communication.",
      icon: "👥",
      duration: "75 minutes",
      format: "In-person or Online",
    },
    {
      title: "Online Sessions",
      description:
        "Convenient and secure therapy from the comfort of your home.",
      icon: "💻",
      duration: "50 minutes",
      format: "Video Call",
    },
  ];

  const testimonials = [
    {
      text: "Dr. Mitchell's approach helped me overcome my anxiety and develop better coping mechanisms.",
      author: "Sarah J.",
      title: "Client for 8 months",
    },
    {
      text: "The online sessions are incredibly convenient and effective.",
      author: "Michael R.",
      title: "Client for 1 year",
    },
  ];

  return (
    <main>
      <Hero />

      <Section className="bg-white">
        <PageHeader
          title="Couselling Services"
          subtitle="Discover how we can support your journey to wellness"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <PageHeader
          title="Client Stories"
          subtitle="Hear from people we've helped"
        />
        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section>
    </main>
  );
};

export default HomePage;

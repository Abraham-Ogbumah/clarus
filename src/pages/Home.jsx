import ServiceCard from "../components/services/ServiceCard";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import Section from "../components/common/Section";
import PageHeader from "../components/common/PageHeader";
import Hero from "../components/home/Hero";

const HomePage = () => {
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one therapy sessions tailored to your unique needs and goals.",
      icon: "👤",
      duration: "50 minutes",
      format: "In-person or Online",
      text: "Individual psychotherapy can help release old wounds, address fears, struggles and combat problems before they become bigger issues",
    },
    {
      title: "Couples Therapy",
      description:
        "Build stronger relationships through improved communication.",
      icon: "👥",
      duration: "90 minutes",
      format: "In-person or Online",
      text: "Relationship counseling and therapy for couples are about addressing problems and building a foundation for a stronger, more fulfilling partnership. It's about learning, growing, and finding ways to connect more deeply with each other.",
    },
    {
      title: "Pregnancy and Postpartum",
      description:
        "Hold the space for your emotional well-being during pregnancy and beyond",
      icon: "💻",
      duration: "60 minutes",
      format: "In-person or Online",
      text: "As your perinatal therapist, I will collaborate with you through pregnancy, birth, and postpartum wellness plans",
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
          title="About Me"
          subtitle="Discover how we can support your journey to wellness"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      <Section className="bg-clarus-light-grey">
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

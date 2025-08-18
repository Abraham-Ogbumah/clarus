import ServiceCard from "../components/services/ServiceCard";
import Section from "../components/common/Section";
import PageHeader from "../components/common/PageHeader";
import Hero from "../components/home/Hero";
import AboutCard from "../components/about/AboutCard";

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
      text: "Relationship counselling and therapy for couples are about addressing problems and building a foundation for a stronger, more fulfilling partnership. It's about learning, growing, and finding ways to connect more deeply with each other.",
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
    {
      title: "Workshops and Group Facilitation",
      description: "Creating Safe, Supportive Spaces for Growth and Connection",
      icon: "💻",
      duration: "240 minutes",
      format: "In-person or Online",
      text: "A workshop designed to help participants understand Trauma , and how it reflects in their lives and impacts their relationship with  loved ones using therapeutic tools",
    },
    {
      title: "Immigration and Refugee Support",
      description:
        "Culturally sensitive therapy for immigration-related stress and adjustment.",
      icon: "🌍",
      duration: "50 minutes",
      format: "In-person or Online",
      text: "Navigate the emotional challenges of immigration, cultural adjustment, identity formation, and family dynamics. I understand the unique stressors faced by newcomers and provide culturally responsive care.",
    },
  ];

  return (
    <main>
      <Hero />

      {/* Hope Section - New stylish section */}
      <Section className="bg-gradient-to-br from-clarus-olive-green to-clarus-dark-olive text-white">
        <div className="max-w-4xl mx-auto text-center py-8">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Hope isn&apos;t gone—it&apos;s just waiting to be found. Let&apos;s
            look for it, side by side.
          </h2>
          <p className="text-xl md:text-2xl italic opacity-90">
            This is your safe space for healing and rediscovery.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <AboutCard
          title="Your Journey Starts Here"
          description="At Clarus Psychotherapy, we're here to walk alongside you through life's ups, downs, and everything in between. Whether you're navigating anxiety, addiction, depression, relationship struggles, prenatal distress, or major life transitions, you don't have to do it alone. We support individuals, couples, and families from all walks of life—including those facing the unique challenges of immigration-related stress and trauma. With over seven years of experience, we use proven, evidence-based approaches like Cognitive Behavioural Therapy (CBT), Solution-Focused Therapy, Narrative Therapy, and the Gottman Method to help you tap into your strengths and move forward with clarity and confidence. Rooted in a trauma-informed and deeply empathetic approach, Clarus Psychotherapy offers a safe, welcoming, and non-judgmental space for healing, growth, and meaningful change. Let's take the next step—together."
          imageSrc="./Golden_Morning.png"
        />
      </Section>

      <Section className="bg-clarus-light-grey">
        <PageHeader
          title="Counselling Services"
          subtitle="Discover how we can support your journey to wellness"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* <Section className="bg-white">
        <PageHeader
          title="Client Stories"
          subtitle="Hear from people we've helped"
          className="text-clarus-dark-grey"
        />
        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Section> */}
    </main>
  );
};

export default HomePage;

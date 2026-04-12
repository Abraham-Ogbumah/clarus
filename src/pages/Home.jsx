import { useEffect } from "react";
import { User, Users, Heart, BookOpen, Globe } from "lucide-react";
import Section from "../components/common/Section";
import Hero from "../components/home/Hero";
import HomeServiceCard from "../components/home/HomeServiceCard";
import AboutCard from "../components/about/AboutCard";

const HomePage = () => {
  useEffect(() => {
    document.title =
      "Clarus Psychotherapy | Ottawa Counselling & Mental Health Support";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.content =
        "Clarus Psychotherapy offers trauma-informed individual, couples, and family counselling in Ottawa, ON. Book your free consultation today.";
  }, []);
  const services = [
    {
      title: "Individual Therapy",
      description:
        "One-on-one sessions to release old wounds, address fears, and build resilience at your own pace.",
      text: "Individual psychotherapy can help release old wounds, address fears, struggles and combat problems before they become bigger issues.",
      icon: User,
      duration: "50 min",
    },
    {
      title: "Couples Therapy",
      description:
        "Rebuild communication and deepen connection through evidence-based relationship counselling.",
      text: "Relationship counselling and therapy for couples are about addressing problems and building a foundation for a stronger, more fulfilling partnership. It's about learning, growing, and finding ways to connect more deeply with each other.",
      icon: Users,
      duration: "90 min",
    },
    {
      title: "Pregnancy & Postpartum",
      description:
        "Compassionate support through every stage of the perinatal journey — from bump to beyond.",
      text: "As your perinatal therapist, I will collaborate with you through pregnancy, birth, and postpartum wellness plans.",
      icon: Heart,
      duration: "60 min",
    },
    {
      title: "Workshops & Group",
      description:
        "Safe, facilitated group spaces for understanding trauma and building meaningful connection.",
      text: "A workshop designed to help participants understand trauma, and how it reflects in their lives and impacts their relationship with loved ones using therapeutic tools.",
      icon: BookOpen,
      duration: "4 hrs",
    },
    {
      title: "Immigration Support",
      description:
        "Culturally responsive care for newcomers navigating identity, adjustment, and family stress.",
      text: "Navigate the emotional challenges of immigration, cultural adjustment, identity formation, and family dynamics. I understand the unique stressors faced by newcomers and provide culturally responsive care.",
      icon: Globe,
      duration: "50 min",
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
          subtitle="Rooted in Empathy"
          description="At Clarus Psychotherapy, we're here to walk alongside you through life's ups, downs, and everything in between. Whether you're navigating anxiety, addiction, depression, relationship struggles, prenatal distress, or major life transitions, you don't have to do it alone. We support individuals, couples, and families from all walks of life—including those facing the unique challenges of immigration-related stress and trauma. With over seven years of experience, we use proven, evidence-based approaches like Cognitive Behavioural Therapy (CBT), Solution-Focused Therapy, Narrative Therapy, and the Gottman Method to help you tap into your strengths and move forward with clarity and confidence. Rooted in a trauma-informed and deeply empathetic approach, Clarus Psychotherapy offers a safe, welcoming, and non-judgmental space for healing, growth, and meaningful change. Let's take the next step—together."
          ctaText="Learn more about our approach →"
          imageSrc="/Golden_Morning.png"
        />
      </Section>

      {/* Counselling Services */}
      <section className="bg-clarus-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-clarus-accent-green text-xs font-semibold uppercase tracking-widest mb-3">
                What We Offer
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Counselling Services
              </h2>
              <p className="mt-3 text-clarus-light-grey max-w-md">
                Discover how we can support your journey to wellness.
              </p>
            </div>
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                window.navigateTo("/services");
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-clarus-lightest border border-clarus-sage-green px-5 py-2.5 rounded-full hover:bg-clarus-sage-green hover:text-white transition-all duration-200 whitespace-nowrap self-start md:self-auto"
            >
              View all services &rarr;
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <HomeServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

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

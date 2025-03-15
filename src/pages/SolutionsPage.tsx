
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Heart, Shield, Link2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SolutionsPage: React.FC = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      id: 'care-manager',
      title: 'Care Manager',
      description: 'Comprehensive care coordination platform that centralizes health data, care plans, and provider communication to ensure holistic care delivery.',
      icon: Heart,
      color: 'bg-pink-100 text-pink-600',
      buttonText: 'Learn More',
      link: '/care-manager'
    },
    {
      id: 'safety-monitor',
      title: 'Safety Monitor',
      description: 'Advanced monitoring system with fall detection, emergency alerts, and activity tracking to ensure client safety and provide peace of mind.',
      icon: Shield,
      color: 'bg-blue-100 text-blue-600',
      buttonText: 'Learn More',
      link: '/safety-monitor'
    },
    {
      id: 'connect-hub',
      title: 'Connect Hub',
      description: 'Communication platform that connects clients with caregivers, family members, and healthcare providers through secure messaging and video calls.',
      icon: Link2,
      color: 'bg-purple-100 text-purple-600',
      buttonText: 'Learn More',
      link: '/connect-hub'
    },
    {
      id: 'shop-gateway',
      title: 'Shop Gateway',
      description: 'Marketplace for healthcare products, devices, and subscription services tailored to client needs and integrated with care plans.',
      icon: ShoppingCart,
      color: 'bg-green-100 text-green-600',
      buttonText: 'Learn More',
      link: '/shop-gateway'
    }
  ];

  return (
    <>
      <NavBar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-mcn-gray-light to-white py-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              Comprehensive Healthcare Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Mobile Care Nexus provides a comprehensive suite of integrated solutions designed to enhance healthcare delivery, improve client outcomes, and streamline operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="#solutions-overview">
                <Button size="lg" className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                  Explore Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-mcn-blue text-mcn-blue hover:bg-mcn-blue/10">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section id="solutions-overview" className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Integrated Healthcare Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each solution is designed to work seamlessly together or independently, creating a flexible ecosystem that adapts to your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution) => (
                <div key={solution.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                  <div className={`${solution.color} w-12 h-12 rounded-full flex items-center justify-center mb-6`}>
                    <solution.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <Link to={solution.link}>
                    <Button variant="ghost" className="text-mcn-blue hover:bg-mcn-blue/10 p-0 h-auto">
                      {solution.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="bg-mcn-gray-light py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Better Together</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                When our solutions work together, they create a powerful ecosystem that delivers exceptional care and operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Seamless Data Flow</h3>
                <p className="text-muted-foreground">
                  Information moves effortlessly between solutions, eliminating data silos and ensuring everyone has access to the information they need.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Consistent Experience</h3>
                <p className="text-muted-foreground">
                  Clients, caregivers, and administrators enjoy a unified interface that's intuitive and consistent across all services.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Intelligent Insights</h3>
                <p className="text-muted-foreground">
                  Cross-platform analytics provide deeper insights into client needs, operational efficiency, and opportunities for care improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Transform Your Healthcare Delivery?</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              Contact our team to learn how MCN's integrated solutions can enhance your organization's healthcare services and improve client outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-mcn-blue hover:bg-mcn-blue-dark text-white">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/enterprise">
                <Button size="lg" variant="outline" className="border-mcn-blue text-mcn-blue hover:bg-mcn-blue/10">
                  Enterprise Solutions
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SolutionsPage;

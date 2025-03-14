
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  MessageSquare, 
  Video, 
  Activity, 
  Bell, 
  Shield, 
  LifeBuoy, 
  User,
  Phone,
  PieChart,
  Upload,
  Download,
  Clock,
  Headphones,
  Heart,
  LucideIcon
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-3 mb-6">
    <div className="mt-1 w-7 h-7 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-medium mb-1">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

interface DetailCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const DetailCategory: React.FC<DetailCategoryProps> = ({ title, description, icon, children }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue">
        {icon}
      </div>
      <h2 className="text-2xl font-display font-bold">{title}</h2>
    </div>
    <p className="text-muted-foreground mb-8 max-w-3xl">{description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      {children}
    </div>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, value }) => (
  <AccordionItem value={value}>
    <AccordionTrigger className="text-left">
      {question}
    </AccordionTrigger>
    <AccordionContent>
      <p className="text-muted-foreground">{answer}</p>
    </AccordionContent>
  </AccordionItem>
);

const hardwareProducts = [
  {
    icon: <Headphones size={16} />,
    title: "BBrain Voice Assistant Device",
    description: "A sleek, intuitive voice-controlled assistant designed specifically for older adults, with simplified commands and clear responses. It can control smart home features, make calls, set reminders, and access information hands-free."
  },
  {
    icon: <Bell size={16} />,
    title: "Safety Monitoring Sensors",
    description: "Discreet sensors that detect movement patterns throughout the home, creating a safety net that can alert caregivers to unusual changes in routine without invasive cameras. The system learns normal patterns and only sends alerts when something seems amiss."
  },
  {
    icon: <Activity size={16} />,
    title: "Wearable Health Tracker",
    description: "An elegant, comfortable wearable designed with older adults in mind. Tracks heart rate, steps, sleep quality, and fall detection. Features large, easy-to-read displays and extended battery life for less frequent charging."
  },
  {
    icon: <Shield size={16} />,
    title: "Emergency Alert Button",
    description: "A wearable button that can be pressed in case of emergency, immediately alerting designated contacts and providing location information. Water-resistant and with a battery life of up to one month for peace of mind."
  },
  {
    icon: <Clock size={16} />,
    title: "Smart Medication Dispenser",
    description: "An automated dispenser that provides medication at pre-programmed times, with audible and visible reminders. Sends alerts to caregivers if medications are missed, and provides an easy way to track medication adherence."
  },
  {
    icon: <User size={16} />,
    title: "Home Automation Controls",
    description: "Simplified controls for lights, thermostats, door locks, and other smart home features. Designed with large buttons and intuitive interfaces specifically for older adults, with voice control capabilities through BBrain integration."
  },
  {
    icon: <Heart size={16} />,
    title: "Digital Photo Frame",
    description: "A high-resolution digital frame that family members can update remotely with new photos. Helps maintain connections with loved ones and provides familiar, comforting imagery that can be updated regularly without technical knowledge."
  }
];

const softwareServices = [
  {
    icon: <Calendar size={16} />,
    title: "Care Manager",
    description: "A comprehensive task tracking system that helps manage medications, appointments, and daily activities. Features include custom schedules, recurring reminders, and the ability for caregivers to remotely add and monitor tasks."
  },
  {
    icon: <Shield size={16} />,
    title: "Safety Monitor (Advanced)",
    description: "Our advanced safety monitoring system uses machine learning to understand normal daily patterns and can detect subtle changes that might indicate problems. Customizable alerts can be sent to designated contacts through various channels."
  },
  {
    icon: <Activity size={16} />,
    title: "Health View (Full Integration)",
    description: "A complete health dashboard that integrates data from wearables, manual entries, and healthcare providers. Visualizes trends over time, provides insights, and makes it easy to share information with healthcare professionals."
  },
  {
    icon: <Video size={16} />,
    title: "Connect Hub",
    description: "Our video calling platform designed specifically for ease of use. Features include one-touch calls to favorites, high-quality audio optimized for hearing aid compatibility, and the ability to share health information during calls with healthcare providers."
  },
  {
    icon: <MessageSquare size={16} />,
    title: "BBrain Voice Integration",
    description: "Advanced voice recognition technology that understands natural language and can control all aspects of the MCN system. Specially trained to understand different accents and speech patterns common among older adults."
  },
  {
    icon: <Upload size={16} />,
    title: "Provider Connectivity",
    description: "Secure connections to healthcare providers that allow for sharing of health data, virtual appointments, and direct communication. Includes integration with major electronic health record systems for seamless information exchange."
  },
  {
    icon: <LifeBuoy size={16} />,
    title: "Remote Setup Assistance",
    description: "Our team provides personalized assistance setting up all devices and services, either virtually or in-person depending on location. We ensure everything is working properly and that users are comfortable with all features before considering setup complete."
  },
  {
    icon: <Phone size={16} />,
    title: "24/7 Technical Support",
    description: "Around-the-clock support from specialists trained to work with older adults. Support is available through multiple channels including phone, video call, and in-app messaging, ensuring help is always available when needed."
  }
];

const testimonials = [
  {
    name: "Maria T.",
    age: 73,
    quote: "MCN has given me back my independence. My children don't need to call to check if I've taken my medication anymore, and I've actually gotten better at managing my health because the app makes it so easy to track everything."
  },
  {
    name: "Robert K.",
    age: 68,
    quote: "The voice assistant is my favorite part. I can just ask it to call my son or remind me about my doctor's appointment next week. It's like having a helpful companion in the house who never gets tired of my questions."
  },
  {
    name: "Helen M.",
    age: 79,
    quote: "I was afraid of technology, but MCN is so simple to use. The reminders help me stay on track with my medications, and I feel safer knowing that someone will be alerted if I don't follow my usual routine."
  }
];

const faqItems = [
  {
    question: "Is training included with the membership?",
    answer: "Yes, all Full Memberships include comprehensive training tailored to your comfort level with technology. We offer both in-person and virtual training options, and our specialists will ensure you're comfortable with all features before considering setup complete.",
    value: "item-1"
  },
  {
    question: "Can I choose which hardware products I want?",
    answer: "Absolutely. Our Full Membership allows you to select up to 5 hardware products that best fit your needs and living situation. Our team can help assess which products would be most beneficial for your specific circumstances.",
    value: "item-2"
  },
  {
    question: "What happens if a device breaks or malfunctions?",
    answer: "Our membership includes full warranty coverage for all hardware products. If any device malfunctions, we'll repair or replace it at no additional cost. Simply contact our support team, and we'll arrange for service or replacement as quickly as possible.",
    value: "item-3"
  },
  {
    question: "How is my privacy protected?",
    answer: "MCN takes privacy extremely seriously. All data is encrypted end-to-end, and you have complete control over who can access your information. Safety sensors detect movement patterns but don't record video or audio. You can review and delete your data at any time through the privacy settings.",
    value: "item-4"
  },
  {
    question: "Can family members access my information?",
    answer: "Only if you explicitly grant them permission. You control exactly what information is shared, with whom, and for how long. You can revoke access at any time through the privacy settings in your account.",
    value: "item-5"
  },
  {
    question: "Is there an installation fee?",
    answer: "No, professional installation and setup of all hardware products is included in your membership. Our technicians will ensure everything is working properly and take the time to show you how to use each device.",
    value: "item-6"
  }
];

const MembershipDetailsPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-[50%] h-[90%] bg-mcn-blue/5 rounded-l-[100px] transform -translate-y-[20%]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mb-12">
              <Link to="/clients" className="inline-flex items-center text-mcn-blue hover:underline mb-4">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Clients Page
              </Link>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
                Full Membership Details
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Our comprehensive membership includes everything you need for enhanced independent living, with seamless integration between hardware and software components.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 mb-16">
              <div className="lg:w-2/3">
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="text-3xl font-bold mb-1">€100<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                    <CardTitle className="text-2xl">Full Membership</CardTitle>
                    <CardDescription>Complete care solution</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <p className="mb-6">Our Full Membership provides a comprehensive suite of hardware and software solutions designed to enhance independent living while maintaining connections with loved ones and healthcare providers.</p>
                    
                    <div className="mb-8">
                      <h3 className="font-medium text-lg mb-3">Membership includes:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Choice of up to 5 hardware products</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>All software services included</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Professional installation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Personalized training</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>24/7 technical support</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Full warranty coverage</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Regular software updates</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Family access for one member</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-mcn-blue/5 p-4 rounded-lg border border-mcn-blue/10">
                      <h4 className="font-medium mb-2">Family Access Add-On</h4>
                      <p className="text-muted-foreground mb-2">Add additional family members for €10/month each:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Monitor health and activity with proper permissions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Access to family dashboard and coordination tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                          <span>Priority video calling and messaging</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full justify-center bg-mcn-blue hover:bg-mcn-blue-dark">
                      <Link to="/signup?plan=membership">
                        Sign Up for Full Membership
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="lg:w-1/3">
                <Card className="mb-6 glass-card border-t-4 border-mcn-blue">
                  <CardHeader>
                    <CardTitle>Why Choose MCN?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                        <span><strong>Integrated System:</strong> All components work seamlessly together for a cohesive experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                        <span><strong>Designed for Seniors:</strong> Every feature is developed with older adults in mind</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                        <span><strong>Privacy-Focused:</strong> You control who sees your information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                        <span><strong>No Long-Term Contract:</strong> Month-to-month membership with no obligations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                        <span><strong>Personalized Support:</strong> Trained specialists who understand senior needs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Ready to get started?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Our team makes the setup process simple:</p>
                    <ol className="space-y-3 list-decimal pl-5">
                      <li>Schedule a free consultation</li>
                      <li>Select your hardware products</li>
                      <li>Professional installation at your home</li>
                      <li>Personalized training session</li>
                      <li>Regular check-ins to ensure satisfaction</li>
                    </ol>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full justify-center">
                      <Link to="/contact">
                        Schedule Free Consultation
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            
            <DetailCategory 
              title="Hardware Products" 
              description="Choose up to 5 hardware products as part of your Full Membership. Each device is designed specifically for ease of use by older adults, with simplified interfaces and seamless integration with the MCN platform."
              icon={<Activity size={20} />}
            >
              {hardwareProducts.map((product, index) => (
                <FeatureItem 
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                />
              ))}
            </DetailCategory>
            
            <DetailCategory 
              title="Software Services" 
              description="All software services are included with your Full Membership. These digital tools work together to create a comprehensive system for managing health, safety, and social connections."
              icon={<PieChart size={20} />}
            >
              {softwareServices.map((service, index) => (
                <FeatureItem 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </DetailCategory>
            
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-8">What Our Members Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="glass-card">
                    <CardContent className="pt-6">
                      <blockquote className="italic text-muted-foreground mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <footer className="text-sm font-medium">
                        — {testimonial.name}, {testimonial.age}
                      </footer>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq) => (
                  <FAQItem 
                    key={faq.value}
                    question={faq.question}
                    answer={faq.answer}
                    value={faq.value}
                  />
                ))}
              </Accordion>
            </div>
            
            <div className="bg-mcn-gray-light p-8 md:p-12 rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Ready to enhance your independent living?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied members who are enjoying greater independence, safety, and connection with MCN's Full Membership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup?plan=membership" className="primary-button flex items-center justify-center">
                  Sign Up Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="outline-button flex items-center justify-center">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MembershipDetailsPage;

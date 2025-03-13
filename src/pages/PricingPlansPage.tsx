
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Link, useParams } from 'react-router-dom';
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
  Users,
  Phone,
  PieChart,
  Upload,
  Download,
  Clock,
  Headphones
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
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
  <div className="flex items-start gap-3 mb-4">
    <div className="mt-1 w-7 h-7 rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-medium mb-1">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
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

const basicFeatures = [
  {
    icon: <Calendar size={16} />,
    title: "Care Manager",
    description: "A simple task tracking system that helps you manage your medications, appointments, and daily activities."
  },
  {
    icon: <Shield size={16} />,
    title: "Safety Monitor (Basic)",
    description: "Entry-level safety monitoring that tracks basic activity patterns and can alert designated contacts if unusual patterns are detected."
  },
  {
    icon: <Activity size={16} />,
    title: "Health View (Manual Entries)",
    description: "Record health metrics like blood pressure, weight, and medication intake manually, with simple visualizations to track progress."
  },
  {
    icon: <Bell size={16} />,
    title: "Reminders",
    description: "Set up simple reminders for medications, appointments, and other important events through text notifications."
  },
  {
    icon: <MessageSquare size={16} />,
    title: "Text Messaging",
    description: "Basic text messaging capabilities to communicate with care team members and family directly through the MCN app."
  }
];

const premiumFeatures = [
  {
    icon: <Check size={16} />,
    title: "All Basic Features",
    description: "Includes all features from the Basic plan: Care Manager, basic Safety Monitor, Health View with manual entries, reminders, and text messaging."
  },
  {
    icon: <Video size={16} />,
    title: "Connect Hub",
    description: "Unlimited high-quality video calls with family members and healthcare providers, with easy-to-use interface designed for all comfort levels."
  },
  {
    icon: <Headphones size={16} />,
    title: "BBrain Voice Integration",
    description: "Advanced voice-activated assistance for controlling your MCN experience, setting reminders, making calls, and accessing information hands-free."
  },
  {
    icon: <Activity size={16} />,
    title: "Wearable Device Integration",
    description: "Connect popular fitness trackers and smartwatches to automatically record health metrics, activity levels, and sleep patterns."
  },
  {
    icon: <Shield size={16} />,
    title: "Enhanced Safety Monitoring",
    description: "More sophisticated monitoring algorithms that can detect more subtle changes in patterns and provide earlier alerts to caregivers."
  },
  {
    icon: <PieChart size={16} />,
    title: "Advanced Health Analytics",
    description: "Detailed health trend analysis showing correlations between different health metrics, with personalized insights and recommendations."
  },
  {
    icon: <Upload size={16} />,
    title: "Provider Connectivity",
    description: "Securely share health data with healthcare providers through encrypted connections, and receive feedback directly through the app."
  }
];

const familyFeatures = [
  {
    icon: <Check size={16} />,
    title: "All Premium Features",
    description: "Includes all features from the Premium plan: Care Manager, Enhanced Safety Monitor, Connect Hub, BBrain integration, wearable connectivity, and more."
  },
  {
    icon: <Users size={16} />,
    title: "Multiple Family Accounts",
    description: "Create up to 5 connected family member accounts, each with their own personalized experience and privacy settings."
  },
  {
    icon: <PieChart size={16} />,
    title: "Family Dashboard",
    description: "A centralized view showing important information for all family members, with customizable privacy filters to respect each person's preferences."
  },
  {
    icon: <Clock size={16} />,
    title: "Coordinated Care Calendar",
    description: "Shared family calendar for coordinating appointments, medication schedules, and care visits across family members."
  },
  {
    icon: <Shield size={16} />,
    title: "Enhanced Security Features",
    description: "Additional security layers including biometric authentication, advanced encryption, and detailed access controls for sensitive information."
  },
  {
    icon: <Phone size={16} />,
    title: "Priority Support",
    description: "24/7 dedicated support access with minimal wait times, including phone support and personal setup assistance when needed."
  },
  {
    icon: <Download size={16} />,
    title: "Data Export Tools",
    description: "Comprehensive data export capabilities for medical records, health trends, and activity logs in various formats suitable for healthcare providers."
  },
  {
    icon: <LifeBuoy size={16} />,
    title: "Remote Setup Assistance",
    description: "Personalized setup assistance from MCN specialists who can help configure the system for your family's specific needs."
  }
];

const faqItems = [
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. Your subscription will be prorated, so you'll only pay the difference between your current plan and the new one for the remainder of your billing cycle.",
    value: "item-1"
  },
  {
    question: "Is there a contract or minimum commitment?",
    answer: "No, all MCN plans are month-to-month with no long-term contract required. You can cancel anytime, though we do offer discounts for annual payment options.",
    value: "item-2"
  },
  {
    question: "What devices are compatible with MCN?",
    answer: "MCN works on most modern smartphones (iOS 12+ and Android 8+), tablets, and computers with a web browser. The Premium and Family plans support integration with popular wearables like Apple Watch, Fitbit, and Samsung Galaxy watches.",
    value: "item-3"
  },
  {
    question: "How secure is my health data?",
    answer: "MCN employs enterprise-grade encryption for all data storage and transmission. We comply with GDPR and HIPAA standards for health information. You control who has access to your information through detailed privacy settings.",
    value: "item-4"
  },
  {
    question: "Can healthcare providers access my information?",
    answer: "Only if you explicitly grant them permission. MCN lets you control exactly what information is shared, with whom, and for how long. You can revoke access at any time.",
    value: "item-5"
  },
  {
    question: "Is training or technical support available?",
    answer: "Yes, all plans include basic technical support via chat and email. Premium and Family plans include additional phone support, and Family plans add priority status and remote setup assistance.",
    value: "item-6"
  }
];

const testimonials = [
  {
    name: "Maria T.",
    age: 73,
    plan: "Premium",
    quote: "MCN has given me back my independence. My children don't need to call to check if I've taken my medication anymore, and I've actually gotten better at managing my health because the app makes it so easy to track everything."
  },
  {
    name: "Robert K.",
    age: 68,
    plan: "Family",
    quote: "My wife and I both use MCN, and it's been a game-changer. The Family dashboard helps us coordinate our doctor appointments, and the video calls feature makes staying in touch with our grandchildren so much easier than before."
  },
  {
    name: "Helen M.",
    age: 79,
    plan: "Basic",
    quote: "I was afraid of technology, but MCN is so simple to use. The reminders help me stay on track with my medications, and I feel safer knowing that someone will be alerted if I don't follow my usual routine."
  }
];

interface ComparisonFeature {
  feature: string;
  basic: boolean | string;
  premium: boolean | string;
  family: boolean | string;
}

const comparisonFeatures: ComparisonFeature[] = [
  { feature: "Care Management", basic: true, premium: true, family: true },
  { feature: "Safety Monitoring", basic: "Basic", premium: "Enhanced", family: "Advanced" },
  { feature: "Health Tracking", basic: "Manual Only", premium: "Wearable Integration", family: "Full Integration" },
  { feature: "Video Calling", basic: false, premium: "Unlimited", family: "Unlimited" },
  { feature: "Voice Assistant", basic: false, premium: true, family: true },
  { feature: "Multiple User Accounts", basic: false, premium: false, family: "Up to 5" },
  { feature: "Family Dashboard", basic: false, premium: false, family: true },
  { feature: "Priority Support", basic: false, premium: false, family: true },
  { feature: "Provider Connectivity", basic: false, premium: true, family: true },
  { feature: "Data Export", basic: "Basic", premium: "Enhanced", family: "Comprehensive" }
];

const PricingPlansPage: React.FC = () => {
  const { planId } = useParams<{ planId: string }>();
  const defaultTab = planId || "basic";

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
                MCN Pricing Plans
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Choose the plan that best fits your needs and lifestyle. All plans include access to our mobile app and web portal with ongoing updates and improvements.
              </p>
            </div>
            
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
                <TabsTrigger value="family">Family</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basic">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <Card className="h-full">
                      <CardHeader className="pb-3">
                        <div className="text-3xl font-bold mb-1">€8<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                        <CardTitle className="text-2xl">Basic Plan</CardTitle>
                        <CardDescription>Perfect for getting started</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="mb-6">The Basic plan is designed for individuals who are new to digital health management and want a simple, easy-to-use solution for everyday care tasks.</p>
                        
                        <div className="mb-6">
                          <h4 className="font-medium mb-2">Ideal for:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Individuals living independently with minimal health concerns</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>People who primarily need help with reminders and basic tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Technology beginners who want a simple interface</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button asChild className="w-full justify-center bg-mcn-blue hover:bg-mcn-blue-dark">
                          <Link to="/signup?plan=basic">
                            Choose Basic
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Basic Plan Features</CardTitle>
                        <CardDescription>
                          Everything you need to get started with managing your health and daily activities
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 gap-6">
                          {basicFeatures.map((feature, index) => (
                            <FeatureItem 
                              key={index}
                              icon={feature.icon}
                              title={feature.title}
                              description={feature.description}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="mt-8">
                      <h3 className="text-2xl font-display font-bold mb-4">Basic Plan Case Study</h3>
                      <Card>
                        <CardHeader>
                          <CardTitle>Helen's Experience with the Basic Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">Helen is 79 and lives alone in her apartment. She was initially hesitant about using technology but her daughter encouraged her to try MCN's Basic plan.</p>
                          <p className="mb-4">With the Basic plan, Helen uses:</p>
                          <ul className="space-y-3 mb-4">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Daily medication reminders that notify her when it's time to take her blood pressure medication</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>The Safety Monitor that alerts her daughter if Helen hasn't moved around her apartment by 9 AM</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Health View to manually record her blood pressure readings and share them with her doctor at appointments</span>
                            </li>
                          </ul>
                          <blockquote className="border-l-4 border-mcn-blue pl-4 italic text-muted-foreground">
                            "{testimonials[2].quote}"
                            <footer className="mt-2 text-sm font-medium">— {testimonials[2].name}, {testimonials[2].age}</footer>
                          </blockquote>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="premium">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <Card className="h-full border-t-4 border-mcn-blue">
                      <CardHeader className="pb-3">
                        <div className="text-3xl font-bold mb-1">€15<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                        <CardTitle className="text-2xl">Premium Plan</CardTitle>
                        <CardDescription>Enhanced features and connectivity</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="mb-6">The Premium plan offers advanced monitoring, connectivity with healthcare providers, and enhanced communication features for a more comprehensive care management solution.</p>
                        
                        <div className="mb-6">
                          <h4 className="font-medium mb-2">Ideal for:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Individuals who want to track health metrics more thoroughly</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>People who regularly communicate with family or healthcare providers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Those who own wearable devices and want integrated health monitoring</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button asChild className="w-full justify-center bg-mcn-blue hover:bg-mcn-blue-dark">
                          <Link to="/signup?plan=premium">
                            Choose Premium
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Premium Plan Features</CardTitle>
                        <CardDescription>
                          All Basic features plus advanced monitoring and communication tools
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 gap-6">
                          {premiumFeatures.map((feature, index) => (
                            <FeatureItem 
                              key={index}
                              icon={feature.icon}
                              title={feature.title}
                              description={feature.description}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="mt-8">
                      <h3 className="text-2xl font-display font-bold mb-4">Premium Plan Case Study</h3>
                      <Card>
                        <CardHeader>
                          <CardTitle>Maria's Experience with the Premium Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">Maria is 73 and manages several health conditions. She wanted a solution that would help her be more proactive about her health while staying connected with her family.</p>
                          <p className="mb-4">With the Premium plan, Maria uses:</p>
                          <ul className="space-y-3 mb-4">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Her Apple Watch to automatically track activity levels, heart rate, and sleep patterns</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Weekly video calls with her children using the Connect Hub feature</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>BBrain voice commands to set reminders and make calls without needing to navigate the app</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Provider connectivity to share her detailed health metrics directly with her cardiologist</span>
                            </li>
                          </ul>
                          <blockquote className="border-l-4 border-mcn-blue pl-4 italic text-muted-foreground">
                            "{testimonials[0].quote}"
                            <footer className="mt-2 text-sm font-medium">— {testimonials[0].name}, {testimonials[0].age}</footer>
                          </blockquote>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="family">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <Card className="h-full border-t-4 border-mcn-blue-dark">
                      <CardHeader className="pb-3">
                        <div className="text-3xl font-bold mb-1">€25<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                        <CardTitle className="text-2xl">Family Plan</CardTitle>
                        <CardDescription>For multiple family members</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <p className="mb-6">The Family plan extends MCN's capabilities to multiple family members, with coordinated care features, enhanced security, and premium support for a comprehensive family health management system.</p>
                        
                        <div className="mb-6">
                          <h4 className="font-medium mb-2">Ideal for:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Couples and families who want to coordinate their care</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Families with multiple older adults needing support</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Users who need priority support and additional security features</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button asChild className="w-full justify-center bg-mcn-blue hover:bg-mcn-blue-dark">
                          <Link to="/signup?plan=family">
                            Choose Family
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                  
                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Family Plan Features</CardTitle>
                        <CardDescription>
                          All Premium features plus multi-user support and family coordination tools
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 gap-6">
                          {familyFeatures.map((feature, index) => (
                            <FeatureItem 
                              key={index}
                              icon={feature.icon}
                              title={feature.title}
                              description={feature.description}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="mt-8">
                      <h3 className="text-2xl font-display font-bold mb-4">Family Plan Case Study</h3>
                      <Card>
                        <CardHeader>
                          <CardTitle>Robert and Jane's Experience with the Family Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">Robert (68) and his wife Jane (65) wanted a unified system to manage their health together. They chose the Family plan to coordinate their care and stay connected with their adult children.</p>
                          <p className="mb-4">With the Family plan, they use:</p>
                          <ul className="space-y-3 mb-4">
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Family Dashboard to see each other's appointments and medication schedules</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Coordinated Care Calendar to arrange transportation to their medical appointments</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Remote Setup Assistance to get their wearable devices properly configured</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="mt-1 h-4 w-4 text-mcn-blue flex-shrink-0" />
                              <span>Priority Support when they needed help troubleshooting their video calls</span>
                            </li>
                          </ul>
                          <blockquote className="border-l-4 border-mcn-blue pl-4 italic text-muted-foreground">
                            "{testimonials[1].quote}"
                            <footer className="mt-2 text-sm font-medium">— {testimonials[1].name}, {testimonials[1].age}</footer>
                          </blockquote>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-16">
              <h2 className="text-3xl font-display font-bold mb-8">Plan Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-mcn-gray-light">
                      <th className="p-4 text-left font-medium">Feature</th>
                      <th className="p-4 text-center font-medium">Basic<br /><span className="text-sm font-normal">€8/month</span></th>
                      <th className="p-4 text-center font-medium">Premium<br /><span className="text-sm font-normal">€15/month</span></th>
                      <th className="p-4 text-center font-medium">Family<br /><span className="text-sm font-normal">€25/month</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 border-t">{row.feature}</td>
                        <td className="p-4 border-t text-center">
                          {typeof row.basic === 'boolean' 
                            ? (row.basic 
                                ? <Check className="mx-auto h-5 w-5 text-mcn-blue" /> 
                                : <span className="text-gray-400">-</span>)
                            : row.basic}
                        </td>
                        <td className="p-4 border-t text-center">
                          {typeof row.premium === 'boolean' 
                            ? (row.premium 
                                ? <Check className="mx-auto h-5 w-5 text-mcn-blue" /> 
                                : <span className="text-gray-400">-</span>)
                            : row.premium}
                        </td>
                        <td className="p-4 border-t text-center">
                          {typeof row.family === 'boolean' 
                            ? (row.family 
                                ? <Check className="mx-auto h-5 w-5 text-mcn-blue" /> 
                                : <span className="text-gray-400">-</span>)
                            : row.family}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked Questions</h2>
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
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Ready to enhance your independent living?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup" className="primary-button flex items-center justify-center">
                  Sign Up Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/contact" className="outline-button flex items-center justify-center">
                  Contact Us
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

export default PricingPlansPage;


import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Bot, 
  MessageSquare, 
  Activity, 
  Brain, 
  Zap, 
  Shield, 
  Clock, 
  BookOpen, 
  PhoneCall, 
  FileText, 
  BarChart3, 
  Users,
  CalendarClock,
  AlertCircle,
  UserCircle,
  UserCog,
  Headphones,
  ArrowRight,
  Heart,
  Stethoscope,
  BadgeCheck
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollToTop from '@/components/ScrollToTop';
import { Button } from '@/components/ui/button';

const AIAgentsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <ScrollToTop />
      <NavBar />
      
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 mb-4">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">
              AI Healthcare Agents
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI agents provide personalized healthcare assistance, 
              monitoring, and support for better health outcomes while reducing staffing burden.
            </p>
          </section>

          {/* Enhanced Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <MessageSquare className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg">AI Chat Assistant</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Get instant answers to your health questions and assistance with daily tasks.
              </p>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                Learn More
              </Button>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Bot className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg">Health Companion</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Your 24/7 companion for medication reminders, wellness tips, and emotional support.
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Learn More
              </Button>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Health Insights</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                AI-powered analysis of your health data with personalized recommendations.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Learn More
              </Button>
            </Card>
          </section>

          {/* EXPANDED AI Call Agents Section with Flow Diagram */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
            <div className="flex flex-col gap-8">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/5">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center z-10">
                      <PhoneCall className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 pl-10">
                      <img 
                        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="AI Call Center" 
                        className="rounded-lg w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h2 className="text-3xl font-bold mb-6 text-indigo-800">AI Call Agents: Revolutionizing Care</h2>
                  <p className="text-gray-700 mb-6">
                    Our AI call agents provide 24/7 support for patients and healthcare providers, handling routine inquiries, appointment scheduling, medication reminders, and emergency triage—all while maintaining the human touch that's essential in healthcare.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-indigo-100 rounded-full">
                        <FileText className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Complete Logging</h4>
                        <p className="text-sm text-gray-600">Every call is transcribed and stored securely for future reference.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-indigo-100 rounded-full">
                        <BarChart3 className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Analytics</h4>
                        <p className="text-sm text-gray-600">Gain insights from call patterns to improve care delivery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Detailed AI Call Flow Section */}
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <h3 className="text-2xl font-semibold text-center mb-8 text-indigo-700">How Our AI Call System Works</h3>
                
                {/* Call Flow Diagram */}
                <div className="relative">
                  {/* Flow Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {/* Step 1: Call Initiation */}
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 flex flex-col items-center text-center">
                      <div className="bg-blue-100 p-3 rounded-full mb-3">
                        <PhoneCall className="h-6 w-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">1. Call Initiation</h4>
                      <p className="text-sm text-gray-600">
                        Patient calls in and is greeted by our AI system, which identifies them and accesses their records.
                      </p>
                      <div className="mt-4 bg-blue-100 p-2 rounded-md w-full">
                        <p className="text-xs italic text-blue-700">
                          "Hello, thank you for calling MCN Healthcare. May I have your name and date of birth to access your records?"
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow for desktop */}
                    <div className="hidden md:flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-indigo-300" />
                    </div>
                    
                    {/* Step 2: Assessment & Routing */}
                    <div className="bg-purple-50 p-5 rounded-lg border border-purple-100 flex flex-col items-center text-center">
                      <div className="bg-purple-100 p-3 rounded-full mb-3">
                        <Stethoscope className="h-6 w-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">2. Assessment & Triage</h4>
                      <p className="text-sm text-gray-600">
                        AI assistant assesses the patient's needs and determines the appropriate action or service.
                      </p>
                      <div className="mt-4 bg-purple-100 p-2 rounded-md w-full">
                        <p className="text-xs italic text-purple-700">
                          "I understand you're experiencing chest pain. I need to ask you some questions to determine the severity..."
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow for desktop */}
                    <div className="hidden md:flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-indigo-300" />
                    </div>
                    
                    {/* Step 3: Resolution or Escalation */}
                    <div className="bg-green-50 p-5 rounded-lg border border-green-100 flex flex-col items-center text-center">
                      <div className="bg-green-100 p-3 rounded-full mb-3">
                        <BadgeCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">3. Resolution/Escalation</h4>
                      <p className="text-sm text-gray-600">
                        AI either resolves the issue or seamlessly escalates to a human healthcare professional if needed.
                      </p>
                      <div className="mt-4 bg-green-100 p-2 rounded-md w-full">
                        <p className="text-xs italic text-green-700">
                          "I've scheduled your appointment for Tuesday at 2 PM. Would you like a calendar invitation sent to your email?"
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Post-Call Processing Section */}
                  <div className="mt-12 border-t border-gray-200 pt-8">
                    <h4 className="text-xl font-semibold text-center mb-6 text-indigo-700">Post-Call Processing</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Documentation */}
                      <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                        <div className="flex items-center mb-3">
                          <div className="bg-indigo-100 p-2 rounded-full mr-3">
                            <FileText className="h-5 w-5 text-indigo-600" />
                          </div>
                          <h5 className="font-semibold">Documentation</h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          Call is automatically transcribed, summarized, and added to the patient's electronic health record.
                        </p>
                      </div>
                      
                      {/* Analysis */}
                      <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                        <div className="flex items-center mb-3">
                          <div className="bg-indigo-100 p-2 rounded-full mr-3">
                            <BarChart3 className="h-5 w-5 text-indigo-600" />
                          </div>
                          <h5 className="font-semibold">Analysis</h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          AI extracts key data points and patterns to improve service and identify potential health concerns.
                        </p>
                      </div>
                      
                      {/* Follow-up */}
                      <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                        <div className="flex items-center mb-3">
                          <div className="bg-indigo-100 p-2 rounded-full mr-3">
                            <CalendarClock className="h-5 w-5 text-indigo-600" />
                          </div>
                          <h5 className="font-semibold">Follow-up</h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          System schedules any necessary follow-ups and sends automated reminders to patients and providers.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call Handling Scenarios */}
                  <div className="mt-12 border-t border-gray-200 pt-8">
                    <h4 className="text-xl font-semibold text-center mb-6 text-indigo-700">Common Call Scenarios Handled by AI</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Scenario 1 */}
                      <div className="flex bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="mr-4">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <CalendarClock className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Appointment Scheduling</h5>
                          <p className="text-sm text-gray-600">
                            The AI agent checks provider availability, patient preferences, and schedules appointments with confirmation.
                          </p>
                        </div>
                      </div>
                      
                      {/* Scenario 2 */}
                      <div className="flex bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="mr-4">
                          <div className="bg-purple-100 p-2 rounded-full">
                            <FileText className="h-5 w-5 text-purple-600" />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Prescription Refills</h5>
                          <p className="text-sm text-gray-600">
                            Verifies patient identity, medication history, and processes refill requests that meet criteria.
                          </p>
                        </div>
                      </div>
                      
                      {/* Scenario 3 */}
                      <div className="flex bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="mr-4">
                          <div className="bg-red-100 p-2 rounded-full">
                            <AlertCircle className="h-5 w-5 text-red-600" />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Symptom Assessment</h5>
                          <p className="text-sm text-gray-600">
                            Conducts initial assessment of symptoms and provides guidance or escalates to emergency services if needed.
                          </p>
                        </div>
                      </div>
                      
                      {/* Scenario 4 */}
                      <div className="flex bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="mr-4">
                          <div className="bg-green-100 p-2 rounded-full">
                            <UserCog className="h-5 w-5 text-green-600" />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Insurance Inquiries</h5>
                          <p className="text-sm text-gray-600">
                            Checks coverage details, explains benefits, and answers common insurance-related questions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Technical Capabilities */}
              <div className="mt-8 bg-indigo-900 text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Advanced Technical Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-indigo-800 rounded-full">
                      <UserCircle className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Voice Recognition</h4>
                      <p className="text-sm text-indigo-200">Identifies and authenticates callers by voice patterns with 98% accuracy.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-indigo-800 rounded-full">
                      <Heart className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Emotion Detection</h4>
                      <p className="text-sm text-indigo-200">Recognizes patient distress signals and adjusts response accordingly.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-indigo-800 rounded-full">
                      <MessageSquare className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Natural Language</h4>
                      <p className="text-sm text-indigo-200">Understands context, medical terminology, and conversational nuances.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-indigo-800 rounded-full">
                      <Headphones className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Multi-language Support</h4>
                      <p className="text-sm text-indigo-200">Supports over 20 languages with real-time translation capabilities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NEW Staffing Efficiency Section */}
          <section className="rounded-2xl overflow-hidden">
            <div className="bg-blue-800 text-white p-8 rounded-t-2xl">
              <h2 className="text-3xl font-bold mb-4">Transforming Healthcare Staffing</h2>
              <p className="text-xl opacity-90">
                Our AI agents reduce administrative burden by up to 70%, allowing your healthcare professionals to focus on what matters most—patient care.
              </p>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-b-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 border border-gray-100 rounded-xl">
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Optimized Workforce</h3>
                  <p className="text-gray-600">
                    AI handles routine tasks, allowing you to allocate human resources where they're needed most.
                  </p>
                </div>
                <div className="text-center p-6 border border-gray-100 rounded-xl">
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CalendarClock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">24/7 Coverage</h3>
                  <p className="text-gray-600">
                    Provide round-the-clock care without the cost of overnight staffing or on-call rotations.
                  </p>
                </div>
                <div className="text-center p-6 border border-gray-100 rounded-xl">
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Complete Documentation</h3>
                  <p className="text-gray-600">
                    All interactions are automatically documented, ensuring complete records without manual note-taking.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">How Our AI Agents Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-semibold">Learn</h3>
                <p className="text-gray-600">AI adapts to your health needs and preferences</p>
              </div>
              <div className="text-center space-y-3">
                <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold">Protect</h3>
                <p className="text-gray-600">Ensures your health data remains private and secure</p>
              </div>
              <div className="text-center space-y-3">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold">Monitor</h3>
                <p className="text-gray-600">Continuously tracks your health metrics and activities</p>
              </div>
              <div className="text-center space-y-3">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold">Educate</h3>
                <p className="text-gray-600">Provides personalized health education and resources</p>
              </div>
            </div>
          </section>

          {/* NEW Detailed AI Call Processing Section */}
          <section className="p-8 rounded-2xl border border-indigo-100 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Comprehensive Call Recording & Analysis</h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-2/3 space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-700">Secure Call Recording</h3>
                  <p className="text-gray-700">
                    Every AI-powered call is securely recorded and stored in compliance with healthcare privacy regulations (HIPAA, GDPR). Recordings are encrypted both in transit and at rest.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Patient consent is automatically obtained at the start of each call</li>
                    <li>Recordings are only accessible to authorized personnel</li>
                    <li>Automated redaction of sensitive information in transcripts</li>
                    <li>Role-based access control for viewing call history</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <Card className="overflow-hidden">
                    <div className="h-2 bg-indigo-600"></div>
                    <CardContent className="p-5">
                      <div className="space-y-4">
                        <h4 className="font-medium text-center">Security Features</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="text-sm">End-to-end encryption</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="text-sm">HIPAA compliant</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Audit trail for access</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Data retention policies</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3 order-2 md:order-1">
                  <Card className="overflow-hidden">
                    <div className="h-2 bg-purple-600"></div>
                    <CardContent className="p-5">
                      <div className="space-y-4">
                        <h4 className="font-medium text-center">Analysis Insights</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <BarChart3 className="h-4 w-4 text-purple-600" />
                            <span className="text-sm">Patient satisfaction scores</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BarChart3 className="h-4 w-4 text-purple-600" />
                            <span className="text-sm">Common inquiry patterns</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BarChart3 className="h-4 w-4 text-purple-600" />
                            <span className="text-sm">Peak call times</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BarChart3 className="h-4 w-4 text-purple-600" />
                            <span className="text-sm">Resolution rate metrics</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-2/3 space-y-4 order-1 md:order-2">
                  <h3 className="text-xl font-semibold text-purple-700">Automatic Transcription & Analytics</h3>
                  <p className="text-gray-700">
                    Our advanced AI doesn't just handle calls—it transforms them into actionable data. Every interaction is automatically transcribed and analyzed to provide insights for continuous improvement.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Sentiment analysis identifies patients who may need additional support</li>
                    <li>Topic modeling reveals trending health concerns in your population</li>
                    <li>Automatic tagging of calls for easy searching and categorization</li>
                    <li>Integration with EHR systems for holistic patient records</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Transform Your Healthcare Operations</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Join thousands of healthcare providers who have reduced staffing costs and improved patient satisfaction with our AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 text-lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-2 border-white bg-transparent hover:bg-white/10 text-white text-lg">
                Download ROI Report
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIAgentsPage;

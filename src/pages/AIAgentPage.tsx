
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { Bot, Brain, Zap, MessageSquare, Settings, Activity, Network, Server, Code, Monitor } from 'lucide-react';

const AIAgentPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-32 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('aiagent.hero.title', 'AI Agents Platform')}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {t('aiagent.hero.description', 'Enhancing healthcare delivery through intelligent automation and AI assistance')}
              </p>
              <div className="flex justify-center">
                <button className="primary-button">
                  {t('aiagent.hero.getStarted', 'Get Started')}
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Agent Capabilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('aiagent.capabilities.title', 'AI Agent Capabilities')}
              </h2>
              <p className="text-lg text-gray-700">
                {t('aiagent.capabilities.description', 'Our AI Agents are designed to streamline operations and enhance care delivery through intelligent automation.')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Agent Card 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Bot className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('aiagent.capabilities.card1.title', 'Intelligent Assistance')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.capabilities.card1.description', 'AI agents provide real-time assistance to both healthcare providers and patients, answering questions and guiding through processes.')}
                </p>
              </div>
              
              {/* AI Agent Card 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Brain className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('aiagent.capabilities.card2.title', 'Smart Automation')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.capabilities.card2.description', 'Automate routine tasks and workflows to reduce administrative burden and allow healthcare professionals to focus on patient care.')}
                </p>
              </div>
              
              {/* AI Agent Card 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <MessageSquare className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('aiagent.capabilities.card3.title', 'Enhanced Communication')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.capabilities.card3.description', 'Facilitate seamless communication between patients, care providers, and family members through AI-powered chat interfaces.')}
                </p>
              </div>
              
              {/* AI Agent Card 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                <div className="bg-yellow-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Activity className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('aiagent.capabilities.card4.title', 'Health Monitoring')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.capabilities.card4.description', 'Continuously monitor patient health data and provide alerts for potential issues, enabling proactive care.')}
                </p>
              </div>
              
              {/* AI Agent Card 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                <div className="bg-red-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('aiagent.capabilities.card5.title', 'Rapid Decision Support')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.capabilities.card5.description', 'Provide data-driven insights and recommendations to support clinical decision-making and improve patient outcomes.')}
                </p>
              </div>
              
              {/* AI Agent Card 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                <div className="bg-teal-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Settings className="h-7 w-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('aiagent.capabilities.card6.title', 'Customizable Workflows')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.capabilities.card6.description', 'Tailor AI agent behaviors and workflows to meet the specific needs of different healthcare environments and specialties.')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Flow Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('aiagent.process.title', 'How It Works')}
              </h2>
              <p className="text-lg text-gray-700">
                {t('aiagent.process.description', 'Our AI agents simplify healthcare processes for both clients and providers.')}
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Process Steps */}
              <div className="relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-blue-200 z-0"></div>
                
                {/* Step 1 */}
                <div className="relative z-10 flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('aiagent.process.step1.title', 'Initial Assessment')}
                    </h3>
                    <p className="text-gray-700">
                      {t('aiagent.process.step1.description', 'AI agents collect and analyze patient information to create a personalized care profile.')}
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start">
                    <div className="bg-white rounded-full border-4 border-blue-500 w-16 h-16 flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-blue-500">1</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative z-10 flex flex-col md:flex-row-reverse items-center mb-12">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('aiagent.process.step2.title', 'Automated Planning')}
                    </h3>
                    <p className="text-gray-700">
                      {t('aiagent.process.step2.description', 'Based on the assessment, AI agents develop and optimize care plans tailored to individual needs.')}
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="bg-white rounded-full border-4 border-blue-500 w-16 h-16 flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-blue-500">2</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative z-10 flex flex-col md:flex-row items-center mb-12">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('aiagent.process.step3.title', 'Continuous Monitoring')}
                    </h3>
                    <p className="text-gray-700">
                      {t('aiagent.process.step3.description', 'AI agents monitor patient status in real-time, adjusting care plans as needed and alerting healthcare providers to changes.')}
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-start">
                    <div className="bg-white rounded-full border-4 border-blue-500 w-16 h-16 flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-blue-500">3</span>
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="relative z-10 flex flex-col md:flex-row-reverse items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('aiagent.process.step4.title', 'Intelligent Feedback')}
                    </h3>
                    <p className="text-gray-700">
                      {t('aiagent.process.step4.description', 'AI agents provide insights and recommendations to both patients and healthcare providers, facilitating better outcomes and continuous improvement.')}
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="bg-white rounded-full border-4 border-blue-500 w-16 h-16 flex items-center justify-center shadow-md">
                      <span className="text-xl font-bold text-blue-500">4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                {t('aiagent.cta.title', 'Ready to Experience AI-Powered Healthcare?')}
              </h2>
              <p className="text-xl mb-8">
                {t('aiagent.cta.description', 'Join thousands of healthcare providers and patients already benefiting from our AI agent platform.')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors">
                  {t('aiagent.cta.demoButton', 'Request Demo')}
                </button>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition-colors">
                  {t('aiagent.cta.contactButton', 'Contact Sales')}
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tech Specs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('aiagent.techSpecs.title', 'Technical Specifications')}
              </h2>
              <p className="text-lg text-gray-700">
                {t('aiagent.techSpecs.description', 'Our AI agent platform is built on cutting-edge technology to ensure reliability, security, and performance.')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {/* Tech Spec 1 */}
              <div className="text-center">
                <div className="mx-auto bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Server className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('aiagent.techSpecs.spec1.title', 'Cloud Infrastructure')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.techSpecs.spec1.description', 'Hosted on secure, scalable cloud infrastructure with 99.9% uptime guarantee.')}
                </p>
              </div>
              
              {/* Tech Spec 2 */}
              <div className="text-center">
                <div className="mx-auto bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Brain className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('aiagent.techSpecs.spec2.title', 'Advanced AI Models')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.techSpecs.spec2.description', 'Leveraging state-of-the-art machine learning models trained on healthcare-specific data.')}
                </p>
              </div>
              
              {/* Tech Spec 3 */}
              <div className="text-center">
                <div className="mx-auto bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Network className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('aiagent.techSpecs.spec3.title', 'Seamless Integration')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.techSpecs.spec3.description', 'APIs and connectors for integration with existing healthcare systems and EHRs.')}
                </p>
              </div>
              
              {/* Tech Spec 4 */}
              <div className="text-center">
                <div className="mx-auto bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  <Monitor className="h-10 w-10 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('aiagent.techSpecs.spec4.title', 'Real-time Analytics')}
                </h3>
                <p className="text-gray-700">
                  {t('aiagent.techSpecs.spec4.description', 'Comprehensive dashboards and reporting tools for tracking performance and outcomes.')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAgentPage;

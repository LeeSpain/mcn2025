
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Shield, Clock, LineChart, Brain, ArrowRight, Check, Users, FileText, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-5 glass-card animate-fade-in-up">
    <div className="mt-1 w-10 h-10 rounded-lg bg-mcn-blue-light/30 flex items-center justify-center text-mcn-blue-dark flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
}> = ({ quote, name, role, imageUrl }) => (
  <div className="glass-card p-6 flex flex-col">
    <div className="mb-4 text-mcn-blue">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.667 13.333H5.33366C5.33366 13.333 5.33366 8 10.667 8M10.667 13.333C10.667 18.667 5.33366 18.667 5.33366 18.667V13.333H10.667ZM26.667 13.333H21.3337C21.3337 13.333 21.3337 8 26.667 8M26.667 13.333C26.667 18.667 21.3337 18.667 21.3337 18.667V13.333H26.667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <p className="text-foreground italic mb-6">{quote}</p>
    <div className="mt-auto flex items-center">
      <div className="w-10 h-10 rounded-full bg-mcn-blue/10 flex items-center justify-center mr-3">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full object-cover" />
        ) : (
          <span className="text-mcn-blue font-medium">{name.charAt(0)}</span>
        )}
      </div>
      <div>
        <h5 className="font-medium">{name}</h5>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

const StaffPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <section className="py-20 bg-mcn-gray-light relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.1),transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="mb-3">
                <div className="chip mx-auto">For Staff</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
                Streamlined Care Management
              </h1>
              <p className="text-xl text-muted-foreground">
                MCN gives care professionals powerful tools to reduce administrative burden and focus on what matters most: providing quality care.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
              <div className="w-full lg:w-1/2">
                <div className="relative animate-fade-in-up">
                  <div className="aspect-[4/3] md:aspect-video glass-card shadow-soft-lg rounded-2xl overflow-hidden border border-white/40">
                    <div className="w-full h-full p-4 bg-gradient-to-br from-white to-mcn-gray-light relative">
                      {/* Staff Dashboard Mockup */}
                      <div className="absolute top-0 left-0 right-0 h-12 bg-mcn-blue flex items-center px-4">
                        <div className="text-white font-medium">MCN Staff Dashboard</div>
                        <div className="ml-auto flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-white/20"></div>
                          <div className="w-3 h-3 rounded-full bg-white/20"></div>
                          <div className="w-3 h-3 rounded-full bg-white/20"></div>
                        </div>
                      </div>
                      
                      <div className="mt-14 flex h-[calc(100%-56px)]">
                        {/* Sidebar */}
                        <div className="w-44 bg-mcn-gray p-3 rounded-lg h-full flex flex-col">
                          <div className="mb-4 p-2 bg-white rounded-md flex items-center text-sm">
                            <div className="w-4 h-4 bg-mcn-blue rounded-full mr-2"></div>
                            Dashboard
                          </div>
                          <div className="mb-2 p-2 text-mcn-gray-dark text-sm">Clients</div>
                          <div className="mb-2 p-2 text-mcn-gray-dark text-sm">Tasks</div>
                          <div className="mb-2 p-2 text-mcn-gray-dark text-sm">Calendar</div>
                          <div className="mb-2 p-2 text-mcn-gray-dark text-sm">Reports</div>
                          <div className="mt-auto p-2 text-mcn-gray-dark text-sm">Settings</div>
                        </div>
                        
                        {/* Main content */}
                        <div className="flex-1 p-3">
                          <div className="mb-4">
                            <h3 className="text-lg font-medium">Priority Clients</h3>
                            <p className="text-xs text-mcn-gray-dark">AI-sorted by need level</p>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="p-3 bg-white rounded-lg border border-mcn-gray flex items-start">
                              <div className="w-10 h-10 rounded-md bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mr-3">
                                JD
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <div className="font-medium">Jan de Vries</div>
                                  <div className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">High</div>
                                </div>
                                <div className="text-xs text-mcn-gray-dark mt-1">Missed medication (2), BP spike</div>
                              </div>
                            </div>
                            
                            <div className="p-3 bg-white rounded-lg border border-mcn-gray flex items-start">
                              <div className="w-10 h-10 rounded-md bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mr-3">
                                AK
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <div className="font-medium">Anna Koster</div>
                                  <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Medium</div>
                                </div>
                                <div className="text-xs text-mcn-gray-dark mt-1">Low activity (3 days)</div>
                              </div>
                            </div>
                            
                            <div className="p-3 bg-white rounded-lg border border-mcn-gray flex items-start">
                              <div className="w-10 h-10 rounded-md bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mr-3">
                                PB
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <div className="font-medium">Pieter Bakker</div>
                                  <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Low</div>
                                </div>
                                <div className="text-xs text-mcn-gray-dark mt-1">Routine check-in</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-5">
                            <h3 className="text-lg font-medium">Quick Stats</h3>
                            <div className="grid grid-cols-3 gap-3 mt-2">
                              <div className="p-3 bg-white rounded-lg border border-mcn-gray">
                                <div className="text-xs text-mcn-gray-dark">Tasks</div>
                                <div className="text-lg font-medium">12/15</div>
                              </div>
                              <div className="p-3 bg-white rounded-lg border border-mcn-gray">
                                <div className="text-xs text-mcn-gray-dark">Clients</div>
                                <div className="text-lg font-medium">8</div>
                              </div>
                              <div className="p-3 bg-white rounded-lg border border-mcn-gray">
                                <div className="text-xs text-mcn-gray-dark">Alerts</div>
                                <div className="text-lg font-medium">3</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight mb-6">Transform Your Workflow</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  MCN streamlines your daily tasks, allowing you to spend more time with clients and less time on administrative work.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <FeatureCard 
                    icon={<Shield size={20} />}
                    title="ClientSync"
                    description="Access all client information in one unified dashboard, reducing time spent switching between systems."
                  />
                  
                  <FeatureCard 
                    icon={<Clock size={20} />}
                    title="TaskMaster"
                    description="AI-powered prioritization of tasks helps staff focus on the most critical client needs first."
                  />
                  
                  <FeatureCard 
                    icon={<LineChart size={20} />}
                    title="RemoteLink"
                    description="Conduct virtual check-ins with clients, reducing travel time while maintaining quality care."
                  />
                  
                  <FeatureCard 
                    icon={<Brain size={20} />}
                    title="Floortje AI"
                    description="Receive AI-generated care suggestions based on client data patterns and best practices."
                  />
                </div>
                
                <div className="mt-8">
                  <Link to="/staff-demo" className="primary-button inline-flex items-center">
                    See Staff Dashboard Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Staff Benefits</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                MCN is designed to help care professionals deliver better care while reducing administrative burden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mb-6">
                    <Clock size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Save 25% Admin Time</h3>
                  <p className="text-muted-foreground">
                    Reduce paperwork and administrative tasks through automation and smart workflow design.
                  </p>
                </div>
                
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mb-6">
                    <Users size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Improve Client Care</h3>
                  <p className="text-muted-foreground">
                    Focus on what matters most - delivering personalized care to your clients.
                  </p>
                </div>
                
                <div className="glass-card p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mb-6">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Simplified Documentation</h3>
                  <p className="text-muted-foreground">
                    Automated reporting and documentation that meets compliance requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold mb-4">What Care Professionals Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hear from staff members who are already using MCN in their daily work.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TestimonialCard 
                  quote="MCN has completely transformed how I organize my day. I can prioritize clients who need attention most urgently, and the time I save on admin work means I can see more clients."
                  name="Lisa Jansen"
                  role="Home Care Nurse"
                />
                
                <TestimonialCard 
                  quote="The remote check-in feature has been a game-changer. For routine follow-ups, I can connect with clients without traveling, which means I can support more people throughout the day."
                  name="Mark de Boer"
                  role="Care Coordinator"
                />
                
                <TestimonialCard 
                  quote="Floortje AI's suggestions are surprisingly helpful. It notices patterns I might miss and suggests interventions that have worked well for similar clients."
                  name="Sarah Visser"
                  role="Healthcare Assistant"
                />
              </div>
            </div>
            
            <div className="glass-card p-8 md:p-12 rounded-xl">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Ready to join our team?</h2>
                  <p className="text-muted-foreground mb-6">
                    We're always looking for passionate care professionals to join our team and help deliver exceptional care using MCN.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Competitive pay and benefits</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Flexible scheduling options</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Professional development opportunities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 text-mcn-blue flex-shrink-0"><Check size={16} /></div>
                      <span>Cutting-edge technology tools</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link to="/careers" className="primary-button inline-flex items-center">
                      View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="w-full h-full rounded-xl bg-mcn-blue/10 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <BadgeCheck size={48} className="text-mcn-blue mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Certified Training</h3>
                      <p className="text-sm text-muted-foreground">
                        All staff receive comprehensive training on the MCN platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default StaffPage;

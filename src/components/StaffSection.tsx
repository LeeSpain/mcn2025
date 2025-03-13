
import React from 'react';
import { Shield, Clock, LineChart, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StaffBenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const StaffBenefit: React.FC<StaffBenefitProps> = ({ icon, title, description, delay = 0 }) => (
  <div 
    className="flex items-start gap-4 p-5 glass-card animate-fade-in-up"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="mt-1 w-10 h-10 rounded-lg bg-mcn-blue-light/30 flex items-center justify-center text-mcn-blue-dark flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  </div>
);

const StaffSection: React.FC = () => {
  return (
    <section id="staff" className="section-padding bg-mcn-gray-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,119,182,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-3">
            <div className="chip mx-auto">For Staff</div>
          </div>
          <h2 className="section-title">Streamline Care Management</h2>
          <p className="section-subtitle">
            MCN gives care professionals powerful tools to reduce administrative burden and focus on what matters most: providing quality care.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StaffBenefit 
                icon={<Shield size={20} />}
                title="ClientSync"
                description="Access all client information in one unified dashboard, reducing time spent switching between systems."
                delay={0.1}
              />
              
              <StaffBenefit 
                icon={<Clock size={20} />}
                title="TaskMaster"
                description="AI-powered prioritization of tasks helps staff focus on the most critical client needs first."
                delay={0.2}
              />
              
              <StaffBenefit 
                icon={<LineChart size={20} />}
                title="RemoteLink"
                description="Conduct virtual check-ins with clients, reducing travel time while maintaining quality care."
                delay={0.3}
              />
              
              <StaffBenefit 
                icon={<Brain size={20} />}
                title="Floortje AI"
                description="Receive AI-generated care suggestions based on client data patterns and best practices."
                delay={0.4}
              />
            </div>
            
            <div className="mt-8 text-center lg:text-left">
              <Link to="/staff-demo" className="primary-button inline-flex items-center">
                See Staff Dashboard Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
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
              
              {/* Decorative elements */}
              <div 
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-xl glass-card shadow-soft rotate-[5deg] animate-float z-20"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-mcn-blue-light/30 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-mcn-blue rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;

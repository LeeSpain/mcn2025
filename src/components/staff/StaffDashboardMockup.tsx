
import React from 'react';

const StaffDashboardMockup: React.FC = () => {
  return (
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
  );
};

export default StaffDashboardMockup;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowLeft, Clock, AlertCircle, CheckCircle, AlertTriangle, Building, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MCNComponentDetailPage = () => {
  const { componentId } = useParams();
  const navigate = useNavigate();
  
  // In a real implementation, you would fetch this data from an API
  // This is just placeholder data for the UI
  const componentName = componentId?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header with back button */}
          <div className="mb-6">
            <button 
              onClick={() => navigate('/mcn-implementation-dashboard')}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </button>
          </div>
          
          {/* Component Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">{componentName}</h1>
                <p className="text-gray-600">Detailed implementation plan and progress tracking</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  In Progress
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                  40% Complete
                </span>
              </div>
            </div>
            
            {/* Progress Timeline */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-500 mb-4">IMPLEMENTATION TIMELINE</h3>
              <div className="relative">
                <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200"></div>
                <div className="absolute top-5 left-0 w-2/5 h-1 bg-blue-500"></div>
                <div className="flex justify-between relative">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto z-10 relative">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div className="mt-2 text-xs">Planning</div>
                    <div className="text-xs text-gray-500">Week 1-2</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto z-10 relative">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div className="mt-2 text-xs">Design</div>
                    <div className="text-xs text-gray-500">Week 3-4</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto z-10 relative">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="mt-2 text-xs">Development</div>
                    <div className="text-xs text-gray-500">Week 5-8</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center mx-auto z-10 relative">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div className="mt-2 text-xs">Testing</div>
                    <div className="text-xs text-gray-500">Week 9-10</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center mx-auto z-10 relative">
                      <Building className="h-5 w-5" />
                    </div>
                    <div className="mt-2 text-xs">Deployment</div>
                    <div className="text-xs text-gray-500">Week 11-12</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs for different information sections */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="gaps">Gaps to Address</TabsTrigger>
              <TabsTrigger value="suppliers">Supplier Integration</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  {/* Component Description */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Description</h2>
                    <p className="text-gray-700 mb-4">
                      The {componentName} module is a key component of the MCN platform, 
                      designed to replace and enhance MobileCare's existing functionality. 
                      It provides a comprehensive solution for managing client care plans, 
                      medication schedules, and daily tasks with advanced reminders and AI assistance.
                    </p>
                    <p className="text-gray-700">
                      This component integrates with several third-party suppliers and addresses 
                      multiple gaps identified in the transition from MobileCare to MCN.
                    </p>
                  </div>
                  
                  {/* Implementation Tasks */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Implementation Tasks</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-500 mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-medium">Architecture & Foundation</h3>
                          <p className="text-sm text-gray-600">Establish core data models and API endpoints</p>
                          <div className="mt-2 text-xs bg-green-50 text-green-700 px-2 py-1 rounded inline-block">Completed</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-amber-500 mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-medium">WhatsApp Integration</h3>
                          <p className="text-sm text-gray-600">Connect MyPIA WhatsApp reminders to Care Manager</p>
                          <div className="mt-2 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded inline-block">In Progress</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-amber-500 mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-medium">ADL Independence Program</h3>
                          <p className="text-sm text-gray-600">Implement 12-week coaching program with progress tracking</p>
                          <div className="mt-2 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded inline-block">In Progress</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-medium">Collaborative Agenda</h3>
                          <p className="text-sm text-gray-600">Implement Nettie Well-Organized joint agenda feature</p>
                          <div className="mt-2 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded inline-block">Planned</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-blue-500 mt-1 mr-3 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-medium">Wearable Integration</h3>
                          <p className="text-sm text-gray-600">Add UF Wristband vibration-based reminders</p>
                          <div className="mt-2 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded inline-block">Planned</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Key Statistics */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Key Statistics</h2>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500">Gaps Addressed</div>
                        <div className="text-2xl font-bold">3 of 26</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Suppliers Integrated</div>
                        <div className="text-2xl font-bold">2 of 18</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Implementation Phase</div>
                        <div className="text-lg font-semibold">Development</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Target Completion</div>
                        <div className="text-lg font-semibold">Week 12</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Team */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Implementation Team</h2>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-blue-700" />
                        </div>
                        <div>
                          <div className="font-medium">Product Team</div>
                          <div className="text-sm text-gray-500">3 members</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                          <div className="font-medium">Development Team</div>
                          <div className="text-sm text-gray-500">5 members</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-purple-700" />
                        </div>
                        <div>
                          <div className="font-medium">QA Team</div>
                          <div className="text-sm text-gray-500">2 members</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Risks */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Risks & Issues</h2>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium">WhatsApp API Integration</h3>
                          <p className="text-sm text-gray-600">Dependency on third-party API approval</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium">Data Migration Timeline</h3>
                          <p className="text-sm text-gray-600">Risk of delay due to data volume</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="gaps">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Gaps to Address</h2>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">MyPIA's WhatsApp-Based Reminders</h3>
                        <p className="text-gray-600 mt-1">Integration of WhatsApp notifications into Care Manager for tasks/medication</p>
                      </div>
                      <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">In Progress</div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">PRIORITY</h4>
                        <p className="mt-1">Medium</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">COMPLEXITY</h4>
                        <p className="mt-1">Medium</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ESTIMATED COMPLETION</h4>
                        <p className="mt-1">Week 8</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">IMPLEMENTATION DETAILS</h4>
                      <ul className="list-disc list-inside mt-1 text-gray-700">
                        <li>Integrate with WhatsApp Business API</li>
                        <li>Create templates for medication and task reminders</li>
                        <li>Allow Care Manager to schedule WhatsApp notifications</li>
                        <li>Track delivery and read status of messages</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Exercise Coach's 12-Week ADL Program</h3>
                        <p className="text-gray-600 mt-1">Structured coaching module in Care Manager for independence program</p>
                      </div>
                      <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">In Progress</div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">PRIORITY</h4>
                        <p className="mt-1">High</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">COMPLEXITY</h4>
                        <p className="mt-1">High</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ESTIMATED COMPLETION</h4>
                        <p className="mt-1">Week 10</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">IMPLEMENTATION DETAILS</h4>
                      <ul className="list-disc list-inside mt-1 text-gray-700">
                        <li>Develop 12-week structured program with weekly goals</li>
                        <li>Create progress tracking dashboard</li>
                        <li>Implement video coaching sessions via Connect Hub</li>
                        <li>Add exercise demonstration videos and reminders</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Nettie Well-Organized Joint Agenda</h3>
                        <p className="text-gray-600 mt-1">Collaborative agenda feature for Family Access and Care Manager</p>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Planned</div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">PRIORITY</h4>
                        <p className="mt-1">Medium</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">COMPLEXITY</h4>
                        <p className="mt-1">Medium</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">ESTIMATED COMPLETION</h4>
                        <p className="mt-1">Week 12</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">IMPLEMENTATION DETAILS</h4>
                      <ul className="list-disc list-inside mt-1 text-gray-700">
                        <li>Create shared calendar with task assignment</li>
                        <li>Implement group chat for caregivers</li>
                        <li>Add notification system for task changes</li>
                        <li>Allow task status updates and comments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="suppliers">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Supplier Integration</h2>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img src="/placeholder.svg" alt="BBrain" className="w-12 h-12 mr-4" />
                        <div>
                          <h3 className="font-semibold text-lg">BBrain</h3>
                          <p className="text-gray-600 mt-1">Voice assistant and screens for reminders and communication</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">In Progress</div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">INTEGRATION TYPE</h4>
                        <p className="mt-1">API & Device</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">REBRANDING</h4>
                        <p className="mt-1">MCN Voice Assistant</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">COMPLETION</h4>
                        <p className="mt-1">65%</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">INTEGRATION DETAILS</h4>
                      <ul className="list-disc list-inside mt-1 text-gray-700">
                        <li>API connection to Care Manager for reminders</li>
                        <li>White-labeled devices with MCN branding</li>
                        <li>Firmware updates for enhanced functionality</li>
                        <li>Integration with Connect Hub for video calls</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img src="/placeholder.svg" alt="Spencer/Dosell" className="w-12 h-12 mr-4" />
                        <div>
                          <h3 className="font-semibold text-lg">Spencer/Dosell</h3>
                          <p className="text-gray-600 mt-1">Medication dispensers for automated Baxter bag dispensing</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Planned</div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">INTEGRATION TYPE</h4>
                        <p className="mt-1">Device & API</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">REBRANDING</h4>
                        <p className="mt-1">MCN Smart Medication Dispenser</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">COMPLETION</h4>
                        <p className="mt-1">20%</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">INTEGRATION DETAILS</h4>
                      <ul className="list-disc list-inside mt-1 text-gray-700">
                        <li>Device integration with Care Manager for medication schedules</li>
                        <li>Alert system for missed doses</li>
                        <li>Remote configuration capabilities</li>
                        <li>Rebranded hardware with MCN labeling</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <img src="/placeholder.svg" alt="Nettie" className="w-12 h-12 mr-4" />
                        <div>
                          <h3 className="font-semibold text-lg">Nettie</h3>
                          <p className="text-gray-600 mt-1">Well-Organized joint caregiving agenda and health monitoring</p>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Planned</div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">INTEGRATION TYPE</h4>
                        <p className="mt-1">Platform & API</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">REBRANDING</h4>
                        <p className="mt-1">MCN Family Coordination</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">COMPLETION</h4>
                        <p className="mt-1">10%</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">INTEGRATION DETAILS</h4>
                      <ul className="list-disc list-inside mt-1 text-gray-700">
                        <li>Integration with Family Access for shared calendars</li>
                        <li>Data sharing with Health View for monitoring</li>
                        <li>White-labeled interface with MCN branding</li>
                        <li>Unified login system with MCN accounts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="requirements">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Requirements</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Functional Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must support medication reminders via multiple channels (app, voice, WhatsApp)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must integrate with BBrain Voice Assistant for verbal reminders</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must support collaborative agenda with family members and caregivers</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must implement 12-week ADL independence program with progress tracking</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must support wearable device vibration alerts for reminders</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Technical Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must use cloud-based architecture for scalability (10-500+ users)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must comply with NEN7510/ISO security standards</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must integrate with WhatsApp Business API for notifications</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must provide API endpoints for device integration (Spencer, BBrain)</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must support offline functionality for critical features</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">User Experience Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must provide intuitive interface for all user comfort levels</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must enable configuration of reminders by caregivers</span>
                      </li>
                      <li className="flex items-start">
                        <Clock className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must support multilingual access (Dutch, English)</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must provide dementia-friendly simplified view option</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Must maintain consistent MCN branding across all interfaces</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="dependencies">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Dependencies</h2>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">WhatsApp Business API</h3>
                        <p className="text-gray-600 mt-1">Required for MyPIA's WhatsApp-Based Reminders</p>
                      </div>
                      <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">In Progress</div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">STATUS DETAILS</h4>
                      <p className="mt-1 text-gray-700">
                        Application submitted to WhatsApp. Awaiting approval for Business API access.
                        Expected to be completed by Week 6.
                      </p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">IMPACT IF DELAYED</h4>
                      <p className="mt-1 text-gray-700">
                        Will delay implementation of WhatsApp reminders. Alternative SMS-based reminders
                        can be used as a fallback.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">BBrain API Integration</h3>
                        <p className="text-gray-600 mt-1">Required for voice reminders and communication</p>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Completed</div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">STATUS DETAILS</h4>
                      <p className="mt-1 text-gray-700">
                        API integration completed and tested. Authentication tokens received and
                        documented. Integration working properly in development environment.
                      </p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">NOTES</h4>
                      <p className="mt-1 text-gray-700">
                        BBrain has agreed to white-label their devices as "MCN Voice Assistant"
                        for all new device shipments starting Week 8.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Nettie API Integration</h3>
                        <p className="text-gray-600 mt-1">Required for shared caregiving agenda</p>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Planned</div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">STATUS DETAILS</h4>
                      <p className="mt-1 text-gray-700">
                        Planning stage. API documentation received. Development scheduled to begin Week 8.
                        Expected to be completed by Week 11.
                      </p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">IMPACT IF DELAYED</h4>
                      <p className="mt-1 text-gray-700">
                        Will delay implementation of collaborative agenda feature. Critical path
                        for family coordination features in Care Manager.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Spencer/Dosell Device Integration</h3>
                        <p className="text-gray-600 mt-1">Required for medication dispenser functionality</p>
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Planned</div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">STATUS DETAILS</h4>
                      <p className="mt-1 text-gray-700">
                        Planning stage. Hardware specifications received. Integration scheduled to
                        begin Week 9. Expected to be completed by Week 14.
                      </p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500">NOTES</h4>
                      <p className="mt-1 text-gray-700">
                        Spencer and Dosell have different APIs requiring separate integration work.
                        Both will be rebranded as "MCN Smart Medication Dispenser" with different models.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MCNComponentDetailPage;

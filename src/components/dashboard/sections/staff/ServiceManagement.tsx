
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Calendar,
  Clock,
  Package,
  CreditCard,
  Tags,
  BadgeDollarSign,
  ShoppingCart,
  Truck,
  Undo2,
  CheckCircle,
  PlusCircle,
  MinusCircle,
  FileBarChart
} from 'lucide-react';

const ServiceManagement: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Membership Management</CardTitle>
          <CardDescription>Subscription details and billing information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-blue-800">Premium Family Plan</h3>
              <div className="text-sm bg-blue-100 text-blue-700 py-1 px-2 rounded-full">Active</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Billing Cycle:</span>
                <span className="font-medium text-blue-800">Monthly (€79,95)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Next Payment:</span>
                <span className="font-medium text-blue-800">June 15, 2023</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Member Since:</span>
                <span className="font-medium text-blue-800">April 2022 (13 months)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Payment Method:</span>
                <span className="font-medium text-blue-800">VISA ending in 4582</span>
              </div>
            </div>
          </div>
          
          <div className="pt-2 space-y-3">
            <div className="font-medium">Plan Management</div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="justify-start">
                <PlusCircle className="h-4 w-4 mr-1" /> Upgrade Plan
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <MinusCircle className="h-4 w-4 mr-1" /> Downgrade Plan
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <CreditCard className="h-4 w-4 mr-1" /> Update Payment
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <FileBarChart className="h-4 w-4 mr-1" /> Billing History
              </Button>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <div className="font-medium mb-2">Available Add-ons</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 border rounded-lg">
                <div>
                  <div className="text-sm font-medium">Extra Safety Sensors</div>
                  <div className="text-xs text-muted-foreground">€5,95/month per sensor</div>
                </div>
                <Button variant="outline" size="sm">Add</Button>
              </div>
              <div className="flex justify-between items-center p-2 border rounded-lg">
                <div>
                  <div className="text-sm font-medium">Advanced Health Monitoring</div>
                  <div className="text-xs text-muted-foreground">€14,95/month</div>
                </div>
                <Button variant="outline" size="sm">Add</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Service Request Management</CardTitle>
          <CardDescription>Installation, maintenance, and service appointments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <div className="font-medium">Technician Visit</div>
                </div>
                <div className="text-xs bg-blue-100 text-blue-700 py-1 px-2 rounded">Scheduled</div>
              </div>
              <div className="text-xs text-blue-700 mb-2">
                May 28, 2023 • 13:00-15:00 • Replace bathroom motion sensor
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm" className="bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200">
                  Reschedule
                </Button>
                <Button variant="outline" size="sm" className="bg-red-100 border-red-300 text-red-700 hover:bg-red-200">
                  Cancel
                </Button>
              </div>
            </div>
            
            <div className="p-3 border border-green-200 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  <div className="font-medium">Remote Configuration</div>
                </div>
                <div className="text-xs bg-green-100 text-green-700 py-1 px-2 rounded">Completed</div>
              </div>
              <div className="text-xs text-green-700 mb-2">
                May 10, 2023 • Update hub settings and optimize Wi-Fi
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm" className="bg-green-100 border-green-300 text-green-700 hover:bg-green-200">
                  View Details
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-3 border-t">
            <div className="font-medium mb-2">Request New Service</div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="justify-start">
                <Calendar className="h-4 w-4 mr-1" /> Installation
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Truck className="h-4 w-4 mr-1" /> Maintenance
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <FileText className="h-4 w-4 mr-1" /> Training
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Clock className="h-4 w-4 mr-1" /> Check-up
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Order Management</CardTitle>
          <CardDescription>Product orders, shipping, and returns</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <Package className="h-5 w-5 mr-2 text-purple-600" />
                  <div>
                    <div className="font-medium">Order #45892</div>
                    <div className="text-xs text-muted-foreground">May 15, 2023</div>
                  </div>
                </div>
                <div className="text-xs bg-amber-100 text-amber-700 py-1 px-2 rounded">Shipping</div>
              </div>
              <div className="text-sm pt-2 pb-1 border-t mt-1">
                1x BBrain Medication Dispenser
              </div>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <div className="flex items-center">
                  <Truck className="h-3 w-3 mr-1" />
                  <span>Est. delivery: May 22</span>
                </div>
                <Button variant="ghost" size="sm" className="h-7 px-2">Track</Button>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <Package className="h-5 w-5 mr-2 text-green-600" />
                  <div>
                    <div className="font-medium">Order #43651</div>
                    <div className="text-xs text-muted-foreground">April 2, 2023</div>
                  </div>
                </div>
                <div className="text-xs bg-green-100 text-green-700 py-1 px-2 rounded">Delivered</div>
              </div>
              <div className="text-sm pt-2 pb-1 border-t mt-1">
                2x Safety Sensors • 1x Pendant Charger
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <Undo2 className="h-3 w-3 mr-1" /> Return
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between pt-2">
            <Button variant="outline" size="sm">Order History</Button>
            <Button variant="outline" size="sm" className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
              <ShoppingCart className="h-4 w-4 mr-1" /> New Order
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Billing Support</CardTitle>
          <CardDescription>Payment processing and invoice management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg space-y-4">
            <div>
              <h3 className="font-medium mb-2">Payment History</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    <span>May 15, 2023</span>
                  </div>
                  <span className="font-medium">€79,95</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    <span>April 15, 2023</span>
                  </div>
                  <span className="font-medium">€79,95</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    <span>March 15, 2023</span>
                  </div>
                  <span className="font-medium">€79,95</span>
                </div>
              </div>
            </div>
            
            <div className="pt-3 border-t">
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Invoice Actions</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <FileText className="h-4 w-4 mr-1" /> Generate Invoice
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <BadgeDollarSign className="h-4 w-4 mr-1" /> Apply Credit
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <Tags className="h-4 w-4 mr-1" /> Apply Discount
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <CreditCard className="h-4 w-4 mr-1" /> Process Refund
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="font-medium text-amber-800 mb-1">Payment Method Issue</div>
            <div className="text-sm text-amber-700 mb-2">
              Client's credit card expires this month. Consider sending a reminder to update payment information to avoid service interruption.
            </div>
            <div className="flex justify-end">
              <Button variant="outline" size="sm" className="bg-amber-100 border-amber-300 text-amber-700 hover:bg-amber-200">
                Send Reminder
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceManagement;

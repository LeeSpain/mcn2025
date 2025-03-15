
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, Star, Package, CreditCard, PlusCircle, TrendingUp, Truck, BadgePercent, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ShopGateway: React.FC = () => {
  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">Shop Gateway</h2>
        <p className="text-muted-foreground">Browse and purchase MCN products and services</p>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="products" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="recommendations" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            Recommendations
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Payment
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>Browse our selection of products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="space-x-2">
                    <Button variant="outline">All Categories</Button>
                    <Button variant="outline">Medical Devices</Button>
                    <Button variant="outline">Health Monitors</Button>
                    <Button variant="outline">Daily Living</Button>
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search products..." 
                      className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[250px]" 
                    />
                    <div className="absolute left-3 top-2.5 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-slate-100 flex items-center justify-center relative">
                      <ShoppingBag className="h-16 w-16 text-slate-300" />
                      <Badge className="absolute top-2 right-2 bg-blue-500">New</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium">Smart Blood Pressure Monitor</h4>
                      <p className="text-sm text-muted-foreground">Wireless BP monitor with smartphone integration</p>
                      <div className="flex items-center mt-2 mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs ml-2">(42 reviews)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">$79.99</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-slate-100 flex items-center justify-center relative">
                      <ShoppingBag className="h-16 w-16 text-slate-300" />
                      <Badge className="absolute top-2 right-2 bg-green-500">Popular</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium">Medication Organizer with Reminders</h4>
                      <p className="text-sm text-muted-foreground">7-day pill organizer with automatic reminders</p>
                      <div className="flex items-center mt-2 mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-xs ml-2">(36 reviews)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">$45.99</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-slate-100 flex items-center justify-center">
                      <ShoppingBag className="h-16 w-16 text-slate-300" />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium">Emergency Response Pendant</h4>
                      <p className="text-sm text-muted-foreground">Waterproof pendant with 24/7 monitoring</p>
                      <div className="flex items-center mt-2 mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < 5 ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-xs ml-2">(128 reviews)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">$89.99</span>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden">
                    <div className="h-48 bg-slate-100 flex items-center justify-center relative">
                      <ShoppingBag className="h-16 w-16 text-slate-300" />
                      <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium">Mobility Assistant Walker</h4>
                      <p className="text-sm text-muted-foreground">Foldable walker with seat and storage</p>
                      <div className="flex items-center mt-2 mb-3">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-xs ml-2">(52 reviews)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold text-lg">$129.99</span>
                          <span className="text-sm text-muted-foreground line-through ml-2">$159.99</span>
                        </div>
                        <Button size="sm">Add to Cart</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-center mt-6">
                  <Button variant="outline" className="flex items-center gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Load More Products
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>Products recommended for you based on your health profile and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Based on Your Health Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-4 items-center border-b pb-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">Blood Pressure Management</h4>
                            <p className="text-sm text-muted-foreground">Products to help monitor and manage hypertension</p>
                          </div>
                          <Button variant="outline" size="sm">View All</Button>
                        </div>
                        
                        <div className="flex gap-4 items-center border-b pb-4">
                          <div className="bg-green-100 p-3 rounded-lg">
                            <Package className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">Mobility Assistance</h4>
                            <p className="text-sm text-muted-foreground">Products to improve mobility and prevent falls</p>
                          </div>
                          <Button variant="outline" size="sm">View All</Button>
                        </div>
                        
                        <div className="flex gap-4 items-center">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <CreditCard className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">Medication Management</h4>
                            <p className="text-sm text-muted-foreground">Products to help organize and remember medications</p>
                          </div>
                          <Button variant="outline" size="sm">View All</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Trending Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 border-b pb-4">
                          <div className="h-16 w-16 bg-slate-100 rounded flex items-center justify-center">
                            <ShoppingBag className="h-8 w-8 text-slate-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">Smart Fall Detection System</h4>
                            <div className="flex items-center mt-1">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-3 w-3 ${i < 5 ? 'fill-current' : ''}`} />
                                ))}
                              </div>
                              <span className="text-xs ml-2">(89 reviews)</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="font-bold">$149.99</span>
                              <Button size="sm" variant="outline">View</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 border-b pb-4">
                          <div className="h-16 w-16 bg-slate-100 rounded flex items-center justify-center">
                            <ShoppingBag className="h-8 w-8 text-slate-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">Automatic Pill Dispenser</h4>
                            <div className="flex items-center mt-1">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-3 w-3 ${i < 4 ? 'fill-current' : ''}`} />
                                ))}
                              </div>
                              <span className="text-xs ml-2">(64 reviews)</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="font-bold">$79.99</span>
                              <Button size="sm" variant="outline">View</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="h-16 w-16 bg-slate-100 rounded flex items-center justify-center">
                            <ShoppingBag className="h-8 w-8 text-slate-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">Remote Health Monitoring Kit</h4>
                            <div className="flex items-center mt-1">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className={`h-3 w-3 ${i < 5 ? 'fill-current' : ''}`} />
                                ))}
                              </div>
                              <span className="text-xs ml-2">(112 reviews)</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="font-bold">$199.99</span>
                              <Button size="sm" variant="outline">View</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="mt-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Subscription Recommendations</CardTitle>
                    <CardDescription>Save money with regular deliveries of essential items</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="border-2 border-blue-200">
                        <CardHeader className="pb-2 text-center">
                          <Badge className="mb-2 mx-auto">Most Popular</Badge>
                          <CardTitle>Monthly Essentials</CardTitle>
                          <CardDescription>Basic health supplies delivered monthly</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="text-3xl font-bold mb-1">$29.99</div>
                          <p className="text-sm text-muted-foreground mb-4">per month</p>
                          <ul className="space-y-2 text-sm mb-6">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Disposable gloves</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Sanitizing wipes</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Basic first aid supplies</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Personal hygiene items</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Subscribe Now</Button>
                        </CardFooter>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2 text-center">
                          <CardTitle>Medication Management</CardTitle>
                          <CardDescription>Monthly pill organizers and medication aids</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="text-3xl font-bold mb-1">$19.99</div>
                          <p className="text-sm text-muted-foreground mb-4">per month</p>
                          <ul className="space-y-2 text-sm mb-6">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Weekly pill organizers</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Pill cutters/crushers</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Medication reminder tools</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Medication tracking sheets</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" variant="outline">Subscribe Now</Button>
                        </CardFooter>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2 text-center">
                          <CardTitle>Wellness Bundle</CardTitle>
                          <CardDescription>Premium health and wellness products</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="text-3xl font-bold mb-1">$49.99</div>
                          <p className="text-sm text-muted-foreground mb-4">per month</p>
                          <ul className="space-y-2 text-sm mb-6">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Vitamins and supplements</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Health monitoring supplies</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Wellness products</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Premium health aids</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" variant="outline">Subscribe Now</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="orders" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Order Management</CardTitle>
                  <CardDescription>Track and manage your orders</CardDescription>
                </div>
                <Button variant="outline">View All Orders</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Order #MCN-39857</h4>
                              <Badge className="bg-blue-500">Processing</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Placed on May 15, 2023</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">Track</Button>
                            <Button variant="outline" size="sm">Details</Button>
                          </div>
                        </div>
                        <div className="mt-4 border-t pt-4">
                          <p className="text-sm mb-2">Estimated delivery: May 20-22, 2023</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Processing</span>
                              <span>Shipping</span>
                              <span>Delivered</span>
                            </div>
                            <Progress value={33} className="h-2" />
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3">
                            <div className="h-16 w-16 bg-slate-100 rounded flex items-center justify-center">
                              <ShoppingBag className="h-8 w-8 text-slate-400" />
                            </div>
                            <div>
                              <p className="font-medium">Smart Blood Pressure Monitor</p>
                              <p className="text-sm text-muted-foreground">Qty: 1 | $79.99</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="h-16 w-16 bg-slate-100 rounded flex items-center justify-center">
                              <ShoppingBag className="h-8 w-8 text-slate-400" />
                            </div>
                            <div>
                              <p className="font-medium">Medication Organizer</p>
                              <p className="text-sm text-muted-foreground">Qty: 1 | $45.99</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Order #MCN-38645</h4>
                              <Badge className="bg-green-500">Delivered</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Placed on April 28, 2023</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">Reorder</Button>
                            <Button variant="outline" size="sm">Details</Button>
                          </div>
                        </div>
                        <div className="mt-4 border-t pt-4">
                          <p className="text-sm mb-2">Delivered on May 3, 2023</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Processing</span>
                              <span>Shipping</span>
                              <span>Delivered</span>
                            </div>
                            <Progress value={100} className="h-2" />
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <div className="h-16 w-16 bg-slate-100 rounded flex items-center justify-center">
                            <ShoppingBag className="h-8 w-8 text-slate-400" />
                          </div>
                          <div>
                            <p className="font-medium">Emergency Response Pendant</p>
                            <p className="text-sm text-muted-foreground">Qty: 1 | $89.99</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Subscriptions</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h4 className="font-medium">Monthly Essentials Bundle</h4>
                            <p className="text-sm text-muted-foreground">$29.99/month - Renews on June 15, 2023</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">Manage</Button>
                            <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">Cancel</Button>
                          </div>
                        </div>
                        <div className="mt-4 border-t pt-4">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 bg-slate-100 rounded flex items-center justify-center">
                              <Package className="h-6 w-6 text-slate-400" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">Next Delivery</p>
                              <p className="text-sm text-muted-foreground">Estimated: June 15-17, 2023</p>
                            </div>
                            <Button variant="outline" size="sm">Edit Items</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods and view invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Saved Payment Methods</h3>
                  <div className="space-y-4">
                    <Card className="bg-gradient-to-r from-slate-700 to-slate-900 text-white">
                      <CardContent className="p-4">
                        <div className="flex justify-between">
                          <div>
                            <CreditCard className="h-8 w-8 mb-4" />
                            <p className="font-mono text-lg">•••• •••• •••• 4582</p>
                          </div>
                          <Badge className="bg-white text-black">Default</Badge>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <p className="text-xs opacity-80">CARD HOLDER</p>
                            <p>John Smith</p>
                          </div>
                          <div>
                            <p className="text-xs opacity-80">EXPIRES</p>
                            <p>09/25</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-6 w-6" />
                            <div>
                              <p className="font-medium">VISA ending in 7891</p>
                              <p className="text-sm text-muted-foreground">Expires 12/24</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">Edit</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="flex justify-center mt-4">
                      <Button variant="outline" className="flex items-center gap-2">
                        <PlusCircle className="h-4 w-4" />
                        Add Payment Method
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Recent Transactions</h3>
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">Order #MCN-39857</p>
                            <p className="text-sm text-muted-foreground">May 15, 2023</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">$125.98</p>
                            <Badge className="bg-green-500">Paid</Badge>
                          </div>
                        </div>
                        
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">Monthly Subscription</p>
                            <p className="text-sm text-muted-foreground">May 15, 2023</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">$29.99</p>
                            <Badge className="bg-green-500">Paid</Badge>
                          </div>
                        </div>
                        
                        <div className="p-4 flex justify-between items-center">
                          <div>
                            <p className="font-medium">Order #MCN-38645</p>
                            <p className="text-sm text-muted-foreground">April 28, 2023</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">$89.99</p>
                            <Badge className="bg-green-500">Paid</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="flex justify-center mt-4">
                    <Button variant="outline">View All Transactions</Button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Billing Information</h3>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium mb-1">Billing Address</h4>
                          <p className="text-sm">John Smith</p>
                          <p className="text-sm">123 Main Street</p>
                          <p className="text-sm">Apt 4B</p>
                          <p className="text-sm">New York, NY 10001</p>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Email Receipts</h4>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                        <p className="text-sm mt-1">Receipts sent to: john.smith@example.com</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ShopGateway;

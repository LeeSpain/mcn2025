
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mic, Calendar, Settings, Play, PauseCircle, Volume2, VolumeX, CheckCircle, Plus, Clock, Edit, Save, Trash2, HelpCircle, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const BBrainAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("Emma");

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-col space-y-1.5">
        <h2 className="text-2xl font-semibold tracking-tight">BBrain Voice Assistant</h2>
        <p className="text-muted-foreground">Configure and interact with your BBrain voice assistant</p>
      </div>

      <Tabs defaultValue="commands" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="commands" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Command Center
          </TabsTrigger>
          <TabsTrigger value="routines" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Routines
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Voice Settings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="commands" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Command Center</CardTitle>
              <CardDescription>View and customize voice commands</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg">
                  <div 
                    className={`mb-6 relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${isListening ? 'bg-blue-100 ring-4 ring-blue-300 scale-110' : 'bg-slate-100 hover:bg-slate-200'}`}
                    onClick={() => setIsListening(!isListening)}
                  >
                    <Mic className={`h-10 w-10 ${isListening ? 'text-blue-600' : 'text-slate-600'}`} />
                    {isListening && (
                      <div className="absolute -inset-3 border-4 border-blue-100 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-medium">
                    {isListening ? "Listening..." : "Click to Start Listening"}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mt-2 max-w-md">
                    {isListening 
                      ? "I'm listening for your commands. Ask me anything or give me instructions." 
                      : "Click the microphone button to activate BBrain voice assistant."
                    }
                  </p>
                  
                  <div className="flex items-center space-x-4 mt-6">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                    </Button>
                    <div className="w-48">
                      <Slider 
                        value={volume} 
                        onValueChange={setVolume} 
                        max={100} 
                        step={1}
                        disabled={isMuted}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Quick Commands</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <Volume2 className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">"What's my schedule today?"</p>
                            <p className="text-sm text-muted-foreground">Check calendar events</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Volume2 className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">"Take my blood pressure"</p>
                            <p className="text-sm text-muted-foreground">Start health monitoring</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-purple-100 p-2 rounded-full">
                            <Volume2 className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-medium">"Call my caregiver"</p>
                            <p className="text-sm text-muted-foreground">Initiate video call</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-amber-100 p-2 rounded-full">
                            <Volume2 className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <p className="font-medium">"Turn on living room lights"</p>
                            <p className="text-sm text-muted-foreground">Control smart home</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-red-100 p-2 rounded-full">
                            <Volume2 className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">"What medications do I take today?"</p>
                            <p className="text-sm text-muted-foreground">Check medication schedule</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-dashed border-2 hover:bg-slate-50 cursor-pointer transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 p-2 rounded-full">
                            <Plus className="h-5 w-5 text-slate-600" />
                          </div>
                          <div>
                            <p className="font-medium">Add Custom Command</p>
                            <p className="text-sm text-muted-foreground">Create new voice command</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Recent Interactions</h3>
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        <div className="p-4 flex items-start gap-3">
                          <div className="mt-1">
                            <Mic className="h-5 w-5 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">"What's the weather forecast for today?"</p>
                            <p className="text-sm text-muted-foreground">Today, 9:32 AM</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex items-start gap-3">
                          <div className="mt-1">
                            <Avatar className="h-5 w-5">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback>BB</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">Today will be mostly sunny with a high of 72°F and a low of 58°F. There's a 10% chance of rain in the afternoon.</p>
                            <p className="text-xs text-muted-foreground">Today, 9:32 AM</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex items-start gap-3">
                          <div className="mt-1">
                            <Mic className="h-5 w-5 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">"Remind me to take my medication at 2 PM"</p>
                            <p className="text-sm text-muted-foreground">Today, 8:15 AM</p>
                          </div>
                        </div>
                        
                        <div className="p-4 flex items-start gap-3">
                          <div className="mt-1">
                            <Avatar className="h-5 w-5">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback>BB</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">I've set a reminder for your medication at 2:00 PM today.</p>
                            <p className="text-xs text-muted-foreground">Today, 8:15 AM</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-center p-4 border-t">
                      <Button variant="outline">View All Interactions</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="routines" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Routine Creator</CardTitle>
                  <CardDescription>Create and manage your daily routines</CardDescription>
                </div>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  New Routine
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Active Routines</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <Clock className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Morning Routine</h4>
                              <p className="text-sm text-muted-foreground">Runs daily at 8:00 AM</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Read the weather forecast</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Read today's calendar events</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Turn on kitchen lights</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Medication reminder</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="bg-purple-100 p-2 rounded-full">
                              <Clock className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Evening Routine</h4>
                              <p className="text-sm text-muted-foreground">Runs daily at 8:00 PM</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Turn on living room lights</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Read tomorrow's weather forecast</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Evening medication reminder</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Set alarm for tomorrow</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-full">
                              <Clock className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">Medication Routine</h4>
                              <p className="text-sm text-muted-foreground">Runs daily at 2:00 PM</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Afternoon medication reminder</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Check for new messages</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>Record daily health log</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Routine Builder</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <Label htmlFor="routine-name">Routine Name</Label>
                          <Input id="routine-name" placeholder="Enter routine name" />
                        </div>
                        
                        <div className="space-y-1">
                          <Label htmlFor="routine-time">Trigger Time</Label>
                          <Input id="routine-time" type="time" />
                        </div>
                        
                        <div className="space-y-1">
                          <Label htmlFor="routine-days">Repeat On</Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                              <Button 
                                key={day} 
                                variant="outline" 
                                className="h-8 px-3"
                              >
                                {day}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label className="mb-2 block">Actions</Label>
                        <Card className="border-dashed">
                          <CardContent className="p-4 space-y-3">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <div className="bg-blue-100 p-1.5 rounded-full">
                                  <Volume2 className="h-4 w-4 text-blue-600" />
                                </div>
                                <span className="text-sm">Read the weather forecast</span>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <div className="bg-green-100 p-1.5 rounded-full">
                                  <Volume2 className="h-4 w-4 text-green-600" />
                                </div>
                                <span className="text-sm">Read today's calendar events</span>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                              <Plus className="h-4 w-4" />
                              Add Action
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Save Routine</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Voice Settings</CardTitle>
              <CardDescription>Configure your BBrain voice assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Assistant Voice</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {["Emma", "Michael", "Sophia", "James", "Olivia", "David"].map((voice) => (
                      <Card 
                        key={voice} 
                        className={`cursor-pointer hover:bg-slate-50 transition-colors ${selectedVoice === voice ? 'border-blue-500 bg-blue-50' : ''}`}
                        onClick={() => setSelectedVoice(voice)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback>{voice.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <h4 className="font-medium">{voice}</h4>
                              <div className="flex items-center mt-1">
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                  <Play className="h-3 w-3" />
                                </Button>
                                <div className="text-xs text-muted-foreground">Preview voice</div>
                              </div>
                            </div>
                            {selectedVoice === voice && (
                              <CheckCircle className="h-5 w-5 text-blue-600" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Voice Settings</h3>
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Voice Speed</h4>
                          <p className="text-sm text-muted-foreground">Adjust how fast the assistant speaks</p>
                        </div>
                        <div className="w-48">
                          <Slider defaultValue={[50]} max={100} step={1} />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Voice Pitch</h4>
                          <p className="text-sm text-muted-foreground">Adjust the pitch of the assistant's voice</p>
                        </div>
                        <div className="w-48">
                          <Slider defaultValue={[50]} max={100} step={1} />
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Volume Level</h4>
                          <p className="text-sm text-muted-foreground">Adjust the assistant's volume</p>
                        </div>
                        <div className="w-48">
                          <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Assistant Behavior</h3>
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Wake Word</h4>
                          <p className="text-sm text-muted-foreground">Choose the wake word to activate the assistant</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {isEditing ? (
                            <>
                              <Input defaultValue="Hey BBrain" className="w-32" />
                              <Button variant="ghost" size="icon" onClick={() => setIsEditing(false)}>
                                <Save className="h-4 w-4" />
                              </Button>
                            </>
                          ) : (
                            <>
                              <Badge>Hey BBrain</Badge>
                              <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Voice Activation</h4>
                          <p className="text-sm text-muted-foreground">Allow activation by voice command</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Passive Listening</h4>
                          <p className="text-sm text-muted-foreground">Allow assistant to listen for wake word</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Response Length</h4>
                          <p className="text-sm text-muted-foreground">Prefer shorter or longer responses</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Brief</span>
                          <Slider defaultValue={[50]} max={100} step={1} className="w-24" />
                          <span className="text-sm">Detailed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Privacy & Security</h3>
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Voice Data Storage</h4>
                          <p className="text-sm text-muted-foreground">Store voice interactions for better responses</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Voice Activity History</h4>
                          <p className="text-sm text-muted-foreground">Keep history of voice commands and actions</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">View History</Button>
                          <Button variant="outline" size="sm">Clear History</Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h4 className="font-medium">Voice Recognition Training</h4>
                          <p className="text-sm text-muted-foreground">Improve recognition of your voice patterns</p>
                        </div>
                        <Button>Start Training</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset to Defaults</Button>
                  <Button>Save Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BBrainAssistant;

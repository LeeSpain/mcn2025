
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main>
        <section className="py-20 bg-gradient-to-b from-mcn-blue/10 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-mcn-blue-dark to-mcn-blue bg-clip-text text-transparent mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore the latest news, trends, and insights in healthcare technology and remote patient care.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2">
                <article className="border border-mcn-gray rounded-xl overflow-hidden mb-8">
                  <div className="aspect-video bg-mcn-blue/10"></div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium bg-mcn-blue/10 text-mcn-blue px-2 py-1 rounded">Healthcare Innovation</span>
                    </div>
                    <h2 className="text-2xl font-display font-semibold mb-3">The Future of Remote Patient Monitoring in Home Care Settings</h2>
                    <p className="text-muted-foreground mb-4">
                      How new technologies are enabling better care for patients in the comfort of their own homes, improving outcomes and reducing hospitalizations.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-mcn-blue/20"></div>
                        <span className="text-sm font-medium">Dr. Sarah Johnson</span>
                      </div>
                      <span className="text-sm text-muted-foreground">June 15, 2023</span>
                    </div>
                  </div>
                </article>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <article className="border border-mcn-gray rounded-xl overflow-hidden">
                    <div className="aspect-video bg-mcn-blue/10"></div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="text-xs font-medium bg-mcn-blue/10 text-mcn-blue px-2 py-1 rounded">Tech Updates</span>
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-2">Integrating AI Assistants into Elder Care</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        How artificial intelligence is enhancing care management for seniors while preserving independence.
                      </p>
                      <span className="text-sm text-muted-foreground">May 22, 2023</span>
                    </div>
                  </article>
                  <article className="border border-mcn-gray rounded-xl overflow-hidden">
                    <div className="aspect-video bg-mcn-blue/10"></div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="text-xs font-medium bg-mcn-blue/10 text-mcn-blue px-2 py-1 rounded">Case Study</span>
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-2">How Riverside Health Reduced Readmissions by 32%</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        A detailed look at how one healthcare network transformed patient outcomes with connected care.
                      </p>
                      <span className="text-sm text-muted-foreground">April 8, 2023</span>
                    </div>
                  </article>
                </div>
              </div>
              
              <div>
                <div className="sticky top-20">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-mcn-blue hover:underline">Healthcare Innovation (12)</a></li>
                      <li><a href="#" className="text-mcn-blue hover:underline">Tech Updates (8)</a></li>
                      <li><a href="#" className="text-mcn-blue hover:underline">Case Studies (5)</a></li>
                      <li><a href="#" className="text-mcn-blue hover:underline">Patient Stories (7)</a></li>
                      <li><a href="#" className="text-mcn-blue hover:underline">Industry News (10)</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Popular Posts</h3>
                    <div className="space-y-4">
                      <a href="#" className="flex items-start space-x-3">
                        <div className="w-16 h-16 bg-mcn-blue/10 rounded flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium line-clamp-2">5 Ways Technology Is Transforming Home Healthcare</h4>
                          <p className="text-sm text-muted-foreground">March 12, 2023</p>
                        </div>
                      </a>
                      <a href="#" className="flex items-start space-x-3">
                        <div className="w-16 h-16 bg-mcn-blue/10 rounded flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium line-clamp-2">The Role of Telehealth in Modern Nursing Practice</h4>
                          <p className="text-sm text-muted-foreground">February 28, 2023</p>
                        </div>
                      </a>
                      <a href="#" className="flex items-start space-x-3">
                        <div className="w-16 h-16 bg-mcn-blue/10 rounded flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium line-clamp-2">Privacy and Security in Connected Healthcare Devices</h4>
                          <p className="text-sm text-muted-foreground">January 15, 2023</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;

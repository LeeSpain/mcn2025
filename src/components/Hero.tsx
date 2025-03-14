
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0');
        const moveX = x * speed;
        const moveY = y * speed;
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-mcn-blue-light/20 rounded-full blur-3xl parallax-element"
          data-speed="20"
        />
        <div 
          className="absolute top-[60%] -left-[5%] w-[30%] h-[30%] bg-mcn-blue/10 rounded-full blur-3xl parallax-element"
          data-speed="15"
        />
        <div 
          className="absolute top-[40%] right-[10%] w-[15%] h-[15%] bg-mcn-blue-light/30 rounded-full blur-2xl parallax-element"
          data-speed="30"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <span className="chip">{t('hero.chip', 'Revolutionizing Home Care')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance">
              {t('hero.title.part1', 'Unifying Care for ')}
              <span className="text-mcn-blue">{t('hero.title.part2', 'Independence')}</span> & 
              <span className="text-mcn-blue">{t('hero.title.part3', 'Connection')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 text-balance">
              {t('hero.description', 'MCN combines monitoring, communication, and support in one seamless platform, helping clients live independently while giving caregivers powerful tools to provide better care.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/signup" className="primary-button flex items-center justify-center group">
                {t('hero.cta.getStarted', 'Get Started')} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/#features" className="outline-button flex items-center justify-center">
                {t('hero.cta.learnMore', 'Learn More')}
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="aspect-[4/3] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] relative z-10">
                  <div className="glass-card w-full h-full shadow-soft-lg overflow-hidden rounded-2xl">
                    {/* Device mockup showing the MCN app interface */}
                    <div className="relative w-full h-full p-6 bg-gradient-to-br from-mcn-gray-light to-white">
                      <div className="absolute top-6 left-6 flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-mcn-gray-dark opacity-20"></div>
                        <div className="w-3 h-3 rounded-full bg-mcn-gray-dark opacity-20"></div>
                        <div className="w-3 h-3 rounded-full bg-mcn-gray-dark opacity-20"></div>
                      </div>
                      
                      <div className="mt-8 space-y-4">
                        {/* Header with time */}
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{t('hero.dashboard.tasks', 'Today\'s Tasks')}</h3>
                          <div className="text-sm text-mcn-gray-dark">9:41 AM</div>
                        </div>
                        
                        {/* Task list */}
                        <div className="space-y-3">
                          <div className="p-3 bg-white rounded-lg border border-mcn-gray flex items-start">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                              <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">{t('hero.dashboard.medication', 'Aspirin')}</div>
                              <div className="text-sm text-mcn-gray-dark">{t('hero.dashboard.completed', '8:00 AM - Completed')}</div>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-white rounded-lg border border-mcn-gray flex items-start">
                            <div className="w-5 h-5 rounded-full bg-mcn-blue-light/30 flex items-center justify-center mt-0.5">
                              <div className="w-3 h-3 rounded-full bg-mcn-blue"></div>
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">{t('hero.dashboard.bloodPressure', 'Blood Pressure Check')}</div>
                              <div className="text-sm text-mcn-gray-dark">{t('hero.dashboard.upcoming', '10:30 AM - Upcoming')}</div>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-white rounded-lg border border-mcn-gray flex items-start">
                            <div className="w-5 h-5 rounded-full bg-mcn-blue-light/30 flex items-center justify-center mt-0.5">
                              <div className="w-3 h-3 rounded-full bg-mcn-blue"></div>
                            </div>
                            <div className="ml-3">
                              <div className="font-medium">{t('hero.dashboard.appointment', 'Doctor Appointment')}</div>
                              <div className="text-sm text-mcn-gray-dark">{t('hero.dashboard.afternoon', '2:00 PM - Upcoming')}</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom navigation */}
                        <div className="mt-auto pt-6">
                          <div className="flex justify-around items-center">
                            <div className="flex flex-col items-center opacity-60">
                              <div className="w-6 h-6 rounded-full bg-mcn-blue mb-1"></div>
                              <span className="text-xs">{t('hero.dashboard.nav.tasks', 'Tasks')}</span>
                            </div>
                            <div className="flex flex-col items-center opacity-40">
                              <div className="w-6 h-6 rounded-full bg-mcn-gray-dark mb-1"></div>
                              <span className="text-xs">{t('hero.dashboard.nav.health', 'Health')}</span>
                            </div>
                            <div className="flex flex-col items-center opacity-40">
                              <div className="w-6 h-6 rounded-full bg-mcn-gray-dark mb-1"></div>
                              <span className="text-xs">{t('hero.dashboard.nav.connect', 'Connect')}</span>
                            </div>
                            <div className="flex flex-col items-center opacity-40">
                              <div className="w-6 h-6 rounded-full bg-mcn-gray-dark mb-1"></div>
                              <span className="text-xs">{t('hero.dashboard.nav.shop', 'Shop')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div 
                className="absolute top-[5%] right-[10%] w-16 h-16 glass-card flex items-center justify-center rounded-xl shadow-soft animate-float parallax-element"
                data-speed="15"
                style={{ animationDelay: '0.2s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-mcn-blue-light/40 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-mcn-blue"></div>
                </div>
              </div>
              
              <div 
                className="absolute bottom-[15%] left-[5%] w-20 h-20 glass-card flex items-center justify-center rounded-xl shadow-soft animate-float parallax-element"
                data-speed="10"
                style={{ animationDelay: '0.8s' }}
              >
                <div className="w-10 h-10 rounded-lg bg-mcn-blue flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

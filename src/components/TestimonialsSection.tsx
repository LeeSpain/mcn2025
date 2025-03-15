
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from '@/context/LanguageContext';
import { Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    content: "MCN has completely transformed how I stay connected with my family. The app is so intuitive, even for someone my age who isn't tech-savvy.",
    author: "Maria van den Berg",
    role: "Client, 78",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    content: "As a caregiver, MCN has made coordinating care so much easier. I can check in on my clients remotely and prioritize in-person visits based on actual needs.",
    author: "Thomas Visser",
    role: "Professional Caregiver",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    content: "The peace of mind this system gives me is priceless. I can see that my mother is active and following her routine, without having to call and potentially disturb her.",
    author: "Sophia Jansen",
    role: "Family Member",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    content: "Implementing MCN across our care network has improved efficiency by 35% and significantly increased client satisfaction ratings.",
    author: "Dr. Hendrik Meyer",
    role: "Healthcare Director",
    avatar: "/placeholder.svg"
  },
  {
    id: 5,
    content: "The AI assistant helps me remember my medication schedule and even suggests when I should rest. It feels like having a friendly nurse at home.",
    author: "Jan de Vries",
    role: "Client, 82",
    avatar: "/placeholder.svg"
  }
];

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(0,119,182,0.08),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">{t('testimonials.title', 'What Our Users Say')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle', 'Read about real experiences from clients, healthcare professionals, and family members who use MCN daily.')}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1">
                    <Card className="border border-gray-100 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col min-h-[260px]">
                        <div className="mb-4 text-mcn-blue">
                          <Quote size={28} className="opacity-80" />
                        </div>
                        <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                        <div className="mt-auto flex items-center">
                          <Avatar className="h-10 w-10 border border-gray-200">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                            <AvatarFallback className="bg-mcn-blue/10 text-mcn-blue">
                              {testimonial.author.split(' ').map(name => name[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="ml-3">
                            <h5 className="font-medium">{testimonial.author}</h5>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-mcn-blue text-white font-medium hover:bg-mcn-blue-dark transition-colors">
            {t('testimonials.cta', 'Connect With Us')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

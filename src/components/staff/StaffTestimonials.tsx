
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, imageUrl }) => (
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

const StaffTestimonials: React.FC = () => {
  return (
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
  );
};

export default StaffTestimonials;

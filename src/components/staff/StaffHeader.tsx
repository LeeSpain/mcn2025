
import React from 'react';

const StaffHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="mb-3">
        <div className="chip mx-auto">For Staff</div>
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
        Streamlined Care Management
      </h1>
      <p className="text-xl text-muted-foreground">
        MCN gives care professionals powerful tools to reduce administrative burden and focus on what matters most: providing quality care.
      </p>
    </div>
  );
};

export default StaffHeader;


import React from 'react';

const ClientsHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <div className="mb-3">
        <div className="chip mx-auto">For Clients</div>
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-6">
        Independent Living Made Simple
      </h1>
      <p className="text-xl text-muted-foreground">
        MCN provides easy-to-use tools that support independent living while maintaining connections with loved ones and caregivers.
      </p>
    </div>
  );
};

export default ClientsHeader;

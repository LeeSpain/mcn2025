
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import EnterpriseHeader from '@/components/enterprise/EnterpriseHeader';
import EnterpriseBenefits from '@/components/enterprise/EnterpriseBenefits';
import EnterpriseDashboard from '@/components/enterprise/EnterpriseDashboard';
import EnterpriseCallToAction from '@/components/enterprise/EnterpriseCallToAction';

const EnterprisePage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-20 md:pt-24">
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-[50%] h-[90%] bg-mcn-blue/5 rounded-l-[100px] transform -translate-y-[20%]"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <EnterpriseHeader />
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
              <EnterpriseBenefits />
              <EnterpriseDashboard />
            </div>
            
            <EnterpriseCallToAction />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EnterprisePage;

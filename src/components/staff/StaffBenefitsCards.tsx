
import React from 'react';
import { Clock, Users, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const StaffBenefitsCards: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-display font-bold mb-6">{t('staff.benefits.title', 'Staff Benefits')}</h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
        {t('staff.benefits.description', 'MCN is designed to help care professionals deliver better care while reducing administrative burden.')}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mb-6">
            <Clock size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">{t('staff.benefitsCards.timeTitle', 'Save 25% Admin Time')}</h3>
          <p className="text-muted-foreground">
            {t('staff.benefitsCards.timeDescription', 'Reduce paperwork and administrative tasks through automation and smart workflow design.')}
          </p>
        </div>
        
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mb-6">
            <Users size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">{t('staff.benefitsCards.careTitle', 'Improve Client Care')}</h3>
          <p className="text-muted-foreground">
            {t('staff.benefitsCards.careDescription', 'Focus on what matters most - delivering personalized care to your clients.')}
          </p>
        </div>
        
        <div className="glass-card p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-mcn-blue/10 flex items-center justify-center text-mcn-blue mb-6">
            <FileText size={28} />
          </div>
          <h3 className="text-xl font-semibold mb-3">{t('staff.benefitsCards.docsTitle', 'Simplified Documentation')}</h3>
          <p className="text-muted-foreground">
            {t('staff.benefitsCards.docsDescription', 'Automated reporting and documentation that meets compliance requirements.')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffBenefitsCards;

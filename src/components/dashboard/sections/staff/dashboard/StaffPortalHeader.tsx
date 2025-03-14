
import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Clock, Bell, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface StaffPortalHeaderProps {
  agentStatus: 'available' | 'busy' | 'away';
  setAgentStatus: (status: 'available' | 'busy' | 'away') => void;
}

const StaffPortalHeader: React.FC<StaffPortalHeaderProps> = ({ 
  agentStatus, 
  setAgentStatus 
}) => {
  const { t } = useLanguage();
  
  const getStatusButtonClass = (status: string) => {
    switch(status) {
      case 'available':
        return 'bg-green-100 text-green-700 border-green-200 hover:bg-green-200';
      case 'busy':
        return 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200';
      case 'away':
        return 'bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200';
      default:
        return '';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'available':
        return t('staff.status.available');
      case 'busy':
        return t('staff.status.busy');
      case 'away':
        return t('staff.status.away');
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 bg-white p-4 rounded-lg shadow">
      <div>
        <h1 className="text-2xl font-bold">{t('staff.portal.title')}</h1>
        <p className="text-muted-foreground">{t('staff.portal.subtitle')}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className={getStatusButtonClass(agentStatus)}
          onClick={() => {
            const nextStatus = agentStatus === 'available' ? 'busy' : agentStatus === 'busy' ? 'away' : 'available';
            setAgentStatus(nextStatus);
          }}
        >
          <User className="mr-2 h-4 w-4" />
          {getStatusText(agentStatus)}
        </Button>
        <Button variant="outline" size="sm">
          <Clock className="mr-2 h-4 w-4" />
          {t('staff.workSession')}: 4:25:12
        </Button>
        <Button variant="outline" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </Button>
        <Button variant="outline" size="sm">
          <HelpCircle className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default StaffPortalHeader;

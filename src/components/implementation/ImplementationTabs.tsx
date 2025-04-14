
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ImplementationProgress from '@/components/implementation/ImplementationProgress';
import ImplementationTimeline from '@/components/implementation/ImplementationTimeline';
import GapAnalysisSummary from '@/components/implementation/GapAnalysisSummary';
import SupplierIntegration from '@/components/implementation/SupplierIntegration';
import ServiceGapAnalysis from '@/components/implementation/ServiceGapAnalysis';
import { GapAnalysisItem, ServiceCategory, ImplementationPhase, ComponentStatus } from '@/types/implementation-types';
import GapCategorySummary from '@/components/implementation/GapCategorySummary';

interface ImplementationTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  componentsStatus: ComponentStatus[];
  implementationPhases: ImplementationPhase[];
  gapAnalysisData: GapAnalysisItem[];
  supplierCategories: ServiceCategory[];
}

const ImplementationTabs: React.FC<ImplementationTabsProps> = ({
  activeTab,
  setActiveTab,
  componentsStatus,
  implementationPhases,
  gapAnalysisData,
  supplierCategories
}) => {
  // Handler for viewing all gaps
  const handleViewAllGaps = () => {
    setActiveTab('gaps');
  };
  
  return (
    <Tabs 
      defaultValue="overview" 
      value={activeTab} 
      onValueChange={setActiveTab} 
      className="w-full"
    >
      <TabsList className="grid grid-cols-4 mb-6 max-w-lg mx-auto">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
        <TabsTrigger value="gaps">Gaps</TabsTrigger>
        <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview" className="space-y-8">
        <ImplementationProgress components={componentsStatus} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ImplementationTimeline phases={implementationPhases.slice(0, 5)} />
          </div>
          <div>
            <GapAnalysisSummary 
              gaps={gapAnalysisData.slice(0, 5)} 
              onViewAllClick={handleViewAllGaps} 
            />
          </div>
        </div>
      </TabsContent>

      {/* Timeline Tab */}
      <TabsContent value="timeline" className="space-y-8">
        <ImplementationTimeline phases={implementationPhases} />
      </TabsContent>

      {/* Gaps Tab */}
      <TabsContent value="gaps" className="space-y-8">
        <GapAnalysisSummary 
          gaps={gapAnalysisData} 
          onViewAllClick={() => {}} 
        />
        
        <ServiceGapAnalysis />
        
        <GapCategorySummary />
      </TabsContent>

      {/* Suppliers Tab */}
      <TabsContent value="suppliers" className="space-y-8">
        <SupplierIntegration categories={supplierCategories} />
      </TabsContent>
    </Tabs>
  );
};

export default ImplementationTabs;

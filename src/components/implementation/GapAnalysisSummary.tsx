
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface GapItem {
  gap: string;
  component: string;
  priority: 'High' | 'Medium' | 'Low';
  status: string;
}

interface GapAnalysisSummaryProps {
  gaps: GapItem[];
  onViewAllClick: () => void;
}

const GapAnalysisSummary: React.FC<GapAnalysisSummaryProps> = ({ gaps, onViewAllClick }) => {
  const { t } = useLanguage();
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t('implementation.gaps.title', 'Gap Analysis Summary')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Gap</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">MCN Component</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Priority</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {gaps.slice(0, 5).map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{item.gap}</td>
                  <td className="py-3 px-4 text-sm">{item.component}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${item.priority === 'High' ? 'bg-red-100 text-red-800' : 
                        item.priority === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                        'bg-blue-100 text-blue-800'}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${item.status === 'Planned' ? 'bg-blue-100 text-blue-800' : 
                        item.status === 'In Progress' ? 'bg-amber-100 text-amber-800' : 
                        item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {gaps.length > 5 && (
          <div className="mt-2 text-right">
            <button 
              onClick={onViewAllClick}
              className="text-blue-500 hover:underline text-sm flex items-center justify-end ml-auto"
            >
              {t('implementation.viewDetails', 'View all')} {gaps.length} gaps
              <ArrowRight className="h-3 w-3 ml-1" />
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GapAnalysisSummary;

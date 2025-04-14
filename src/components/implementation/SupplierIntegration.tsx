
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare } from 'lucide-react';

interface SupplierCategory {
  title: string;
  description: string;
  suppliers: string[];
}

interface SupplierIntegrationProps {
  categories: SupplierCategory[];
}

const SupplierIntegration: React.FC<SupplierIntegrationProps> = ({ categories }) => {
  const { t } = useLanguage();
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{t('implementation.suppliers.title', 'Supplier Integration')}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-2 flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {category.suppliers.map((supplier, idx) => (
                  <div key={idx} className="bg-gray-50 px-3 py-2 rounded-md text-sm">
                    {supplier}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierIntegration;

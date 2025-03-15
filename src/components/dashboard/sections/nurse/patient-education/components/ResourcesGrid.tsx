
import React from 'react';
import { BookOpen } from 'lucide-react';
import ResourceCard from './ResourceCard';
import { EducationMaterial } from '../utils/types';

interface ResourcesGridProps {
  materials: EducationMaterial[];
}

const ResourcesGrid: React.FC<ResourcesGridProps> = ({ materials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {materials.map(material => (
        <ResourceCard key={material.id} material={material} />
      ))}

      {materials.length === 0 && (
        <div className="col-span-full text-center p-8 text-gray-500">
          <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-2" />
          <p>No resources found matching your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default ResourcesGrid;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, ArrowUpRight, Share2 } from 'lucide-react';
import { EducationMaterial } from '../utils/types';
import { getTypeIcon, handleViewResource, handleAssignResource } from '../utils/helpers';

interface ResourceCardProps {
  material: EducationMaterial;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ material }) => {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className={`p-2 ${
        material.type === 'Video' ? 'bg-blue-50' : 
        material.type === 'Article' ? 'bg-green-50' : 
        material.type === 'Interactive' ? 'bg-purple-50' : 
        'bg-red-50'
      }`}>
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded-full text-xs ${
            material.type === 'Video' ? 'bg-blue-100 text-blue-800' : 
            material.type === 'Article' ? 'bg-green-100 text-green-800' : 
            material.type === 'Interactive' ? 'bg-purple-100 text-purple-800' : 
            'bg-red-100 text-red-800'
          }`}>
            {material.type}
          </span>
          <span className="text-xs text-gray-500 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {material.duration}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start mb-2">
          {getTypeIcon(material.type)}
          <h3 className="font-medium ml-2">{material.title}</h3>
        </div>
        <div className="text-xs text-gray-500 mb-3 flex justify-between">
          <span>Category: {material.category}</span>
          <span>Updated: {material.lastUpdated}</span>
        </div>
        <div className="flex justify-between mt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1"
            onClick={() => handleViewResource(material.title)}
          >
            <ArrowUpRight className="h-4 w-4" />
            View
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1"
            onClick={() => handleAssignResource(material.title)}
          >
            <Share2 className="h-4 w-4" />
            Assign
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;

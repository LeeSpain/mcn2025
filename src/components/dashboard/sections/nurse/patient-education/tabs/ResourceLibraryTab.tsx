
import React, { useState } from 'react';
import { BookOpen, Search, Plus, Download, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ResourcesGrid from '../components/ResourceCard';
import { educationMaterials } from '../utils/data';
import { getTypeIcon } from '../utils/helpers';

const ResourceLibraryTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Get unique categories for filter
  const categories = ['All Categories', ...new Set(educationMaterials.map(item => item.category))];

  // Filter materials based on search and category
  const filteredMaterials = educationMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          material.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle>Educational Resources</CardTitle>
              <CardDescription>
                Browse and manage client education materials
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search resources..." 
                  className="pl-8 pr-4 py-2 border rounded-md w-full sm:w-48" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className="pl-3 pr-8 py-2 border rounded-md appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResourcesGrid materials={filteredMaterials} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export List
          </Button>
          <Button size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            Upload New Resource
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Popular Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {educationMaterials
              .filter(material => material.popular)
              .map(material => (
                <div key={material.id} className="flex items-center p-2 border-b last:border-0">
                  {getTypeIcon(material.type)}
                  <div className="ml-2 flex-1">
                    <div className="text-sm font-medium">{material.title}</div>
                    <div className="text-xs text-gray-500">{material.category}</div>
                  </div>
                  <ThumbsUp className="h-4 w-4 text-blue-500" />
                </div>
              ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recently Updated</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {educationMaterials
              .sort((a, b) => a.lastUpdated.localeCompare(b.lastUpdated))
              .slice(0, 4)
              .map(material => (
                <div key={material.id} className="flex items-center p-2 border-b last:border-0">
                  {getTypeIcon(material.type)}
                  <div className="ml-2 flex-1">
                    <div className="text-sm font-medium">{material.title}</div>
                    <div className="text-xs text-gray-500">{material.lastUpdated}</div>
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Resource Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {[...new Set(educationMaterials.map(item => item.category))].map(category => (
              <div key={category} className="flex items-center justify-between p-2 border-b last:border-0">
                <span>{category}</span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                  {educationMaterials.filter(item => item.category === category).length} resources
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Export tab icon component for use in tab headers
ResourceLibraryTab.Icon = () => <BookOpen className="h-4 w-4" />;

export default ResourceLibraryTab;

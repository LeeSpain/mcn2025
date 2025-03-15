
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PostCallProcessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PostCallProcessCard: React.FC<PostCallProcessCardProps> = ({
  icon: Icon,
  title,
  description
}) => {
  return (
    <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 h-full">
      <div className="flex items-center mb-3">
        <div className="bg-indigo-100 p-2 rounded-full mr-3">
          <Icon className="h-5 w-5 text-indigo-600" />
        </div>
        <h5 className="font-semibold">{title}</h5>
      </div>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default PostCallProcessCard;

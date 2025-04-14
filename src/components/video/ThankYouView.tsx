
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { X, RefreshCw } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ThankYouViewProps {
  onWatchAgain: () => void;
  onClose: () => void;
}

const ThankYouView: React.FC<ThankYouViewProps> = ({ onWatchAgain, onClose }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col items-center justify-center">
      <AspectRatio ratio={16/9} className="w-full overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center p-3">
          <Avatar className="h-20 w-20 border-4 border-mcn-blue shadow-lg mb-4">
            <AvatarImage src="/placeholder.svg" alt="MCN Avatar" />
            <AvatarFallback className="bg-mcn-blue text-white text-xl">MCN</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-semibold text-mcn-blue text-center">Thanks for watching!</h3>
          <p className="text-sm text-gray-600 text-center mt-2 mb-4">
            Learn more about Mobile Care Nexus
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full mt-2">
            <Button 
              variant="outline" 
              className="flex-1 gap-1 text-xs" 
              onClick={onWatchAgain}
              size="sm"
            >
              <RefreshCw className="h-3 w-3" />
              Watch Again
            </Button>
            <Button 
              variant="secondary"
              className="flex-1 gap-1 text-xs"
              onClick={onClose}
              size="sm"
            >
              <X className="h-3 w-3" />
              Close
            </Button>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default ThankYouView;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface DemoButtonProps {
  text: string;
}

const DemoButton: React.FC<DemoButtonProps> = ({ text }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLaunchDemo = () => {
    toast({
      title: "Launching Staff Portal Demo",
      description: "Redirecting to the MCN Staff Portal demonstration",
    });
    
    try {
      // Use setTimeout to ensure the toast is visible before navigation
      setTimeout(() => {
        navigate('/staff-demo');
        console.log('Navigation to /staff-demo attempted');
      }, 1000);
    } catch (error) {
      console.error('Navigation error:', error);
      toast({
        title: "Navigation Error",
        description: "Could not navigate to the demo page. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <button 
      onClick={handleLaunchDemo} 
      className="px-5 py-2.5 bg-mcn-blue text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      {text}
    </button>
  );
};

export default DemoButton;

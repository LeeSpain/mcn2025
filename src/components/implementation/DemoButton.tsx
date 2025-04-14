
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
    setTimeout(() => navigate('/staff-demo'), 1000);
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


import React from 'react';
import { Send, Check } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  isSubmitted: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting, isSubmitted }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting || isSubmitted}
      className={`w-full primary-button flex items-center justify-center py-3 ${
        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
      } ${
        isSubmitted ? 'bg-green-600 hover:bg-green-700' : ''
      }`}
    >
      {isSubmitting ? (
        <>Sending...</>
      ) : isSubmitted ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Message Sent
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Send Message
        </>
      )}
    </button>
  );
};

export default SubmitButton;

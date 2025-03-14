
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SubmitButtonProps {
  isSubmitting: boolean;
  isSubmitted: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting, isSubmitted }) => {
  const { t } = useLanguage();
  
  if (isSubmitted) {
    return (
      <Button className="w-full" variant="outline" disabled>
        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
        <span className="text-green-600">{t('contact.sentSuccessfully')}</span>
      </Button>
    );
  }
  
  return (
    <Button className="w-full" type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <span>{t('contact.sending')}</span>
        </>
      ) : (
        <span>{t('contact.submit')}</span>
      )}
    </Button>
  );
};

export default SubmitButton;

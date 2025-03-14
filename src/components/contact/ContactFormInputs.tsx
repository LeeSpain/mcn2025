
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useLanguage } from '@/context/LanguageContext';

interface ContactFormInputsProps {
  formState: {
    name: string;
    email: string;
    phone: string;
    message: string;
    userType: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const ContactFormInputs: React.FC<ContactFormInputsProps> = ({ formState, handleChange }) => {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t('contact.name')}</Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder={t('contact.namePlaceholder')}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">{t('contact.email')}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder={t('contact.emailPlaceholder')}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">{t('contact.phone')}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            placeholder={t('contact.phonePlaceholder')}
          />
        </div>
        
        <div className="space-y-2">
          <Label>{t('contact.userType')}</Label>
          <Select 
            name="userType" 
            value={formState.userType}
            onValueChange={(value) => {
              handleChange({
                target: { name: 'userType', value }
              } as React.ChangeEvent<HTMLSelectElement>)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={t('contact.userType')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="client">{t('contact.client')}</SelectItem>
              <SelectItem value="staff">{t('contact.staff')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">{t('contact.message')}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          placeholder={t('contact.messagePlaceholder')}
          required
        />
      </div>
    </>
  );
};

export default ContactFormInputs;

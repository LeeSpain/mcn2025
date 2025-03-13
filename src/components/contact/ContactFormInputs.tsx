
import React from 'react';

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
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="userType" className="block text-sm font-medium text-foreground mb-2">
          I am a:
        </label>
        <select
          id="userType"
          name="userType"
          value={formState.userType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all"
          required
        >
          <option value="client">Client or Family Member</option>
          <option value="staff">Healthcare Professional</option>
          <option value="partner">Business Partner</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all"
          placeholder="Your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all"
          placeholder="your.email@example.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all"
          placeholder="+31 6 12345678"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-mcn-blue focus:border-transparent transition-all resize-none"
          placeholder="How can we help you?"
          required
        />
      </div>
    </div>
  );
};

export default ContactFormInputs;


import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  return (
    <div className="glass-card p-8 md:p-10 h-full">
      <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">
            How do I get started with MCN?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Getting started is easy! Simply sign up for an account on our website or download the mobile app. Follow the setup instructions, and you'll be up and running in no time.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium">
            Is MCN compatible with my existing devices?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            MCN works with most modern smartphones and tablets. For the web portal, we support all major browsers. We also integrate with popular wearables like Fitbit and Apple Watch.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">
            How secure is my data with MCN?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            We take data security very seriously. All data is encrypted using industry-standard protocols, and we comply with NEN7510 and ISO standards for healthcare data protection.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium">
            Do you offer training for care organizations?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes, we provide comprehensive training programs for care organizations adopting MCN. Contact our sales team to learn more about our training options.
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium">
            What kind of support does MCN provide?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            MCN offers 24/7 technical support for critical issues. Our standard support hours align with our business hours, and we provide multiple support channels including email, phone, and live chat.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="mt-8 p-4 bg-mcn-blue/5 rounded-lg border border-mcn-blue/10">
        <h4 className="font-medium mb-2">Need urgent assistance?</h4>
        <p className="text-sm text-muted-foreground mb-4">
          For technical issues or urgent support, our team is available 24/7.
        </p>
        <Link to="/support" className="text-mcn-blue font-medium text-sm inline-flex items-center">
          Visit our support center <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default FAQSection;

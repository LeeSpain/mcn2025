
import React from 'react';
import { Shield, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CallRecordingSection: React.FC = () => {
  return (
    <section className="p-8 rounded-2xl border border-indigo-100 shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Comprehensive Call Recording & Analysis</h2>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-2/3 space-y-4">
            <h3 className="text-xl font-semibold text-indigo-700">Secure Call Recording</h3>
            <p className="text-gray-700">
              Every AI-powered call is securely recorded and stored in compliance with healthcare privacy regulations (HIPAA, GDPR). Recordings are encrypted both in transit and at rest.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Patient consent is automatically obtained at the start of each call</li>
              <li>Recordings are only accessible to authorized personnel</li>
              <li>Automated redaction of sensitive information in transcripts</li>
              <li>Role-based access control for viewing call history</li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <Card className="overflow-hidden">
              <div className="h-2 bg-indigo-600"></div>
              <CardContent className="p-5">
                <div className="space-y-4">
                  <h4 className="font-medium text-center">Security Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm">End-to-end encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm">HIPAA compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Audit trail for access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Data retention policies</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3 order-2 md:order-1">
            <Card className="overflow-hidden">
              <div className="h-2 bg-purple-600"></div>
              <CardContent className="p-5">
                <div className="space-y-4">
                  <h4 className="font-medium text-center">Analysis Insights</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Patient satisfaction scores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Common inquiry patterns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Peak call times</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Resolution rate metrics</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-2/3 space-y-4 order-1 md:order-2">
            <h3 className="text-xl font-semibold text-purple-700">Automatic Transcription & Analytics</h3>
            <p className="text-gray-700">
              Our advanced AI doesn't just handle calls—it transforms them into actionable data. Every interaction is automatically transcribed and analyzed to provide insights for continuous improvement.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Sentiment analysis identifies patients who may need additional support</li>
              <li>Topic modeling reveals trending health concerns in your population</li>
              <li>Automatic tagging of calls for easy searching and categorization</li>
              <li>Integration with EHR systems for holistic patient records</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallRecordingSection;

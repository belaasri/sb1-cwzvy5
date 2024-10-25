import React from 'react';
import { CheckCircle } from 'lucide-react';

const HowToUse = () => {
  const steps = [
    'Enter the Instagram username in the search box',
    'Click the "Search" button to fetch available stories',
    'Preview the stories in the grid below',
    'Click the download button on any story to save it to your device'
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">How to Download Stories</h2>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="text-purple-600 mt-1 flex-shrink-0" size={20} />
            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 p-4 rounded-lg mt-6">
        <h3 className="font-semibold text-purple-800 mb-2">Important Notes:</h3>
        <ul className="list-disc list-inside space-y-2 text-purple-700">
          <li>Stories are only available from public Instagram accounts</li>
          <li>Downloaded stories are saved in their original quality</li>
          <li>Stories are temporary and may not be available after 24 hours</li>
        </ul>
      </div>
    </div>
  );
};

export default HowToUse;
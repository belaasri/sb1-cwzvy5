import React, { useState } from 'react';
import { Download, Instagram, History, HelpCircle } from 'lucide-react';
import StoryDownloader from './components/StoryDownloader';
import Header from './components/Header';
import Footer from './components/Footer';
import HowToUse from './components/HowToUse';

function App() {
  const [showHowTo, setShowHowTo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-500">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex justify-center gap-4 mb-8">
              <button 
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${!showHowTo ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
                onClick={() => setShowHowTo(false)}
              >
                <Download size={20} />
                Download Stories
              </button>
              <button 
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${showHowTo ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}
                onClick={() => setShowHowTo(true)}
              >
                <HelpCircle size={20} />
                How to Use
              </button>
            </div>

            {showHowTo ? <HowToUse /> : <StoryDownloader />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

const StoryDownloader = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [stories, setStories] = useState<any[]>([]);

  const fetchStories = async () => {
    if (!username) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://instagram-scraper-2022.p.rapidapi.com/ig/stories_hd/${username}`, {
        headers: {
          'x-rapidapi-host': 'instagram-scraper-2022.p.rapidapi.com',
          'x-rapidapi-key': 'd1c53133acmsh2e7c470c0bfbb2ep1a074cjsne9dd522da151'
        }
      });

      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
        setStories([]);
      } else {
        setStories(data.stories || []);
        if (!data.stories?.length) {
          setError('No stories found for this user');
        }
      }
    } catch (err) {
      setError('Failed to fetch stories. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `story-${Date.now()}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      setError('Failed to download story. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Instagram username"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
          <button
            onClick={fetchStories}
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              'Search'
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg">
            {error}
          </div>
        )}
      </div>

      {stories.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="aspect-video relative">
                <video
                  src={story.url}
                  className="w-full h-full object-cover rounded-lg"
                  controls
                />
                <button
                  onClick={() => handleDownload(story.url)}
                  className="absolute bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <Download size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoryDownloader;
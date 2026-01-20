import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';
import { Code2, Sparkles } from 'lucide-react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container flex flex-col items-center justify-center min-h-screen">
          <div className="mb-8 flex items-center gap-4">
            <Code2 className="w-12 h-12 text-white animate-pulse" />
            <Sparkles className="w-8 h-8 text-yellow-300 animate-bounce" />
            <Code2 className="w-12 h-12 text-white animate-pulse" />
          </div>
          <div className="loader" />
          <p className="mt-8 text-white text-xl font-medium animate-pulse">
            Loading Portfolio...
          </p>
        </div>
      ) : (
        <div className="min-h-screen">
          <Card />
        </div>
      )}
    </>
  );
};

export default App;

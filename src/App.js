import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container flex items-center justify-center">
          <div className="loader" />
        </div>
      ) : (
        <div className="bg-slate-600">
          <Card />
        </div>
      )}
    </>
  );
};

export default App;
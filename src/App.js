import React from 'react'
import './App.css'
import Card from './Component/Card'
import { useEffect,useState } from 'react'
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  },[count]);
  return (
    <>
     {isLoading ? (
      <div className='loader-container flex items-center justify-center'>
      <div className='loader' />
      </div>
    ) : (
    <div className='bg-slate-600'>
    <Card/>
    </div>
    )}
    </>
  )
}

export default App
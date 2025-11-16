import React, { useState, useEffect } from 'react';
import { LoadingScreen } from '../LoadingScrenn'; 

const INITIAL_LOADING_TIME = 3000; 

export function Abertura() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, INITIAL_LOADING_TIME);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />; 
  }

  
}

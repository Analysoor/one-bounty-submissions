'use client';
import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth > 600);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isWideScreen;
}

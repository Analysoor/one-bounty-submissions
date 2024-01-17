import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return ;
    }

    function handleResize() {
      setIsWideScreen(window.innerWidth > 600);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, []);

  return isWideScreen;
}

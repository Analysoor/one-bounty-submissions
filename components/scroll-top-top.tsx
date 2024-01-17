import {useState, useEffect, useCallback} from 'react';
import { Button } from '@nextui-org/react';
import {ChevronUpIcon} from "@nextui-org/shared-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = useCallback(() => {
    if (typeof window !== 'undefined' && window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      {isVisible &&
          <Button color="primary" size={'lg'} radius={'lg'} variant={'ghost'} onClick={scrollToTop}>
              <ChevronUpIcon className="h-5 w-5" />
          </Button>
      }
    </div>
  );
};

export default ScrollToTop;

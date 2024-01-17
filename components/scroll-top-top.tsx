'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import {ChevronUpIcon} from "@nextui-org/shared-icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
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

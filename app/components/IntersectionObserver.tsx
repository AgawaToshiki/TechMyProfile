"use client"
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const IntersectionObserver = ({ children }: { children: React.ReactNode }) => {
  const { isVisible, targetRef } = useIntersectionObserver();

  return (
    <div ref={ targetRef } className={ isVisible ? 'opacity-1 transition-all duration-500 ease-linear' : 'opacity-0 transition-all duration-500 ease-linear' }>
      {children}
    </div>
  );
};

export default IntersectionObserver;
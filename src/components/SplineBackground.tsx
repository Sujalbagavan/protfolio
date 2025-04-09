import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { url: string };
    }
  }
}

export function SplineBackground() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hide background when scrolled past first page
      setIsVisible(scrollPosition < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    
    const updateCursorPosition = (e: MouseEvent) => {
      if (cursor && isVisible) {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };

    const handleMouseEnter = () => {
      if (cursor) {
        cursor.style.transform = 'scale(1)';
        cursor.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div 
      className={`fixed inset-0 -z-10 w-full h-full transition-opacity duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ cursor: 'none' }}
    >
      <div className="custom-cursor" />
      <spline-viewer 
        url="https://prod.spline.design/vKysy8-mdjuWzEUw/scene.splinecode"
        className="w-full h-full"
      />
    </div>
  );
}
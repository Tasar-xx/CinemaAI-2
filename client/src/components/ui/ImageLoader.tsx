import { useState, useEffect } from 'react';
import heroImage from '@assets/Untitled design_20250405_175152_0000.png';

interface ImageLoaderProps {
  className?: string;
  src?: string;
}

export default function ImageLoader({ className = "", src = heroImage }: ImageLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    // Handle loading error
    img.onerror = (e) => {
      console.error("Image failed to load:", src, e);
    };
  }, [src]);

  return (
    <div className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {loaded && (
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover'
          }}
        />
      )}
    </div>
  );
}
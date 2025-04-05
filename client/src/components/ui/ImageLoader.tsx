import { useState, useEffect } from 'react';

interface ImageLoaderProps {
  className?: string;
}

export default function ImageLoader({ className = "" }: ImageLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = '/attached_assets/Untitled design_20250405_175152_0000.png';
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {loaded && (
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('/attached_assets/Untitled design_20250405_175152_0000.png')`,
            backgroundSize: 'cover'
          }}
        />
      )}
    </div>
  );
}
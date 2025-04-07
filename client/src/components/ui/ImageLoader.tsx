
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from '@assets/Untitled design_20250405_175152_0000.png';

interface ImageLoaderProps {
  className?: string;
  images?: string[];
}

export default function ImageLoader({ className = "", images = [heroImage] }: ImageLoaderProps) {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(images.length).fill(false));
  
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.onerror = (e) => {
        console.error("Image failed to load:", src, e);
      };
    });
  }, [images]);

  return (
    <Carousel className={className}>
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={src}>
            <div className={`w-full h-full ${loadedImages[index] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              {loadedImages[index] && (
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'cover'
                  }}
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

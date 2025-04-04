import { useRef, useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfiniteScrollProps {
  children: ReactNode;
  loadMore: () => void;
  hasMore: boolean;
  threshold?: number;
  loader?: ReactNode;
}

export default function InfiniteScroll({
  children,
  loadMore,
  hasMore,
  threshold = 200,
  loader = <div className="infinity-loader" />
}: InfiniteScrollProps) {
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || !hasMore) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;
      
      if (scrollPosition + windowHeight > totalHeight - threshold) {
        setIsLoading(true);
        loadMore();
        
        // Reset loading state after a delay
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore, loadMore, threshold]);
  
  return (
    <div ref={containerRef} className="relative">
      {children}
      {isLoading && hasMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-8 flex justify-center"
        >
          {loader}
        </motion.div>
      )}
    </div>
  );
}

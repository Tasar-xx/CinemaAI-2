import { useState, useEffect, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  initialItems?: number;
  increment?: number;
  totalItems?: number;
  delay?: number;
  threshold?: number;
}

export function useInfiniteScroll<T>({
  initialItems = 6,
  increment = 3,
  totalItems = 100,
  delay = 800,
  threshold = 200,
}: UseInfiniteScrollOptions = {}) {
  const [items, setItems] = useState<T[]>([]);
  const [visibleItems, setVisibleItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    setTimeout(() => {
      setVisibleItems(prev => {
        const next = prev + increment;
        if (next >= totalItems) {
          setHasMore(false);
          return totalItems;
        }
        return next;
      });
      setLoading(false);
    }, delay);
  }, [loading, hasMore, increment, totalItems, delay]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;
      
      if (scrollPosition + windowHeight > totalHeight - threshold) {
        loadMore();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, loadMore, threshold]);

  return {
    visibleItems,
    loading,
    hasMore,
    loadMore,
    setItems,
  };
}

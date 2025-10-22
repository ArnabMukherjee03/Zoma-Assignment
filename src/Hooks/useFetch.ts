/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, type DependencyList } from "react";

interface UseApiDataReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * useFetch is a reusable custom hook for handling asynchronous data fetching.
 * It manages loading, error, and data states, and supports re-fetching.
 * */
function useFetch<T>(fetchFn: () => Promise<T>, deps: DependencyList = []): UseApiDataReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

    const fetchData = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fetchFn();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, deps);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch
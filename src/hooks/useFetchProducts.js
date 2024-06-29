import { useEffect, useState } from 'react';

const useFetchProducts = (endpoint) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { products, loading, error };
};

export default useFetchProducts;
import { useEffect, useState } from 'react';

/**
 * Custom React hook to fetch products from a given API endpoint.
 *
 * This hook fetches products from the provided endpoint URL, and manages the loading and error states.
 *
 * @param {string} endpoint - The API endpoint URL to fetch products from.
 * @returns {Object} - An object containing `products`, `loading`, and `error` states.
 * - `products` {Array}: The array of products fetched from the endpoint.
 * - `loading` {boolean}: Indicates if the products are currently being loaded.
 * - `error` {string|null}: Contains an error message if fetching fails, otherwise null.
 *
 * Example usage:
 * const { products, loading, error } = useFetchProducts('https://api.example.com/products');
 */
const useFetchProducts = (endpoint) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetches products from the provided endpoint.
  */
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch from ${endpoint}: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
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
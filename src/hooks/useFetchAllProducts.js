/**
 * Custom React hook to fetch products from multiple endpoints.
 *
 * This hook fetches products from several predefined API endpoints, combines the results,
 * and handles the loading and error states.
 *
 * @returns {Object} - An object containing `allProducts`, `loading`, and `error` states.
 * - `allProducts` {Array}: The combined array of products fetched from all endpoints.
 * - `loading` {boolean}: Indicates if the products are currently being loaded.
 * - `error` {string|null}: Contains an error message if fetching fails, otherwise null.
 *
 * Example usage:
 * const { allProducts, loading, error } = useFetchAllProducts();
 */
import { useState, useEffect } from 'react';

const endpoints = [
  'https://6valley.6amtech.com/api/v1/products/featured?guest_id=1&limit=10&offset=1',
  'https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&offset=1',
  'https://6valley.6amtech.com/api/v1/products/best-sellings?guest_id=1&limit=10&offset=1',
  'https://6valley.6amtech.com/api/v1/products/latest?guest_id=1&limit=10&offset=1',
  'https://6valley.6amtech.com/api/v1/products/new-arrival?guest_id=1&limit=10&offset=1',
];

/**
 * Fetch products from a given endpoint.
 *
 * @param {string} endpoint - The API endpoint URL.
 * @returns {Promise<Array>} - A promise that resolves to an array of products.
 * @throws {Error} - Throws an error if the fetch operation fails.
*/
const fetchProducts = async (endpoint) => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${endpoint}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.products;
};

const useFetchAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchPromises = endpoints.map(fetchProducts);
      const results = await Promise.all(fetchPromises);
      const combinedProducts = results.flat();
      setAllProducts(combinedProducts);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return { allProducts, loading, error };
};

export default useFetchAllProducts;
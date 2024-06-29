import { useState, useEffect } from 'react';

const useFetchAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoints = [
        'https://6valley.6amtech.com/api/v1/products/featured?guest_id=1&limit=10&offset=1',
        'https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&offset=1',
        'https://6valley.6amtech.com/api/v1/products/best-sellings?guest_id=1&limit=10&offset=1',
        'https://6valley.6amtech.com/api/v1/products/latest?guest_id=1&limit=10&offset=1',
        'https://6valley.6amtech.com/api/v1/products/new-arrival?guest_id=1&limit=10&offset=1',
      ];
      const fetchPromises = endpoints.map(endpoint => fetch(endpoint).then(res => res.json()));
      const results = await Promise.all(fetchPromises);
      const combinedProducts = results.flatMap(result => result.products);
      setAllProducts(combinedProducts);
    } catch (error) {
      setError('Failed to fetch products');
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

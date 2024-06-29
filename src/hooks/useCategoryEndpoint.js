/**
 * Returns the API endpoint URL for a given product category index.
 *
 * The function uses an array of predefined endpoint URLs, each corresponding 
 * to a different product category (e.g., featured, top-rated, best-selling, latest, new arrivals).
 * The category index determines which endpoint URL to return.
 *
 * @param {number} categoryIndex - The index of the desired product category (0-based).
 * @returns {string} The endpoint URL for the specified category.
 *
 * Example usage:
 * const endpoint = useCategoryEndpoint(2); // Returns the endpoint for best-sellings
 */
const useCategoryEndpoint = (categoryIndex) => {
  const endpoints = [
    'https://6valley.6amtech.com/api/v1/products/featured?guest_id=1&limit=10&offset=1',
    'https://6valley.6amtech.com/api/v1/products/top-rated?guest_id=1&limit=10&offset=1',
    'https://6valley.6amtech.com/api/v1/products/best-sellings?guest_id=1&limit=10&offset=1',
    'https://6valley.6amtech.com/api/v1/products/latest?guest_id=1&limit=10&offset=1',
    'https://6valley.6amtech.com/api/v1/products/new-arrival?guest_id=1&limit=10&offset=1',
  ];
  return endpoints[categoryIndex];
};

export default useCategoryEndpoint;
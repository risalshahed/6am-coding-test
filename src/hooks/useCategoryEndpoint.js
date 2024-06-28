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
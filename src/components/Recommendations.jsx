'use client';

import { useState } from 'react';
import Skeleton from './Skeleton';
import useCategoryEndpoint from '@/hooks/useCategoryEndpoint';
import useFetchProducts from '@/hooks/useFetchProducts';

const Recommendations = () => {
  const [selected, setSelected] = useState(0);

  const category_titles = [
    'Featured Products', 'Top Rated', 'Best Selling', 'Latest Products', 'New Arrivals'
  ];

  const handleActivity = id => {
    setSelected(id);
  }

  const endpoint = useCategoryEndpoint(selected);
  const { products, loading, error } = useFetchProducts(endpoint);

  return (
    <div className='py-12'>
      <h2 className='font-bold text-3xl text-center'>Recommended For You</h2>
      {/* Categories' Titles */}
      <div className="flex gap-x-12 justify-center items-center py-10">
        {
          category_titles.map((title, index) =>
            <h4
              key={index}
              className={`font-semibold cursor-pointer pb-3 px-3 ${selected === index && 'text-my-blue border-b-4 border-b-my-blue'}`}
              onClick={() => handleActivity(index)}
            >
              {title}
            </h4>
          )
        }
      </div>
      {/* Grid */}
      <div className='grid grid-cols-5'>
      {
        loading ? (
          products?.map(product =><Skeleton />)
        ) : error ? (
          <h4 className='text-red-600 font-semibold text-2xl mx-auto'>
            {error}
          </h4>
        ) : (
          products?.map(product =>
            <img key={product.id} src={`https://6valley.6amtech.com/storage/app/public/product/${product.images[0]}`} alt={product.name} />
          )
        )
      }
    </div>
    </div>
  );
};

export default Recommendations;
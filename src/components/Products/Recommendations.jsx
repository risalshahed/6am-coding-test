'use client';

import { useState } from 'react';
import Skeleton from '../Skeleton';
import useCategoryEndpoint from '@/hooks/useCategoryEndpoint';
import useFetchProducts from '@/hooks/useFetchProducts';
import EachProduct from './EachProduct';

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

  const len = category_titles.length;

  return (
    <div className='py-12 px-16'>
      <h2 className=' font-semibold text-2xl text-center'>Recommended For You</h2>
      {/* Categories' Titles */}
      <div className="flex flex-wrap gap-x-12 gap-y-4 justify-center items-center py-10">
        {
          category_titles.map((title, index) =>
            <div key={index}>
              <h4
                className={`cursor-pointer pb-3 px-3 text-center ${selected === index && 'font-semibold text-my-blue border-b-4 border-b-my-blue '}`}
                onClick={() => handleActivity(index)}
              >
                {title}
                {index === len - 1 && (
                  <div className='relative'>
                    <img src='https://i.postimg.cc/5tpx9FyQ/image-26.png' alt='New Arrivals' className='absolute -right-6 -top-6' />
                  </div>
                )}
              </h4>
            </div>
          )
        }        
      </div>
      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7 justify-center items-stretch'>
        {
          loading ? (
            <>
              <Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton />
            </>
          ) : error ? (
            <h4 className='text-red-600 font-semibold text-2xl mx-auto'>
              {error}
            </h4>
          ) : (
            products?.map(product =>
              <EachProduct
                key={product.id}
                product={product}
                isNewArrival={selected === len - 1}
              />
            )
          )
        }
      </div>
    </div>
  );
};

export default Recommendations;
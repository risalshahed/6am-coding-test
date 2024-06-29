'use client';

import useFetchAllProducts from "@/hooks/useFetchAllProducts";
import Skeleton from "../Skeleton";
import EachProduct from "./EachProduct";

const Products = () => {
  const { allProducts, loading, error } = useFetchAllProducts();

  return (
    <div className="py-5 px-16">
      <h1 className="text-2xl font-bold mb-12 py-4 border-b border-b-gray-300">
        All Products
      </h1>
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
            allProducts
            .slice(0, 15)
            .map(product =>
              <EachProduct
                key={product.id}
                product={product}
              />
            )
          )
        }
      </div>
    </div>
  );
};

export default Products;
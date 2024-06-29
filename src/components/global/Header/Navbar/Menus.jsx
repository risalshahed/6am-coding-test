'use client';

import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Menus = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='lg:ml-[32%] xl:ml-[25%]'>
      {/* Hamburger Menu for Small and Medium Devices */}
      <div className='lg:hidden p-4'>
        <RxHamburgerMenu 
          className='cursor-pointer absolute right-5 z-10' 
          size={24} 
          onClick={toggleMenu} 
        />
      </div>
      {/* Menu Items */}
      <ul className={`lg:flex items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block absolute z-40 lg:static right-5 bg-white sm:bg-opacity-80 mt-4 lg:bg-none`}>
        <li className='px-6 pb-3 cursor-pointer border-b lg:border-b-0 border-gray-400 hover:bg-my-blue lg:hover:bg-white hover:text-white lg:hover:text-black'>
          Home
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 pb-3 cursor-pointer border-b lg:border-b-0 border-gray-400 hover:bg-my-blue lg:hover:bg-white hover:text-white lg:hover:text-black'>
          Offers
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 pb-3 cursor-pointer border-b lg:border-b-0 border-gray-400 hover:bg-my-blue lg:hover:bg-white hover:text-white lg:hover:text-black'>
          Stores
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 pb-3 cursor-pointer border-b lg:border-b-0 border-gray-400 hover:bg-my-blue lg:hover:bg-white hover:text-white lg:hover:text-black'>
          Brands
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 pb-3 cursor-pointer border-b lg:border-b-0 border-gray-400 hover:bg-my-blue lg:hover:bg-white hover:text-white lg:hover:text-black'>
          Discounted Products
          <img src="https://i.ibb.co/fn8XxKF/teenyicons-discount-solid.png" alt="Tiny Discount" />
        </li>
      </ul>
    </nav>
  );
};

export default Menus;
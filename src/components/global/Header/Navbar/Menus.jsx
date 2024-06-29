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
      <ul className={`lg:flex items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:static right-5 bg-white bg-opacity-80 lg:bg-none`}>
        <li className='px-6 py-3 cursor-pointer border-b lg:border-b-0 border-gray-400'>
          Home
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer border-b lg:border-b-0 border-gray-400'>
          Offers
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer border-b lg:border-b-0 border-gray-400'>
          Stores
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer border-b lg:border-b-0 border-gray-400'>
          Brands
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer border-b lg:border-b-0 border-gray-400'>
          Discounted Products
          <img src="https://i.ibb.co/fn8XxKF/teenyicons-discount-solid.png" alt="Tiny Discount" />
        </li>
      </ul>
    </nav>
  );
};

export default Menus;












// import { IoIosArrowDown } from "react-icons/io";


// /* 
// import { RxHamburgerMenu } from "react-icons/rx";
// */

// const Menus = () => {
//   return (
//     <nav className='relative lg:ml-[32%] xl:ml-[25%]'>
//       <ul className='flex items-center'>
//         <li className= 'px-6 py-3 cursor-pointer'>
//           Home
//         </li>
//         <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer'>
//           Offers
//           <IoIosArrowDown />
//         </li>
//         <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer'>
//           Stores
//           <IoIosArrowDown />
//         </li>
//         <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer'>
//           Brands
//           <IoIosArrowDown />
//         </li>
//         <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer'>
//           Discounted Products
//           <img src="https://i.ibb.co/fn8XxKF/teenyicons-discount-solid.png" alt="Tiny Discount" />
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Menus;
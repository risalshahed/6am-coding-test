'use client';

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategories = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='absolute'>
      {/* parent */}
      <div
        onClick={toggleCategories}
        className='flex gap-x-5 items-center bg-my-blue text-white px-6 py-3 rounded-md cursor-pointer'
      >
        <RxHamburgerMenu size='24' />
        <h6 className='font-bold pr-4'>Browse Category</h6>
        {
          isOpen
          ?
          <IoIosArrowDown size='24' />
          :
          <IoIosArrowForward size='24' />
        }
      </div>
      {/* categories' list */}
      <ul
        className={`transition-max-height duration-300 ease-in-out overflow-hidden bg-white bg-opacity-80 lg:bg-none ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
          Women’s Fashion
          <IoIosArrowForward />
        </li>
        <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
          Man’s Fashion
          <IoIosArrowForward />
        </li>
        <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
          Personal Care
          <IoIosArrowForward />
        </li>
        <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
          Phone & Telecommunication
          <IoIosArrowForward />
        </li>
        <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
          Jewellery & Watches
          <IoIosArrowForward />
        </li>
        <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
          Home & Appliances
          <IoIosArrowForward />
        </li>
        <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
          Bags & Shoes
          <IoIosArrowForward />
        </li>
        <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
          Beauty, Health & Hair
          <IoIosArrowForward />
        </li>
      </ul>
    </div>
  );
};

export default Categories;








// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

// const Categories = () => {
//   return (
//     <div>
//       {/* parent */}
//       <div className='flex gap-x-0 sm:gap-x-5 items-center bg-my-blue text-white px-6 py-3 rounded-md cursor-pointer'>
//         <RxHamburgerMenu size='24' />
//         <h6 className='font-bold pr-4'>Browser Category</h6>
//         <IoIosArrowDown size='24' />
//       </div>
//       {/* categories' list */}
//       <ul>
//         <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
//           Women’s Fashion
//           <IoIosArrowForward />
//         </li>
//         <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
//           Man’s Fashion
//           <IoIosArrowForward />
//         </li>
//         <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
//           Personal Care
//           <IoIosArrowForward />
//         </li>
//         <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
//           Phone & Telecommunication
//           <IoIosArrowForward />
//         </li>
//         <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
//           Jewellery & Watches
//           <IoIosArrowForward />
//         </li>
//         <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
//           Home & Appliances
//           <IoIosArrowForward />
//         </li>
//         <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
//           Bags & Shoes
//           <IoIosArrowForward />
//         </li>
//         <li className='flex justify-between items-center p-3 mx-3 border-b cursor-pointer'>
//           Beauty, Health & Hair
//           <IoIosArrowForward />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Categories;
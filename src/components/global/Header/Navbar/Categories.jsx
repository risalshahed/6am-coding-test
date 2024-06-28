import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  return (
    <div>
      {/* parent */}
      <div className='flex gap-x-0 sm:gap-x-5 items-center bg-my-blue text-white px-6 py-3 rounded-md cursor-pointer'>
        <RxHamburgerMenu size='24' />
        <h6 className='font-bold pr-4'>Browser Category</h6>
        <IoIosArrowDown size='24' />
      </div>
      {/* categories' list */}
      <ul>
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
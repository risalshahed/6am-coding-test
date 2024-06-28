import { IoIosArrowDown } from "react-icons/io";

const Menus = () => {
  return (
    <nav>
      <ul className='flex items-center'>
        <li className= 'px-6 py-3 cursor-pointer'>
          Home
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer'>
          Offers
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer'>
          Stores
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer'>
          Brands
          <IoIosArrowDown />
        </li>
        <li className='flex gap-x-5 justify-between items-center px-6 py-3 cursor-pointer'>
          Discounted Products
          <img src="https://i.ibb.co/fn8XxKF/teenyicons-discount-solid.png" alt="Tiny Discount" />
        </li>
      </ul>
    </nav>
  );
};

export default Menus;
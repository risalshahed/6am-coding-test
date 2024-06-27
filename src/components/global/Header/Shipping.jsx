import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Shipping = () => {
  return (
    <div className='flex justify-around items-center py-6 bg-[#0D1D35] text-white'>
      <div className='flex items-center gap-x-5'>
        <p className='bg-[#1B7FED] px-4 py-1 rounded-2xl'>Become a Seller</p>
        <p>Free Express Shipping</p>
      </div>
      {/* Icons */}
      <div className="flex gap-x-8">
        <div className="flex gap-x-12">
          <button className="flex items-center">USD <IoIosArrowDown /></button>
          <button className="flex items-center">EN <IoIosArrowDown /></button>
        </div>
        {/* Socials */}
        <div className="flex justify-center items-center rounded-full w-6 h-6 cursor-pointer">
          <FaTwitter size='24' />
        </div>
        <div className="bg-white flex justify-center items-end rounded-md w-6 h-6 text-black cursor-pointer">
          <FaFacebookF className='h-5' size='24' />
        </div>
        <div className="flex justify-center items-center rounded-md w-6 h-6 cursor-pointer">
          <FaInstagram size='24' />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
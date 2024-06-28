import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Shipping = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-y-5 px-6 sm:px-12 py-6 bg-[#0D1D35] text-white'>
      <div className='flex items-center gap-x-5'>
        <p className='bg-my-blue px-4 py-1 rounded-2xl'>Become a Seller</p>
        <p>Free Express Shipping</p>
      </div>
      {/* Icons */}
      <div className="flex gap-x-8">
        <div className="flex gap-x-12">
          <button className="flex items-center">USD <IoIosArrowDown /></button>
          <button className="flex items-center">EN <IoIosArrowDown /></button>
        </div>
        {/* Socials */}
        <div className="flex gap-x-5 items-center">
          <div className="rounded-full w-6 h-6 cursor-pointer">
            <FaTwitter size='24' />
          </div>
          <div className="bg-white flex items-end rounded-md w-6 h-6 text-black cursor-pointer">
            <FaFacebookF className='h-5' size='24' />
          </div>
          <div className="rounded-md w-6 h-6 cursor-pointer">
            <FaInstagram size='24' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shipping;
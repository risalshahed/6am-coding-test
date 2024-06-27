import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaHeart, FaUser } from "react-icons/fa";
import { RiShuffleLine } from "react-icons/ri";
import { MdOutlineLocalMall } from "react-icons/md";

const Topbar = () => {
  return (
    <div className='flex justify-around items-center py-6'>
      {/* logo */}
      <div className='flex justify-center md:justify-start gap-x-2 items-center'>
        <img
          className='w-10 h-8'
          src='https://i.ibb.co/pbVStmm/top-footer.png'
          alt="6valley"
        />
        <h5 className='font-semibold text-lg'>6valley</h5>
      </div>
      {/* search */}
      <div className="flex gap-x-5 items-center border rounded-3xl pl-8 pr-0.5 py-0.5">
        <button className='flex gap-x-5 items-center'>
          <RxHamburgerMenu size='24' />
          <IoIosArrowDown size='24' />
        </button>
        {/* <div className=" "> */}
          <input
            type="text"
            placeholder="Search for items or store..."
            className="outline-none pl-5 py-2 border-l-2"
          />
        {/* </div> */}
        <button className="bg-[#1B7FED] rounded-3xl rounded-l-none p-5 pl-10">
          <FiSearch color='white' size='24' />
        </button>
      </div>
      {/* profiles & icons */}
      <div className="flex gap-x-8 items-center">
        <div className='bg-gray-500 rounded-full p-2 cursor-pointer'>
          <FaUser color='white' size='32' />
        </div>
        <div className='text-gray-500 cursor-pointer relative'>
          <RiShuffleLine size='32' />
          <div className="absolute -top-2 px-2 py-px -right-4 bg-[#1B7FED] 
          rounded-full text-center text-white">6</div>
        </div>
        <div className='text-gray-500 cursor-pointer relative'>
          <FaHeart size='32' />
          <div className="absolute -top-2 px-2 py-px -right-4 bg-[#1B7FED] 
          rounded-full text-center text-white">6</div>
        </div>
        <div className='text-gray-500 cursor-pointer relative'>
          <MdOutlineLocalMall size='32' />
          <div className="absolute -top-2 px-2 py-px -right-4 bg-[#1B7FED] 
          rounded-full text-center text-white">6</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { FiPhoneCall } from "react-icons/fi";

const Icons = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-y-5 justify-between items-center bg-blue-900 bg-opacity-70 px-12 py-6'>
      <div className='visible md:invisible hidden md:block'>
        Nothing here!
      </div>
      {/* Social Icons */}
      <div className="flex gap-x-5">
        <div className="bg-white flex justify-center items-center rounded-full w-6 h-6">
          <FaTwitter />
        </div>
        <div className="bg-white flex justify-center items-center rounded-md w-6 h-6">
          <FaInstagram />
          
        </div>
        <div className="bg-white flex justify-center items-end rounded-full w-6 h-6">
          <FaFacebookF className='h-5' />
        </div>
        <div className="bg-white flex justify-center items-center rounded-full w-6 h-6">
          <FaYoutube />
        </div>
      </div>
      {/* Hotline */}
      <div className='flex gap-x-2 items-center text-white'>
        <div>
          <FiPhoneCall className='w-8 h-8' />
        </div>
        <div>
          <h4 className='font-bold'>Hotline</h4>
          <p className='text-sm'>+90-327-5345543</p>
        </div>
      </div>
    </div>
  );
};

export default Icons;
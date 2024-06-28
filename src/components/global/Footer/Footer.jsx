import Icons from './Icons';
import Info from './Info';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* --------------- Icons Column --------------- */}
      <Icons />
      {/* --------------- Info Column --------------- */}
      <Info />
      {/* --------------- Copyright Column --------------- */}
      <p className='bg-my-blue bg-opacity-70 text-white text-center px-6 sm:px-12 py-6'>
        {year} COPYRIGHT All Rights Reserved By 6amMart.com
      </p>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Categories from './Categories';
import Menus from './Menus';

const Navbar = () => {
  return (
    <div className='flex gap-x-5 px-6 sm:px-12'>
      <Categories />
      <Menus />
    </div>
  );
};

export default Navbar;
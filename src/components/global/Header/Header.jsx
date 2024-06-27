import React from 'react';
import Discount from './Discount';
import Shipping from './Shipping';
import Topbar from './Topbar';

const Header = () => {
  return (
    <header>
      <Discount />
      <Shipping />
      <Topbar />
    </header>
  );
};

export default Header;
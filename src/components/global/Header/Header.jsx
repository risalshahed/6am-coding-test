import Discount from './Discount';
import Shipping from './Shipping';
import Topbar from './Topbar';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header>
      <Discount />
      <Shipping />
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
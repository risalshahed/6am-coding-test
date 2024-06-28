import { IoMdClose } from "react-icons/io";

const Discount = () => {
  return (
    <div id="discount-header" className="flex flex-col sm:flex-row gap-y-3 justify-between items-center px-6 sm:px-12 py-5">
      <IoMdClose color='my-blue' size='24' />
      <p className="text-my-blue">50% Off On Black Friday For All Stores&gt; Valid Until 31 January, 2023</p>
      <div className="visible md:invisible hidden md:block">Nothing Here!</div>
    </div>
  );
};
export default Discount;
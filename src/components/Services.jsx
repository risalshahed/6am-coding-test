import { HiOutlineMail } from "react-icons/hi";

const Services = () => {
  return (
    <div className='bg-gray-200 mt-6 pt-6 px-12'>
      {/* -------------------------- services -------------------------- */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 justify-center items-center text-center services'>
        {/* Value */}
        <div className='flex flex-col gap-y-2 px-3 border-r-0 sm:border-r border-r-gray-700'>
          <img className="mx-auto" src="https://i.postimg.cc/J0SR1s2B/dollar.png" alt="value" />
          <h4 className='text-2xl font-bold'>Great Value</h4>
          <p>We offer competitive prices on over 100 million items.</p>
        </div>
        {/* Shipping */}
        <div className='flex flex-col gap-y-2 px-3 border-r-0 md:border-r border-r-gray-700'>
          <img className="mx-auto" src="https://i.postimg.cc/YS8kvnP7/car.png" alt="shipping" />
          <h4 className='text-2xl font-bold'>Whole Country Shipping</h4>
          <p>We ship all over the country at any time, anywhere</p>
        </div>
        {/* Payment */}
        <div className='flex flex-col gap-y-2 px-3 border-r-0 sm:border-r md:border-r-0 lg:border-r border-r-gray-700'>
          <img className="mx-auto" src="https://i.postimg.cc/g2FGQ6hC/payment.png" alt="shipping" />
          <h4 className='text-2xl font-bold'>Safe Payment</h4>
          <p>Pay with secure payment methods.</p>
        </div>
        {/* Support */}
        <div className='flex flex-col gap-y-2 px-3 border-r-0 md:border-r border-r-gray-700'>
          <img className="mx-auto" src="https://i.postimg.cc/BvJ4Q9MN/support.png" alt="shipping" />
          <h4 className='text-2xl font-bold'>24/7 Support</h4>
          <p>Pay with secure payment methods.</p>
        </div>
        {/* Language */}
        <div className='flex flex-col gap-y-2 px-3 border-r-0 sm:border-r border-r-gray-700'>
          <img className="mx-auto" src="https://i.postimg.cc/3rq8jqxJ/multi-lang.png" alt="shipping" />
          <h4 className='text-2xl font-bold'>Multiple language</h4>
          <p>Our comes in with multiple languages.</p>
        </div>
        {/* Better Shop */}
        <div className='flex flex-col gap-y-2 px-3'>
          <div className='flex justify-center gap-x-2'>
            <img src="https://i.postimg.cc/dtTq59hR/bot.png" alt="shipping" />
            <img src="https://i.postimg.cc/QdQj3xkH/apple.png" alt="shipping" />
          </div>
          <h4 className='text-2xl font-bold'>Shop Better</h4>
          <p>Download our app from play store and app store</p>
        </div>
      </div>

      {/* -------------------------- newsletter -------------------------- */}
      <div className="px-3 py-5 sm:px-12 sm:py-8 flex flex-col lg:flex-row gap-y-5 justify-between items-center bg-[#09336F] rounded-xl my-8">
        <div className="text-white">
          <h4 className='text-xl font-semibold'>Newsletter</h4>
          <p>Be the first one to know about discounts, offers and events</p>
        </div>
        <div className="relative flex items-center">
          <HiOutlineMail size='24' color="gray" className="-mr-8 z-10" />
          <input className="px-10 py-3 rounded-lg outline-none" type="text" placeholder="Enter your email" />
          <button className="text-white bg-my-blue absolute right-1 px-5 py-2 rounded-md">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
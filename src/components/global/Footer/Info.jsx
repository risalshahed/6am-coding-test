import React from 'react';

const Info = () => {
  return (
    <div className='bg-black bg-opacity-60 px-6 sm:px-12 py-6'>
      <div className='grid gap-x-10 lg:gap-x-5 gap-y-8 lg:gap-y-0 text-center md:text-start custom-grid-cols'>
        <div>
          {/* Cart Row */}
          <div className='flex justify-center md:justify-start gap-x-2 items-center pb-7'>
            <img
              className='w-10 h-8'
              src='https://i.ibb.co/bvhwz0M/cart-footer.png'
              alt="6valley"
            />
            <h5 className='font-semibold text-[#E1F4FF] text-lg'>6valley</h5>
          </div>
          <div className='text-[#E4E4E4] text-sm'>
            Suspendisse ultrices at diam lectus nullam.<br /> 
            Nisl, sagittis viverra enim erat tortor ultricies<br /><br />
            <pre>    1901 Thornridge Cir. Shiloh, Hawaii 81063</pre>
            <pre>    support@example.cpm</pre>
          </div>
          <div className="flex justify-center md:justify-start gap-x-5 pt-7">
            <img src="https://i.ibb.co/DRyqtKg/play-store.png" alt="Google Play Store" />
            <img src="https://i.ibb.co/TgFxNZs/app-store.png" alt="Apple Store" />
          </div>
        </div>
        {/* Accounts Row */}
        <div className='lg:pl-4'>
          <h4 className='font-bold text-white pb-8'>Accounts</h4>
          <ul className='text-[#e4e4e4]'>
            <li>Become a Delivery Man</li>
            <li className='py-4'>Open Your Store</li>
            <li className='pb-4'>Profile</li>
            <li>Help & Support</li>
          </ul>
        </div>
        {/* Links Row */}
        <div className='lg:pl-4'>
          <h4 className='font-bold text-white pb-8'>Quick Links</h4>
          <ul className='text-[#e4e4e4]'>
            <li>Flash Deals</li>
            <li className='py-4'>Featured Products</li>
            <li className='pb-4'>Top Stores</li>
            <li>New Arrivals</li>
          </ul>
        </div>
        {/* Others Row */}
        <div>
          <h4 className='font-bold text-white pb-8'>Other</h4>
          <ul className='text-[#e4e4e4]'>
            <li>Privacy Policy</li>
            <li className='py-4'>Term & Conditions</li>
            <li className='pb-4'>Refund Policy</li>
            <li>Support Ticket</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
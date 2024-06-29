const Banners = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-x-5 gap-y-3 justify-between items-center px-3 sm:px-6 py-5'>
      <div className="visible md:invisible hidden md:block lg:w-[20%]">Nothing Here!</div>
      {/* Banners */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-full lg:w-[75%]'>
        <div className='col-span-1 lg:col-span-2 z-10'>
          <img className='w-full lg:w-auto h-full' src="https://i.ibb.co/Xpwwkw2/Banner.png" alt="Banner" />
        </div>
        <div className='row-span-1 lg:row-span-2 relative flex flex-col items-center text-white pt-5'>
          {/* <img className='w-full lg:h-full' src="https://i.ibb.co/4gp7Dbh/Card.png" alt="Card" /> */}
          <img class="w-full lg:h-full max-h-[400px] object-cover -z-10" src="https://i.ibb.co/4gp7Dbh/Card.png" alt="Card" />
          <h4 className='font-medium text-2xl absolute top-24 sm:top-44 lg:top-12'>New Launch</h4>
          <p className='absolute top-36 sm:top-60 lg:top-24'>with new vision</p>
        </div>
        <div>
          <img className='w-full lg:w-auto h-full' src="https://i.ibb.co/pv6tJsp/love-event.png" alt="Love Event" />
        </div>
        <div>
          <img className='w-full lg:w-auto h-full' src="https://i.ibb.co/YddDvBQ/suppliers.png" alt="Suppliers" />
        </div>
      </div>
    </div>
  );
};

export default Banners;
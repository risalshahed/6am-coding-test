import Stars from "./Stars";

const EachProduct = ({ product, isNewArrival }) => {
  const {
    name,
    unit_price,
    discount,
    images,
    rating,
    purchase_price,
    category,
  } = product;

  const averageRating =
    rating.length > 0 && !isNaN(rating[0].average) ? rating[0].average : 0;

  return (
    <div className="single-product relative pt-1 rounded-md cursor-pointer hover:opacity-80 group">
      <img
        className="mx-auto rounded-md"
        src={`https://6valley.6amtech.com/storage/app/public/product/${images[0]}`}
        alt={name}
      />
      <div>
        <img
          className="absolute right-0 top-[20px] invisible group-hover:visible"
          src="https://i.postimg.cc/KcHPn92Z/add-to-bag.png"
          alt="bag"
        />
        <img
          className="absolute right-0 top-[60px] invisible group-hover:visible"
          src="https://i.postimg.cc/Gm0vfHtV/heart.png"
          alt="heart"
        />
        <img
          className="absolute right-0 top-[100px] invisible group-hover:visible"
          src="https://i.postimg.cc/x8hLndRk/teeny.png"
          alt="teeny"
        />
        <img
          className="absolute right-0 top-[140px] invisible group-hover:visible"
          src="https://i.postimg.cc/xTNKgKfL/eye.png"
          alt="eye"
        />
      </div>
      <div className="flex flex-col gap-y-1 justify-center items-center p-2 text-center">
        <div>
          <Stars rating={averageRating} />
        </div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-xs">{category?.name}</p>

        <div className="absolute top-0 left-0">
          {isNewArrival && (
            <div className=" bg-gray-800 text-sm text-white rounded-3xl px-3 py-1 m-2">
              <h2>New</h2>
            </div>
          )}

          <div className=" bg-red-600 text-sm text-white rounded-3xl px-3 py-1 m-2">
            <h2>{discount}%</h2>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <h3 className="text-gray-500 font-medium line-through text-sm">
            ${unit_price}
          </h3>
          <h4 className="font-semibold">${purchase_price}</h4>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
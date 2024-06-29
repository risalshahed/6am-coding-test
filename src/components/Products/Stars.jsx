import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Stars = ({ rating }) => {
  const validRating = isNaN(rating) || rating < 0 ? 0 : rating;
  const fullStars = Math.floor(validRating);
  const halfStar = validRating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating flex">
      {
        Array(fullStars)
        .fill()
        .map((_, index) => <FaStar className='text-amber-500' />)
      }

      {halfStar && <FaStar className='text-amber-500' />}

      {
        Array(emptyStars)
        .fill()
        .map((_, index) => (
          <CiStar />
        ))
      }
    </div>
  );
};

export default Stars;
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import { Rating } from 'react-simple-star-rating';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { deleteReview } from '../../utils/data/reviewData';
import Reactions from '../Reactions';

function ReviewCard({ reviewObj, onUpdate }) {
  const { user } = useAuth();
  const date = new Date(reviewObj.created_on);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const router = useRouter();
  const deleteThisReview = () => {
    if (window.confirm(`Heads up! You are about to permanently delete your review for ${reviewObj.book.title}. Click "OK" if you wish to continue.`)) {
      deleteReview(reviewObj.id).then(() => onUpdate()).then(() => {
        router.push(`/books/${reviewObj.book.id}`);
      });
    }
  };
  return (
    <div>
      <div>
        <Image src={reviewObj.user.profile_image} alt={reviewObj.user.nickname} width="200" height="200" />
        <p>{reviewObj.user.nickname}</p>
      </div>
      <div>
        <Rating
          name="star-rating"
          allowHover={false}
          allowHalfIcon
          className="star-rating"
          ratingValue={reviewObj.star_rating}
          size={20}
          readonly
        />
        <p>{date.toLocaleDateString(undefined, dateOptions)}</p>
        <p>{reviewObj.content}</p>
      </div>
      {reviewObj.user.id === user.id && (
      <div>
        <Link passHref href={`/reviews/edit/${reviewObj.id}`}>
          <FaEdit size={26} />
        </Link>
        <Link passHref href="/">
          <FaTrash size={26} onClick={deleteThisReview} />
        </Link>
      </div>
      )}
      <footer>
        <Reactions reviewId={reviewObj.id} />
      </footer>
    </div>
  );
}

ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    star_rating: PropTypes.number,
    content: PropTypes.string,
    created_on: PropTypes.string,
    book: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
    user: PropTypes.shape({
      id: PropTypes.number,
      profile_image: PropTypes.string,
      nickname: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ReviewCard;

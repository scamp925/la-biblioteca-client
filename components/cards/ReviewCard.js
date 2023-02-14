import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { Rating } from 'react-simple-star-rating';

function ReviewCard({ reviewObj }) {
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
        <p>{reviewObj.created_on}</p>
        <p>{reviewObj.content}</p>
      </div>
      {/* <div>{reviewObj.associated_reactions}</div> */}
    </div>
  );
}

ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    star_rating: PropTypes.string,
    content: PropTypes.string,
    created_on: PropTypes.string,
    book: PropTypes.shape({
      id: PropTypes.number,
    }),
    user: PropTypes.shape({
      id: PropTypes.number,
      profile_image: PropTypes.string,
      nickname: PropTypes.string,
    }),
    associated_reactions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      image_url: PropTypes.string,
    })),
  }).isRequired,
};

export default ReviewCard;

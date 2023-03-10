import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { useAuth } from '../../utils/context/authContext';
import { createReview, updateReview } from '../../utils/data/reviewData';

function ReviewForm({ reviewObj, bookId }) {
  const date = new Date().toISOString().slice(0, 10);
  const [formInput, setFormInput] = useState({
    starRating: 0,
    content: '',
    createdOn: date,
  });
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRating = (e) => {
    const value = e;
    setFormInput((prevState) => ({
      ...prevState,
      starRating: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewObj?.id) {
      updateReview(formInput, reviewObj.id).then(() => router.push(`/books/${reviewObj.book.id}`));
    } else {
      createReview(bookId, user, formInput).then(() => {
        router.push(`/books/${bookId}`);
      });
    }
  };

  useEffect(() => {
    if (reviewObj?.id) setFormInput(reviewObj);
  }, [reviewObj, user]);

  return (
    <div className="review-form-container">
      <Form onSubmit={handleSubmit}>
        <div className="review-form-star-rating-div">
          <h4 className="xx-large-text">My Rating</h4>
          <Rating
            allowHover={false}
            size={50}
            allowHalfIcon
            ratingValue={formInput.starRating}
            onClick={handleRating}
          />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} type="text" placeholder="Write a review" name="content" value={formInput.content} onChange={handleChange} />
        </Form.Group>
        <div>
          <Button type="submit" variant="success" className="submit-btn">{reviewObj?.id ? 'Update' : 'Add'} My Review</Button>
          <Button variant="danger" onClick={() => router.push(`/books/${bookId}`)}>Nevermind</Button>
        </div>
      </Form>
    </div>
  );
}

ReviewForm.propTypes = {
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    starRating: PropTypes.number,
    content: PropTypes.string,
    createdOn: PropTypes.string,
    book: PropTypes.shape({
      id: PropTypes.number,
    }),
    user: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
  bookId: PropTypes.string,
};

ReviewForm.defaultProps = {
  reviewObj: {},
  bookId: '',
};

export default ReviewForm;

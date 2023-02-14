import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { useAuth } from '../../utils/context/authContext';
import { createReview } from '../../utils/data/reviewData';

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
    createReview(bookId, user, formInput).then(() => {
      router.push(`/books/${bookId}`);
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="review-form-star-rating-div">
          <h4>My Rating</h4>
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
        <div className="form-btns">
          <Button type="submit" variant="success">{reviewObj?.id ? 'Update' : 'Add'} My Review</Button>
          <Button variant="danger" onClick={() => router.push(`/books/${bookId}`)}>
            Nevermind
          </Button>
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

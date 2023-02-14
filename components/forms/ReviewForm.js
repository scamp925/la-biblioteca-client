import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import { useAuth } from '../../utils/context/authContext';
import { createReview } from '../../utils/data/reviewData';

function ReviewForm({ bookId }) {
  const [formInput, setFormInput] = useState({
    starRating: 0,
    content: '',
    createdOn: '',
    bookId: '',
    user: 0,
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
        <div className="event-form-star-rating-div">
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
        <Button type="submit" variant="success">Add My Review</Button>
        {/* <div className="form-btn">
          <Button type="submit" variant="success">{reviewObj?.id ? 'Update' : 'Add'} My Review</Button>
        </div> */}
      </Form>
    </div>
  );
}

ReviewForm.propTypes = {
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    starRating: PropTypes.string,
    content: PropTypes.string,
    createdOn: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  bookId: PropTypes.number.isRequired,
};

export default ReviewForm;

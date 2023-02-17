import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addToShelf } from '../../utils/data/bookData';
import { useAuth } from '../../utils/context/authContext';

function BookShelfForm({ bookId }) {
  const [formInput, setFormInput] = useState('');
  const { user } = useAuth();
  const router = useRouter();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormInput((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToShelf(bookId, formInput.book_shelf, user.id).then(() => {
      router.push(`/books/${bookId}`);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="title mt-3">SELECT A SHELF</h2>
      <div className="margin-top" />
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          {/* <Form.Label className="whereTo">SELECT A SHELF</Form.Label> */}
          <ul>
            <li>
              <Form.Check
                className="want-to-read-option"
                inline
                label="Want To Read"
                name="book_shelf"
                type={type}
                id={`inline-${type}-1`}
                value="1"
                checked={formInput.book_shelf === '1'}
                onChange={(e) => setFormInput((prevState) => ({
                  ...prevState,
                  book_shelf: e.target.value,
                }))}
              />
            </li>
            <li>
              <Form.Check
                inline
                label="Currently Reading"
                name="book_shelf"
                type={type}
                id={`inline-${type}-2`}
                value="2"
                checked={formInput.book_shelf === '2'}
                onChange={(e) => setFormInput((prevState) => ({
                  ...prevState,
                  book_shelf: e.target.value,
                }))}
              />
            </li>
            <li>
              <Form.Check
                inline
                label="Read"
                name="book_shelf"
                type={type}
                id={`inline-${type}-3`}
                value="3"
                checked={formInput.book_shelf === '3'}
                onChange={(e) => setFormInput((prevState) => ({
                  ...prevState,
                  book_shelf: e.target.value,
                }))}
              />
            </li>
          </ul>

        </div>
      ))}
      <div className="form-btn">
        <Button type="submit" variant="success">Add To Shelf</Button>
      </div>
      {/* <div className="form-btn">
        <Button type="submit" variant="success">{eatOutObj?.firebaseKey ? 'Update' : 'Add'} Going Out Meal</Button>
      </div> */}
    </Form>
  );
}

BookShelfForm.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default BookShelfForm;

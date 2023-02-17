import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addToShelf, updateShelf } from '../../utils/data/bookData';
import { useAuth } from '../../utils/context/authContext';

function BookShelfForm({ bookObj }) {
  const [formInput, setFormInput] = useState('');
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (bookObj?.id) setFormInput(bookObj);
  }, [bookObj, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookObj.bookShelf) {
      if (formInput.bookShelf === 'Want to Read') {
        formInput.bookShelf = 1;
      } else if (formInput.bookShelf === 'Currently Reading') {
        formInput.bookShelf = 2;
      } else if (formInput.bookShelf === 'Read') {
        formInput.bookShelf = 3;
      }
      updateShelf(bookObj.id, formInput.bookShelf, user.id)
        .then(() => router.push(`/books/${bookObj.id}`));
    } else {
      if (formInput.bookShelf === 'Want to Read') {
        formInput.bookShelf = 1;
      } else if (formInput.bookShelf === 'Currently Reading') {
        formInput.bookShelf = 2;
      } else if (formInput.bookShelf === 'Read') {
        formInput.bookShelf = 3;
      }
      addToShelf(bookObj.id, formInput.bookShelf, user.id).then(() => {
        router.push(`/books/${bookObj.id}`);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="title mt-3">SELECT A SHELF</h2>
      <div className="margin-top" />
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <ul>
            <li>
              <Form.Check
                inline
                label="Want to Read"
                name="bookShelf"
                type={type}
                id={`inline-${type}-1`}
                value="Want to Read"
                checked={formInput.bookShelf === 'Want to Read'}
                onChange={(e) => setFormInput((prevState) => ({
                  ...prevState,
                  bookShelf: e.target.value,
                }))}
              />
            </li>
            <li>
              <Form.Check
                inline
                label="Currently Reading"
                name="bookShelf"
                type={type}
                id={`inline-${type}-2`}
                value="Currently Reading"
                checked={formInput.bookShelf === 'Currently Reading'}
                onChange={(e) => setFormInput((prevState) => ({
                  ...prevState,
                  bookShelf: e.target.value,
                }))}
              />
            </li>
            <li>
              <Form.Check
                inline
                label="Read"
                name="bookShelf"
                type={type}
                id={`inline-${type}-3`}
                value="Read"
                checked={formInput.bookShelf === 'Read'}
                onChange={(e) => setFormInput((prevState) => ({
                  ...prevState,
                  bookShelf: e.target.value,
                }))}
              />
            </li>
          </ul>

        </div>
      ))}
      <div className="form-btn">
        <Button type="submit" variant="success">{bookObj?.id ? 'Move' : 'Add'} to Shelf</Button>
        <Button variant="danger" onClick={() => router.push(`/books/${bookObj.id}`)}>Nevermind</Button>
      </div>
    </Form>
  );
}

BookShelfForm.propTypes = {
  bookObj: PropTypes.shape({
    id: PropTypes.number,
    bookShelf: PropTypes.string,
  }).isRequired,
};

export default BookShelfForm;

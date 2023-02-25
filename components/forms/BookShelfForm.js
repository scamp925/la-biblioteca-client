import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addToShelf, removeFromShelf, updateShelf } from '../../utils/data/bookData';
import { useAuth } from '../../utils/context/authContext';

function BookShelfForm({ bookObj, onUpdate }) {
  const [formInput, setFormInput] = useState('');
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (bookObj?.id) setFormInput(bookObj);
  }, [bookObj, user]);

  const removeBookFromMyBooks = () => {
    if (bookObj.bookShelf) {
      if (formInput.bookShelf === 'Want to Read') {
        formInput.bookShelf = 1;
      } else if (formInput.bookShelf === 'Currently Reading') {
        formInput.bookShelf = 2;
      } else if (formInput.bookShelf === 'Read') {
        formInput.bookShelf = 3;
      }
    }
    if (window.confirm(`Heads up! You are about to remove ${bookObj.title} from My Books. Click "OK" if you wish to continue.`)) {
      removeFromShelf(bookObj.id, formInput.bookShelf, user.id).then(() => onUpdate()).then(() => {
        router.push(`/books/${bookObj.id}`);
      });
    }
  };

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
    <div>
      <div className="select-bookshelf-container">
        <Form onSubmit={handleSubmit}>
          <h2 className="title mt-3 shelf-text">SELECT A SHELF</h2>
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
          <div>
            <Button type="submit" variant="success" className="submit-btn">{bookObj?.bookShelf ? 'Move' : 'Add'} to Shelf</Button>
            <Button variant="danger" onClick={() => router.push(`/books/${bookObj.id}`)}>Nevermind</Button>
          </div>
        </Form>
      </div>
      <div className="remove-from-self-btn">
        {bookObj.bookShelf && (
        <section>
          <Link passHref href={`/books/${bookObj.id}`}>
            <Button variant="outline-danger" onClick={removeBookFromMyBooks}>Remove from My Books</Button>
          </Link>
        </section>
        )}
      </div>
    </div>
  );
}

BookShelfForm.propTypes = {
  bookObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    bookShelf: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default BookShelfForm;

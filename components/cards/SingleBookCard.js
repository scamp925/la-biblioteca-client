/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../utils/context/authContext';

function SingleBookCard({ bookObj, reviewObj }) {
  const { user } = useAuth();
  const date = new Date(bookObj.firstPublished);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div>
      <aside>
        <ul>
          <li>
            <Image src={bookObj.cover_image} alt={bookObj.title} width="240" height="350" />
          </li>
          <li className="book-on-shelf">
            {bookObj.bookShelf ? <p><strong>{bookObj.title} is on your {bookObj.bookShelf.toUpperCase()} shelf</strong></p> : ''}
          </li>
          <li>
            <Link passHref href={bookObj.bookShelf ? `/books/bookshelves/edit/${bookObj.id}` : `/books/bookshelves/new/${bookObj.id}`}>
              <Button variant="success">{bookObj.bookShelf ? 'Move to Another Shelf' : 'Add to My Books'}</Button>
            </Link>
          </li>
          {bookObj.bookShelf === 'Read' ? (
            <li className="rate-book-btn">
              <Link passHref href={reviewObj.id ? `/reviews/edit/${reviewObj.id}` : `/reviews/new/${bookObj.id}`}>
                <Button variant="outline-success">{reviewObj.user?.id === user.id ? 'Edit Your Review' : 'Rate This Book'}</Button>
              </Link>
            </li>
          ) : (
            <p><em>Note: You will be able to rate this book and leave it a review once you have moved it to your "Read" shelf</em></p>
          )}
        </ul>
      </aside>
      <main className="single-book-main-container">
        <h1><strong>{bookObj.title}</strong></h1>
        <h2>{bookObj.author}</h2>
        <p><em>{bookObj.description}</em></p>
        <p className="smaller-text">{bookObj.length} pages</p>
        <p className="smaller-text">First published {date.toLocaleDateString(undefined, dateOptions)}</p>
      </main>
    </div>
  );
}

SingleBookCard.propTypes = {
  bookObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    cover_image: PropTypes.string,
    description: PropTypes.string,
    length: PropTypes.number,
    firstPublished: PropTypes.string,
    bookShelf: PropTypes.string,
  }).isRequired,
  reviewObj: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

SingleBookCard.defaultProps = {
  reviewObj: {},
};

export default SingleBookCard;

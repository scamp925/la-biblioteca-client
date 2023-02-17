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
          <li>
            {bookObj.bookShelf ? <p><strong>{bookObj.title} is on your {bookObj.bookShelf} shelf</strong></p> : ''}
          </li>
          <li>
            <Link passHref href={`/books/bookshelves/new/${bookObj.id}`}>
              <Button variant="success">{bookObj.bookShelf ? 'Move to Another Shelf' : 'Add to My Books'}</Button>
            </Link>
          </li>
          <li>
            <Link passHref href={reviewObj.id ? `/reviews/edit/${reviewObj.id}` : `/reviews/new/${bookObj.id}`}>
              <Button variant="outline-success">{reviewObj.user?.id === user.id ? 'Edit Your Review' : 'Rate This Book'}</Button>
            </Link>
          </li>
        </ul>
      </aside>
      <main>
        <h1>{bookObj.title}</h1>
        <h2>{bookObj.author}</h2>
        <p>{bookObj.description}</p>
        <p>{bookObj.length} pages</p>
        <p>First published {date.toLocaleDateString(undefined, dateOptions)}</p>
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

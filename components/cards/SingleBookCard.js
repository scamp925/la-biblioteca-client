import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

function SingleBookCard({ bookObj }) {
  return (
    <div>
      <aside>
        <Image src={bookObj.coverImage} alt={bookObj.title} width="140" height="200" />
        {bookObj.bookShelf ? <p>On You {bookObj.bookShelf} Shelf</p> : ''}
        <Link passHref href="/shelves/new">
          <Button variant="success">{bookObj.bookShelf ? 'Move to Another Shelf' : 'Add to My Books'}</Button>
        </Link>
        <Link passHref href="/reviews/new">
          <Button variant="outline-success">Add a Review</Button>
        </Link>
      </aside>
      <main>
        <ul>
          <li><h1>{bookObj.title}</h1></li>
          <li><h2>{bookObj.author}</h2></li>
          <li><p>{bookObj.description}</p></li>
          <li><p>{bookObj.length} pages</p></li>
          <li><p>First published {bookObj.firstPublished}</p></li>
        </ul>
        <h1>{bookObj.title}</h1>
        <h2>{bookObj.author}</h2>
        <p>{bookObj.description}</p>
        <p>{bookObj.length} pages</p>
        <p>First published {bookObj.firstPublished}</p>
      </main>
    </div>
  );
}

SingleBookCard.propTypes = {
  bookObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    coverImage: PropTypes.string,
    description: PropTypes.string,
    length: PropTypes.number,
    firstPublished: PropTypes.string,
    bookShelf: PropTypes.string,
  }).isRequired,
};

export default SingleBookCard;

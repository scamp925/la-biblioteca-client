import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';

function BookCard({ bookObj }) {
  return (
    <div className="book-cards">
      <Link passHref href={`/books/${bookObj.id}`}>
        <Image src={bookObj.cover_image} alt={bookObj.title} width="140" height="200" />
      </Link>
    </div>
  );
}

BookCard.propTypes = {
  bookObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cover_image: PropTypes.string,
  }).isRequired,
};

export default BookCard;

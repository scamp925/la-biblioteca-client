import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';

function BookCard({ bookObj }) {
  return (
    <div>
      <Link passHref href="/currentlyReading">
        <Image src={bookObj.coverImage} alt={bookObj.title} width="450" height="500" />
      </Link>
    </div>
  );
}

BookCard.propTypes = {
  bookObj: PropTypes.shape({
    title: PropTypes.string,
    coverImage: PropTypes.string,
  }).isRequired,
};

export default BookCard;

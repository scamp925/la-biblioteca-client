import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

function BookSnippetCard({ bookObj }) {
  return (
    <>
      <div className="book-snippet-details">
        <aside>
          <Image src={bookObj?.cover_image} alt={bookObj?.title} width="160" height="250" />
        </aside>
        <main className="book-title-and-author-container">
          <h1 className="title-size">{bookObj?.title}</h1>
          <h2 className="author-size">{bookObj?.author}</h2>
        </main>
      </div>
      <hr />
    </>
  );
}

BookSnippetCard.propTypes = {
  bookObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    cover_image: PropTypes.string,
  }).isRequired,
};

export default BookSnippetCard;

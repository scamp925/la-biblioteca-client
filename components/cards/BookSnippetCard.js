import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

function BookSnippetCard({ bookObj }) {
  return (
    <>
      <div>
        <aside>
          <Image src={bookObj.coverImage} alt={bookObj.title} width="240" height="350" />
        </aside>
        <main>
          <h1>{bookObj.title}</h1>
          <h2>{bookObj.author}</h2>
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
    coverImage: PropTypes.string,
  }).isRequired,
};

export default BookSnippetCard;

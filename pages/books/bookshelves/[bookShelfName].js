/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BookCard from '../../../components/cards/BookCard';
import { useAuth } from '../../../utils/context/authContext';
import { getAllUserBooks } from '../../../utils/data/bookData';

export default function BookShelves() {
  const router = useRouter();
  const { bookShelfName } = router.query;
  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  const allBooks = () => {
    getAllUserBooks(user.id).then(setBooks);
  };

  const booksOnWantToRead = books.filter((book) => book.book_shelf === 'Want to Read');

  const booksOnCurrentlyReading = books.filter((book) => book.book_shelf === 'Currently Reading');

  const booksOnRead = books.filter((book) => book.book_shelf === 'Read');

  useEffect(() => {
    allBooks();
  }, [bookShelfName, user]);

  if (bookShelfName === 'wantToRead') {
    return (
      <div>
        <header>
          <h3>The Worlds Waiting For You</h3>
          <h2>Want To Read Shelf</h2>
        </header>
        <div className="all-books-container">
          {booksOnWantToRead?.map((book) => (
            <BookCard key={book.id} bookObj={book} />
          ))}
        </div>
      </div>
    );
  }
  if (bookShelfName === 'currentlyReading') {
    return (
      <div>
        <header>
          <h3>The Worlds Waiting For You</h3>
          <h2>Want To Read Shelf</h2>
        </header>
        <div className="all-books-container">
          {booksOnCurrentlyReading?.map((book) => (
            <BookCard key={book.id} bookObj={book} />
          ))}
        </div>
      </div>
    );
  }
  if (bookShelfName === 'read') {
    return (
      <div>
        <header>
          <h3>The Worlds Waiting For You</h3>
          <h2>Want To Read Shelf</h2>
        </header>
        <div className="all-books-container">
          {booksOnRead?.map((book) => (
            <BookCard key={book.id} bookObj={book} />
          ))}
        </div>
      </div>
    );
  }
}

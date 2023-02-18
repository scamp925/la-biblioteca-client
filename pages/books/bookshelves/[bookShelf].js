/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BookCard from '../../../components/cards/BookCard';
import { useAuth } from '../../../utils/context/authContext';
import { getAllBooks } from '../../../utils/data/bookData';

export default function BookShelves() {
  const router = useRouter();
  const { bookShelfName } = router.query;
  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  const allBooks = () => {
    getAllBooks(user.id).then(setBooks);
  };

  useEffect(() => {
    allBooks();
  }, [bookShelfName, user]);

  if (books.bookShelf === bookShelfName) {
    return (
      <div>
        <header>
          <h3>The Worlds Waiting For You</h3>
          <h2>Want to Read Shelf</h2>
        </header>
        <div>
          {books?.map((book) => (
            <BookCard key={book.id} bookObj={book} />
          ))}
        </div>
      </div>
    );
  } if (books.bookShelf === bookShelfName) {
    return (
      <div>
        <header>
          <h3>The Worlds Where You Are Currently Living</h3>
          <h2>Currently Read Shelf</h2>
        </header>
        <div>
          {books?.map((book) => (
            <BookCard key={book.id} bookObj={book} />
          ))}
        </div>
      </div>
    );
  } if (books.bookShelf === bookShelfName) {
    return (
      <div>
        <header>
          <h3>The Worlds Where Part of You Will Live Forever</h3>
          <h2>Read Shelf</h2>
        </header>
        <div>
          {books?.map((book) => (
            <BookCard key={book.id} bookObj={book} />
          ))}
        </div>
      </div>
    );
  }
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BookSnippetCard from '../../../../components/cards/BookSnippetCard';
import BookShelfForm from '../../../../components/forms/BookShelfForm';
import { useAuth } from '../../../../utils/context/authContext';
import { getAllBooks, getSingleBook } from '../../../../utils/data/bookData';

export default function UpdateShelfForm() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [book, setBook] = useState({});

  const singleBook = () => {
    getSingleBook(id, user.id).then(setBook);
  };

  const allBooks = () => {
    getAllBooks(user.id);
  };

  useEffect(() => {
    singleBook();
  }, [id]);

  return (
    <div>
      <section>
        <BookSnippetCard bookObj={book} />
      </section>
      <section>
        <BookShelfForm bookObj={book} onUpdate={allBooks} />
      </section>
    </div>
  );
}

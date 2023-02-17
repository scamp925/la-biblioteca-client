/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BookSnippetCard from '../../../../components/cards/BookSnippetCard';
import BookShelfForm from '../../../../components/forms/BookShelfForm';
import { useAuth } from '../../../../utils/context/authContext';
import { getSingleBook } from '../../../../utils/data/bookData';

export default function AddToShelfForm() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [book, setBook] = useState({});

  const singleBook = () => {
    getSingleBook(id, user.id).then(setBook);
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
        <BookShelfForm bookId={id} />
      </section>
    </div>
  );
}

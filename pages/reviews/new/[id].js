/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReviewForm from '../../../components/forms/ReviewForm';
import { getSingleBook } from '../../../utils/data/bookData';
import BookSnippetCard from '../../../components/cards/BookSnippetCard';
import { useAuth } from '../../../utils/context/authContext';

export default function CreateReviewForm() {
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
      <BookSnippetCard bookObj={book} />
      <ReviewForm bookId={id} />
    </div>
  );
}

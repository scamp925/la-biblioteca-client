import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReviewForm from '../../../components/forms/ReviewForm';
import { getSingleBook } from '../../../utils/data/bookData';
import BookSnippetCard from '../../../components/cards/BookSnippetCard';

export default function CreateReviewForm() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState({});

  const singleBook = () => {
    getSingleBook(id).then(setBook);
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

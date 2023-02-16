/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleReview } from '../../../utils/data/reviewData';
import ReviewForm from '../../../components/forms/ReviewForm';
import BookSnippetCard from '../../../components/cards/BookSnippetCard';

function EditReviewForm() {
  const [editItem, setEditItem] = useState();
  const router = useRouter();
  const { id } = router.query;

  const singleReview = () => {
    getSingleReview(id).then(setEditItem);
  };

  useEffect(() => {
    singleReview();
  }, [id]);

  return (
    <div>
      <BookSnippetCard bookObj={editItem?.book} />
      <ReviewForm reviewObj={editItem} bookId={editItem?.book.id} />
    </div>
  );
}

export default EditReviewForm;

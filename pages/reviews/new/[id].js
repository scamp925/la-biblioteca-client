import React from 'react';
import { useRouter } from 'next/router';
import ReviewForm from '../../../components/forms/ReviewForm';

export default function CreateReviewForm() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <ReviewForm bookId={id} />
    </div>
  );
}

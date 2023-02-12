/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../../components/cards/ReviewCard';
import SingleBookCard from '../../components/cards/SingleBookCard';
import { getSingleBook } from '../../utils/data/bookData';
import { getAllBookReviews } from '../../utils/data/reviewData';

export default function SingleBook() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);

  const singleBook = () => {
    getSingleBook(id).then(setBook);
  };

  const getReviews = () => {
    getAllBookReviews(id).then(setReviews);
  };

  useEffect(() => {
    singleBook();
    getReviews();
  }, [id]);

  return (
    <div>
      <SingleBookCard bookObj={book} reviewObj={reviews} />
      <h4>Community Reviews</h4>
      <div>
        {reviews.length === 0 && <><p>No Reviews Yet</p><p>Be the first to add one by clicking "Add a Review" above.</p></>}
      </div>
      {reviews?.map((review) => (
        <ReviewCard key={review.id} reviewObj={review} />
      ))}
    </div>
  );
}

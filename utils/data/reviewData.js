import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL REVIEWS CARDS
const getAllBookReviews = (bookId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/reviews?book=${bookId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET SINGLE REVIEW
const getSingleReview = (reviewId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/reviews/${reviewId}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        starRating: data.star_rating,
        content: data.content,
        createdOn: data.created_on,
        book: data.book,
        user: data.user,
        associatedReactions: data.associated_reactions,
      });
    })
    .catch(reject);
});

// CREATE NEW REVIEW
const createReview = (book, user, review) => new Promise((resolve, reject) => {
  const reviewObj = {
    star_rating: Number(review.starRating),
    content: review.content,
    created_on: review.createdOn,
    book_id: book,
    user_id: user.id,
  };
  fetch(`${clientCredentials.databaseURL}/reviews`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(reviewObj),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// UPDATE SINGLE REVIEW
const updateReview = (review, id) => new Promise((resolve, reject) => {
  const reviewObj = {
    star_rating: Number(review.starRating),
    content: review.content,
    created_on: review.createdOn,
  };
  fetch(`${clientCredentials.databaseURL}/reviews/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(reviewObj),
  })
    .then((response) => resolve(response))
    .catch(reject);
});

// DELETE SINGLE REVIEW
const deleteReview = (reviewId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response))
    .catch(reject);
});

export {
  getAllBookReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
};

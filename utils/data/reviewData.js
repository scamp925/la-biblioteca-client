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
    bookId: book.id,
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

export {
  getAllBookReviews,
  getSingleReview,
  createReview,
};

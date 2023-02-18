import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL REVIEW'S REACTIONS
const getAllReviewReactions = (reviewId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/reactions?review=${reviewId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default getAllReviewReactions;

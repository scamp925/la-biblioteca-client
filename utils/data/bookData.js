import { clientCredentials } from '../client';

const dbUrl = clientCredentials.databaseURL;

// GET ALL BOOK CARDS
const getAllBooks = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/books`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET SINGLE BOOK
const getSingleBook = (bookId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/books/${bookId}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        title: data.title,
        description: data.description,
        imageUrl: data.image_url,
        price: data.price,
        quantity: data.quantity,
        seller: data.seller,
      });
    })
    .catch(reject);
});

export {
  getAllBooks,
  getSingleBook,
};

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
const getSingleBook = (bookId, user) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/books/${bookId}?user=${user}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        title: data.title,
        author: data.author,
        cover_image: data.cover_image,
        description: data.description,
        length: data.length,
        firstPublished: data.first_published,
        bookShelf: data.book_shelf,
      });
    })
    .catch(reject);
});

const addToShelf = (bookId, shelfId, userId) => new Promise((resolve, reject) => {
  const addToShelfObj = {
    shelf_id: shelfId,
    user_id: userId,
  };
  fetch(`${clientCredentials.databaseURL}/books/${bookId}/add_to_shelf`, {
    method: 'POST',
    headers: {
      Authorization: userId,
      'content-type': 'application/json',
    },
    body: JSON.stringify(addToShelfObj),
  })
    .then(resolve)
    .catch(reject);
});

export {
  getAllBooks,
  getSingleBook,
  addToShelf,
};

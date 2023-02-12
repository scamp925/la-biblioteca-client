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
        author: data.author,
        coverImage: data.cover_image,
        description: data.description,
        length: data.length,
        firstPublished: data.first_published,
        bookShelf: data.book_shelf,
      });
    })
    .catch(reject);
});

export {
  getAllBooks,
  getSingleBook,
};

import { useEffect, useState } from 'react';
import BookCard from '../components/cards/BookCard';
import { getAllBooks } from '../utils/data/bookData';

function Home() {
  const [books, setBooks] = useState([]);

  const getAllTheBooks = () => {
    getAllBooks().then(setBooks);
  };

  useEffect(() => {
    getAllTheBooks();
  }, []);

  return (
    <div>
      <h2>Escape Your World: Dive Into Another One</h2>
      <section className="all-books-container">
        {books?.map((book) => (
          <BookCard key={book.id} bookObj={book} />
        ))}
      </section>
    </div>
  );
}

export default Home;

import { useEffect, useState } from 'react';
import BookCard from '../components/cards/BookCard';
import Search from '../components/Search';
import { getAllBooks } from '../utils/data/bookData';

function Home() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const getAllTheBooks = () => {
    getAllBooks().then((bookArray) => {
      setBooks(bookArray);
      setFilteredBooks(bookArray);
    });
  };

  useEffect(() => {
    getAllTheBooks();
  }, []);

  return (
    <div>
      <h3>Escape Your World: Dive Into Another One</h3>
      <Search books={books} setFilteredBooks={setFilteredBooks} />
      <section className="all-books-container">
        {filteredBooks?.map((book) => (
          <BookCard key={book.id} bookObj={book} />
        ))}
      </section>
    </div>
  );
}

export default Home;

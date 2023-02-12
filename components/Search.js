import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search({ books, setFilteredBooks }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    const results = books.filter((book) => book.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredBooks(results);
  };

  const resetInput = () => {
    setSearchInput('');
    setFilteredBooks(books);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Title/Author"
          aria-label="Title/Autho"
          value={searchInput}
          onChange={handleChange}
          aria-describedby="basic-addon2"
        />
        <Button variant="secondary" onClick={resetInput}>
          Reset Search
        </Button>
      </InputGroup>
    </div>
  );
}

Search.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
  setFilteredBooks: PropTypes.func.isRequired,
};

export default Search;

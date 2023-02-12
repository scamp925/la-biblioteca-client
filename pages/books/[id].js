import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SingleBookCard from '../../components/cards/SingleBookCard';
import { getSingleBook } from '../../utils/data/bookData';

export default function SingleBook() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState({});

  const singleBook = () => {
    getSingleBook(id).then(setBook);
  };

  useEffect(() => {
    singleBook();
  }, [id]);

  return (
    <div>
      <SingleBookCard bookObj={book} />
    </div>
  );
}

import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Book from '../../components/book/Book';
import { getBooks } from '../../services/books';
import BookDetail from './BookDetail';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks()
      .then(({ data }) => setBooks(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading books...</h1>;

  return (
    <Router>
      <Link to="/books">
        <ul className="book-list" aria-label="book list">
          {books.map((book) => (
            <li key={book.book_id}>
              <Link to={`/books/${book.book_id}`}>
                <Book book={book} />
              </Link>
            </li>
          ))}
        </ul>
      </Link>
    </Router>
  );
}

export default BookList;

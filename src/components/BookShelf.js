import { useSelector } from 'react-redux';
import Book from './Book';
import AddNewBookForm from './AddNewBookForm';

const BookShelf = () => {
  const books = useSelector((state) => state.books);

  return (
    <main className="hero">
      <ul>
        {books.map(({ id, title, author }) => (
          <Book id={id} key={id} title={title} author={author} />
        ))}
      </ul>
      <AddNewBookForm />
    </main>
  );
};

export default BookShelf;

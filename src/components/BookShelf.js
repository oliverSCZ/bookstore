import { useSelector } from 'react-redux';
import Book from './Book';
import AddNewBookForm from './AddNewBookForm';

const BookShelf = () => {
  const books = useSelector((state) => state.books);

  return (
    <main className="hero">
      <ul>
      {books.map(({
        id, category, title, author, completed, chapter,
      }) => (
        <Book
          key={id}
          category={category}
          title={title}
          author={author}
          completed={completed}
          chapter={chapter}
        />
      ))}
      </ul>
      <AddNewBookForm />
    </main>
  );
};

export default BookShelf;

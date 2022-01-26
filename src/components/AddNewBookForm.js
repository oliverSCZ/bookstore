import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddNewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const inputChange = (e) => {
    if (e.target.name === 'author') setAuthor(e.target.value);
    else setTitle(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      title,
      author,
      id: Math.random().toString(),
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitBookToStore(e);
      }}
    >
      <input
        id="bookTitle"
        value={title}
        name="title"
        type="text"
        placeholder="Book Title"
        onChange={inputChange}
      />
      <input
        id="bookAuthor"
        name="author"
        value={author}
        type="text"
        placeholder="Author"
        onChange={inputChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddNewBookForm;

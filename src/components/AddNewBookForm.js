import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newBookRedux } from '../redux/books/booksRedux';

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

    dispatch(newBookRedux(newBook));
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
        required
      />
      <input
        id="bookAuthor"
        name="author"
        value={author}
        type="text"
        placeholder="Author"
        onChange={inputChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddNewBookForm;

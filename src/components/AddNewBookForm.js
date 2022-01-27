import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newBookRedux } from '../redux/books/booksRedux';
import './addNewBookForm.css';

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
    <div>
      <h3 className="form-title">Add new book</h3>
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
          className="title-input"
          required
        />
        <input
          id="bookAuthor"
          name="author"
          value={author}
          type="text"
          placeholder="Author"
          onChange={inputChange}
          className="author-input"
          required
        />
        <button type="submit" className="add-book-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddNewBookForm;

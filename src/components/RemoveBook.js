import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBookRedux } from '../redux/books/booksRedux';
import './removeBook.css';

const RemoveBook = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteBookRedux(bookId));

  return (
    <button type="button" className="remove-btn" onClick={handleRemove}>
      Remove
    </button>
  );
};

RemoveBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default RemoveBook;

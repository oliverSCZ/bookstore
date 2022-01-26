import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const RemoveBook = ({ bookId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(bookId));

  return (
    <button type="button" onClick={handleRemove}>
      Remove
    </button>
  );
};

RemoveBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default RemoveBook;

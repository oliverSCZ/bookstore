import PropTypes from 'prop-types';
import RemoveBook from './RemoveBook';

const Book = ({ title, author, id }) => (
  <li key={id}>
    <h2>{title}</h2>
    <p>{author}</p>

    <RemoveBook bookId={id} />
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;

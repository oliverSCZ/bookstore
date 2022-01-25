import PropTypes from 'prop-types';

const Book = ({
  id, category, title, author, completed, chapter,
}) => (
  <li key={id}>
    <p>{category}</p>
    <h2>{title}</h2>
    <p>{author}</p>
    <button type="button">Comments</button>
    <button type="button">Remove</button>
    <button type="button">Edit</button>
    <p>
      {completed}
      % Completed
    </p>
    <p>Current Chapter</p>
    <p>{chapter}</p>
    <button type="button">Update progress</button>
  </li>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;

import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import RemoveBook from './RemoveBook';
import 'react-circular-progressbar/dist/styles.css';
import './book.css';
import '@fontsource/roboto-slab';

const Book = ({ title, author, id }) => (
  <li className="book-panel" key={id}>
    <div className="left-side">
      <p className="category">Science Fiction</p>
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
      <button type="button" className="comments-btn btn">
        Comments
      </button>
      <RemoveBook bookId={id} />
      <button type="button" className="edit-btn btn">
        Edit
      </button>
    </div>
    <div className="center-side">
      <div className="center-diagram">
        <div className="diagram">
          <CircularProgressbar value={64} />
        </div>
        <div>
          <p className="diagram-proc">64%</p>
          <p className="diagram-mess">Completed</p>
        </div>
      </div>
      <div className="vertical-bar" />
    </div>
    <div className="right-side">
      <p className="curr-ch">Current Chapter</p>
      <p className="curr-ch-name">Chapter 9</p>
      <button type="submit" className="update-btn">
        Update Progress
      </button>
    </div>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;

import { Link } from 'react-router-dom';
import './navBar.css';
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => (
  <header className="header-panel">
    <h1 className="header-title">Bookstore CMS</h1>
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li className="main-nav-list-item">
          <Link to="/" className="nav-link nav-book">
            Books
          </Link>
        </li>
        <li className="main-nav-list-item">
          <Link to="/categories" className="nav-link nav-cat">
            Categories
          </Link>
        </li>
      </ul>
    </nav>
    <span className="user-icon">
      <FaUserAlt className="icon" />
    </span>
  </header>
);

export default NavBar;

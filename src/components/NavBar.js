import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="header">
    <h1 className="header-title">Bookstore CMS</h1>
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li className="main-nav-list-item">
          <Link to="/" className="nav-link">
            Books
          </Link>
        </li>
        <li className="main-nav-list-item">
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
        </li>
      </ul>
    </nav>
    <span className="user-icon">(User Icon)</span>
  </header>
);

export default NavBar;

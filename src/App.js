import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import Categories from './components/Categories';
import { getInitialBooks } from './redux/books/booksRedux';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialBooks());
  }, []);

  return (
    <div className="App-Wrapper-Outer">
      <div className="App-Wrapper-Inner">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<BookShelf />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

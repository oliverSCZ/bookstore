import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import BookShelf from './components/BookShelf';
import Categories from './components/Categories';
import { getInitialBooks } from './redux/books/booksRedux';

const App = () =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitialBooks());
  }, []);

  return (
  <div className="App">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<BookShelf />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
)};

export default App;

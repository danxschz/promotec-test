import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import List from './pages/List/List';
import UserCreate from './pages/UserCreate/UserCreate';
import UserDetail from './pages/UserDetail/UserDetail';
import UserDelete from './pages/UserDelete/UserDelete';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:page" element={<List />} />
          <Route path="/user/create" element={<UserCreate />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/user/:id/delete" element={<UserDelete />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

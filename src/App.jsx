import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import List from './pages/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/:page" element={<List />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

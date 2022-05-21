import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Products, Error, SharedLayout } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={SharedLayout}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

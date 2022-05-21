import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, About, Products, Error } from './pages';
function App() {
  return (
    <BrowserRouter>
      <nav>Our Nav</nav>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='dashboard' element={<div>Dashboard</div>}>
          <Route path='stats' element={<div>Stats</div>} />
        </Route>
      </Routes>
      <footer>Our Footer</footer>
    </BrowserRouter>
  );
}

export default App;

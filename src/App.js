import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, About, Products, Error } from './pages';
function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;

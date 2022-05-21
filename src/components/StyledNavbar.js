import { NavLink } from 'react-router-dom';

// navlink we can pass function in style or class for isActive
const StyledNavbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        // style={({ isActive }) => {
        //   return { color: isActive ? 'red' : 'grey' };
        // }}
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;

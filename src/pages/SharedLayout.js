import { Outlet } from 'react-router-dom';
import { Navbar, StyledNavbar } from '../components';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;

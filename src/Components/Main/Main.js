import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Navebar/Navebar';

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
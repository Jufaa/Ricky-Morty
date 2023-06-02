import React from 'react';
import { ShowPJS } from './ShowPJS';
import { NavBar } from '../../components/NavBar';
import { Pagination } from '../../components/Pagination';

const Home = () => {
  return (
    <>
      <NavBar />
      <ShowPJS />
    </>
  );
};

export default Home;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login } from '../../pages';

export type RutasProps = unknown;

const Rutas: React.FC<RutasProps> = () => {
  return (
    <Routes>
      <Route Component={Login} path="/" />
      <Route Component={Home} path="/personajes" />
    </Routes>
  );
};

export default Rutas;

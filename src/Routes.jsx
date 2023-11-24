// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerList from './CustomerList';
import Home from './components/Home';
import Login from './components/Login-page';
import Register from './components/register';
import Private_route from './private_routes/Private_route';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      <Route element ={<Private_route/>}>
      <Route path="/" element={<Home />} />
      <Route path="customer-list" element={<CustomerList />} />    
      </Route> 


    </Routes>
  );
};

export default AppRoutes;

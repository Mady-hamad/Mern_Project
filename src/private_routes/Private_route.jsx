import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Button } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';






const Private_route = () => {
  const navigate = useNavigate();

 
  


  useEffect(()=>{
    const verifytoken = async () => {
      try {

        const token = localStorage.getItem('token');

        if(!token){
          navigate('/login')
        }
        
      } catch (error) {
        console.error('Error verifying token' , error);
        navigate('/login')
      }
      


     
    };
    verifytoken();


  }, [])

 

  

  return (
    <>
      
      <Outlet />

      <ToastContainer />

    </>
  );
};

export default Private_route;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './Routes';
import Sidebar from './Sidebar';
import { Button } from '@mui/material';

const App = () => {
  return (

      <div className="app">
        <div style={{marginLeft:"10rem", display:'flex' , alignItems:'center' , alignContent:'center', justifyContent:'space-around'}} className='headder'>

          <div>

          <h1>Customers</h1>
          </div>

          <div>
            <Link to='/login'>
            <Button>Login</Button>
            </Link>

            <Link to='/register'>
            <Button>Register</Button>
            </Link>

         </div>
        </div>
        <Sidebar/>
        <AppRoutes />
      </div>
  );
};

export default App;

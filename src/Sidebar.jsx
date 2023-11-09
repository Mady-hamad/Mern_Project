import React, { useState } from 'react';
import './App.css'
import AppRoutes from './Routes';
import { Link } from 'react-router-dom';


const Sidebar = ({ toggleCustomerList }) => {
  const [isCustomerListVisible, setCustomerListVisible] = useState(true);

  const handleToggleCustomerList = () => {
    setCustomerListVisible(!isCustomerListVisible);
    toggleCustomerList(!isCustomerListVisible);
  };

  return (

    <div className="sidebar">
      <h2>Sidebar</h2>
    
      <nav>
          <ul>
            <li style={{listStyle:'none'}}>
              <Link style={{color:'white', textDecoration:'none'}} to="/">Home</Link>
            </li>
            <li style={{listStyle:'none'}}>
              <Link style={{color:'white', textDecoration:'none'}} to="/customer-list">Customer List</Link>
            </li>
          </ul>
        </nav>


      {/* <AppRoutes/> */}
    </div>
  );
};

export default Sidebar;

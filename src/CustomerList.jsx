import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

import './App.css'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { addCustomer ,deleteCustomer } from './custumerSlice'; // Import the addCustomer action






// TASK 1 : Displaying hard coded data into table and adding dynamic customer data to the customers table

// const CustomerList = ({ customers }) => {

//   const [open, setOpen] = React.useState(false);
//  const [customerData, setCustomerData] = useState(customers);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');


//   console.log(`this is customer data==>` ,customerData);


  

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
 
//   const handleAddCustomer = () => {
//     // Update the customers state variable with the new customer data
//     setCustomerData((prevState) => [...prevState, {
//       id: prevState.length + 1, // Generate a unique ID or use some logic to generate IDs
//       name: name,
//       email: email,
//     }]);
  
//     // Reset the input fields
//     setName('');
//     setEmail('');
  
//     // Close the dialog
//     setOpen(false);
//   };
  
// console.log(`handle sbumt buton==>` , handleAddCustomer);

// console.log(`customerz==>`, customers );



//   return (

//     <>

//      <div style={{marginTop:'2rem'}}>
//       <Button startIcon={<AddCircleOutlineIcon/>} onClick={handleClickOpen} variant="contained" color="success" >Add Customer</Button>
      

//       </div>
//     <div className='customerListParents'>

//       <table>
//         <thead>
//           <tr className='table_row'>
//             <th startIcon={<VerticalAlignCenterIcon/>} colSpan="5" align="left">Customer ID</th>
//             <th startIcon={<VerticalAlignCenterIcon/>}  colSpan="5" align="left">Customer Name</th>
//             <th colSpan="5" align="left">Customer Email</th>
//             <th colSpan="3" align="left"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {customerData.map((customer) => (
//             <tr key={customer.id}>
//               <td colspan="5" align="left">{customer.id}</td>
//               <td colspan="5" align="left">{customer.name}</td>
//               <td colspan="5" align="left">{customer.email}</td>
//               <td> <button id='edit'>Edit</button> </td>
//               <td> <button id='delete'>Delete</button> </td>
//             </tr>
//           ))
//           }
//         </tbody>
//       </table>
//     </div>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle style={{backgroundColor:'#4CAE89',color:'white'}}>Add Customer</DialogTitle>
//         <DialogContent>
//          <TextField
//   autoFocus
//   margin="dense"
//   id="name"
//   label="Name"
//   type="text"
//   fullWidth
//   variant="standard"
//   value={name} // Bind to the 'name' state variable
//   onChange={(e) => setName(e.target.value)}
// />
//         </DialogContent>
//         <DialogContent>
//          <TextField
//   autoFocus
//   margin="dense"
//   id="email"
//   label="Email Address"
//   type="email"
//   fullWidth
//   variant="standard"
//   value={email} // Bind to the 'email' state variable
//   onChange={(e) => setEmail(e.target.value)}
// />
//         </DialogContent>
//         <DialogContent>
//         <Button
//   variant="text"
//   component="label"
// >
//   Upload File
//   <input
//     type="file"
//     hidden
//   />
// </Button>
//         </DialogContent>
//         <DialogActions>
//           {/* <Button onClick={handleClose}>Cancel</Button> */}
//           <Button color='success' fullWidth onClick={handleAddCustomer} >ADD CUSTOMER</Button>
//         </DialogActions>
//       </Dialog>
    
    
    
//     </>
//   );
// };


//Task 2: Integrating customer data API and displaying following data to the table with adding dynamic data via form

const CustomerList = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newCustomerData, setNewCustomerData] = useState(null);
  const [image, setImage] = useState(null);
  const [previousCustomerData, setPreviousCustomerData] = useState([]);
  const [items, setItems] = useState([]);

 
  

  console.log(`new cust data==>`, newCustomerData);
  
  
  
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  const [customerData, setCustomerData] = useState([...customers, ...showItemsData()]);



  // const handleDeleteCustomer = (customerId) => {
  //   const newCustomerData = customers.filter(customer => customer.id !== customerId);
  //   setCustomerData(newCustomerData);

  //   console.log(`Deleted customer with ID: ${customerId}`);
  // };
  const handleDeleteCustomer = (customerId) => {
    const updatedCustomerData = customerData.filter((customer) => customer.id !== customerId);
    setCustomerData(updatedCustomerData);
    console.log(`Deleted customer with ID: ${customerId}`);
  };
  
  const handleDeleteNewCustomer = () => {
    setNewCustomerData(null);
  };
  
  

  




  const handleFetchData = async() =>{
      try {
        const response = await fetch('https://reqres.in/api/users?page=1%22');
        const data = await response.json();
        setCustomerData(data.data);

        console.log(`dataa==>` , data.data);

      } catch (error) {
        console.log(error);
      }

    }
      

  

  useEffect(() => {
    handleFetchData()
  }, []);




  const handleClickOpen = () => {
    // Open the dialog
    setOpen(true);
  };

  const handleClose = () => {
    // Close the dialog
    setOpen(false);
  };

  const handleAddCustomer = () => {
    const newCustomer = {
      id: customerData.length + 1,
      name,
      email,
      image: image,

    };

    const existingCustomerData = JSON.parse(localStorage.getItem('customerData')) || [];


    console.log(`existing dataaa==>` , existingCustomerData);

    // Add the new customer to the existing data
    const updatedCustomerData = [...existingCustomerData, newCustomer];
  
    // Update the local storage with the updated data
    localStorage.setItem('customerData', JSON.stringify(updatedCustomerData));
  
    // Update the state with the new customer and the existing data
    setCustomerData([...customerData, newCustomer]);




    dispatch(addCustomer(newCustomer));


    // setNewCustomerData(newCustomer);





    console.log(`new user===>` ,newCustomer);


    



    // Reset the input fields
    setName('');
    setEmail('');
    setImage(null);


    // Close the dialog
    setOpen(false);

  }

  function showItemsData() {
    const localCustomerData = JSON.parse(localStorage.getItem('customerData')) || [];
    
    console.log(`localStorage data===>` , localCustomerData);
    return localCustomerData;
  }
  

// useEffect(() => {
//   showItemsData()
// }, []);
 


  return (
<>


     <div style={{paddingTop:'2rem',paddingBottom:'2rem', marginLeft:'10rem' , }}>
      <button startIcon={<AddCircleOutlineIcon/>} onClick={handleClickOpen} variant="contained" color="success" >+ Add Customer</button>
      </div>
    <div className='customerListParents'>

      <table>
        <thead>
          <tr className='table_row'>
            <th colSpan="5" align="left"></th>
            <th startIcon={<VerticalAlignCenterIcon/>} colSpan="5" align="left">Customer ID</th>
            <th startIcon={<VerticalAlignCenterIcon/>}  colSpan="5" align="left">Customer Name</th>
            <th colSpan="5" align="left">Customer Email</th>
            <th colSpan="3" align="left"></th>
          </tr>
        </thead>
        <tbody>
          {customerData?.map((customer) => (
            <tr key={customer.id}>
              <td colSpan="5" align="left">{<img src={customer.avatar} alt="Customer Img" />}</td>
              <td colSpan="5" align="left">{customer.id}</td>
              <td colSpan="5" align="left">{customer.first_name} {customer.last_name} </td>
              <td colSpan="5" align="left">{customer.email}</td>
              <td> <button id='edit'>Edit</button> </td>
              <td> <button id='delete' onClick={()=>handleDeleteCustomer(customer.id)}>Delete</button> </td>
            </tr>
          ))
          }
          {newCustomerData && (
            <tr key={newCustomerData.id}>
            <td  colspan="5" align="left">
           {newCustomerData.image && (
           <img src={URL.createObjectURL(newCustomerData.image)} alt="Customer Image" width="128" height="128" />
      )}
    </td>              <td colSpan="5" align="left">{newCustomerData.id}</td>
              <td colSpan="5" align="left">{newCustomerData.name}</td>
              <td colSpan="5" align="left">{newCustomerData.email}</td>
              <td> <button id='edit'>Edit</button> </td>
              <td> <button id='delete' onClick={handleDeleteNewCustomer}>Delete</button> </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{backgroundColor:'#4CAE89',color:'white'}}>Add Customer</DialogTitle>
        <DialogContent>
         <TextField
  autoFocus
  margin="dense"
  id="name"
  label="Name"
  type="text"
  fullWidth
  variant="standard"
  value={name} // Bind to the 'name' state variable
  onChange={(e) => setName(e.target.value)}
/>
        </DialogContent>
        <DialogContent>
         <TextField
  autoFocus
  margin="dense"
  id="email"
  label="Email Address"
  type="email"
  fullWidth
  variant="standard"
  value={email} // Bind to the 'email' state variable
  onChange={(e) => setEmail(e.target.value)}
/>
        </DialogContent>
        <DialogContent>
        <Button variant="text" component="label">
    Upload File
    <input
      type="file"
      hidden
      onChange={(e) => {
        // Get the selected file from the input field
        const file = e.target.files[0];
        setImage(file);
      }}
    />
  </Button>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button color='success' fullWidth onClick={handleAddCustomer} >ADD CUSTOMER</Button>
        </DialogActions>
      </Dialog>
    
    
      </>

  );
};

export default CustomerList;

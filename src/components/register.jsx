import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import AppRoutes from '../Routes'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password, Setpassword] = useState('');
  const [confirmPassword, SetconfrimPassword] = useState('');



  const navigate = useNavigate();

  const handleError = (err)=>{

    toast.error(err, {
      position: "bottom-left",
    })
  }


  const handleSuccess = (msg)=>{

    toast.success("Account has been successfully created", {
      position: toast.POSITION.TOP_CENTER
  })

  console.log(`handle succesful` ,msg)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password === confirmPassword) {
      console.log('Form submitted with username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
  
      try {
        const response = await axios.post(
          'http://localhost:5000/api/register',{ username, email, password },
          { withCredentials: true }

        );
  
        console.log('This is axios data ==> ',response.data);

        const {data} = response;

        var {success , message} = data;
        if(success){

          handleSuccess(message);
          
          setTimeout(() => {

            navigate('/login')
            
          }, 1000);

          setUsername('');
          setEmail('');
          Setpassword('');
          SetconfrimPassword('');
          
        }else {
          handleError(message)

}


          console.log(`success msg-->` ,handleSuccess)

  
  
       
      } catch (err) {
        console.log(err);
        // alert('An error occurred while creating your account.');
        handleError(message)

      }
    } 
  };
  




  return (
    <div>
       <div style={{marginLeft:'10rem'}} className='login_page'>
       <h1 style={{textAlign:'center'}} >Register Now</h1>  


       

          <div  className='login_card'>
        <ToastContainer />


            <form style={{display:'flex' , flexDirection:'column' , gap:'10px'}} onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Name" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <TextField id="outlined-basic" type='email' label="Email" variant="outlined"value={email} onChange={(e)=>setEmail(e.target.value)} />
          <TextField id="outlined-basic" type='password' label="Password" variant="outlined" value={password} onChange={(e)=>Setpassword(e.target.value)} />
          <TextField id="outlined-basic" type='password' label="Confirm Password" variant="outlined" value={confirmPassword} onChange={(e)=>SetconfrimPassword(e.target.value)} />
            <Button style={{margin:'0px 4rem'}} variant="contained" type='submit'>Sign Up</Button>
            </form>


          </div>
        </div>



    </div>
  )
}

export default Register
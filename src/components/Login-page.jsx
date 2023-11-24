import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {

  
  const [email,setEmail] = useState('');
  const [password, Setpassword] = useState('');

  const navigate = useNavigate();

  
  const handleError = (err)=>{

    toast.error(err, {
      position: "bottom-left",
    })
  }



  const handleSuccess = (msg)=>{

    toast.success("Login successfully", {
      position: toast.POSITION.TOP_CENTER
  })

  console.log(`handle succesful` ,msg)
  }



  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const result = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('login api===>', JSON.stringify(result));

      const token = result.data.token;
      console.log(`token===>`,token)

    localStorage.setItem('token', token)      

  
      const { success, message } = result.data; // Assuming the response data is structured this way
  
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        handleError(message);
        console.log('eerr==>', handleError);
      }
    } catch (err) {
      alert(err.message + ' Record Doesnt Found!');
    }
  };
  
  return (
    
    <div>


       <div style={{marginLeft:'10rem'}} className='login_page'>
       <h1 style={{textAlign:'center'}}>Login Now</h1>  




          <form onSubmit={handleLogin}>


          <div  className='login_card'>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>Setpassword(e.target.value)} />
            <Button variant="contained" type='submit'>Login</Button>


          </div>
          <ToastContainer />

          </form>

        </div>



    </div>
  )
}

export default Login
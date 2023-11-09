import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import AppRoutes from '../Routes'
import { useNavigate } from "react-router-dom";



const Register = () => {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password, Setpassword] = useState('');
  const [confirmPassword, SetconfrimPassword] = useState('');



  const navigate = useNavigate();

  
  const handleSubmit = (e)=>{

    e.preventDefault();


    if(password === confirmPassword){
      console.log('Form submitted with username:', username);
      console.log('Email:', email);
      console.log('Password:', password);



      axios.post('http://localhost:5000/api/register', {username,email,password})
      .then(result=>console.log(`this is axios data==>`, result))
      .catch(err=> console.log(err));

      alert("Your account has successfully created !")
      navigate("/login");





      


      setUsername('')
      setEmail('')
      Setpassword('')
      SetconfrimPassword('')
      
    }else{


      alert("Password doesnt match confirm password!")

    }




  }


  return (
    <div>
       <div style={{marginLeft:'10rem'}} className='login_page'>
       <h1 style={{textAlign:'center'}} >Register Now</h1>  

          <div  className='login_card'>

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
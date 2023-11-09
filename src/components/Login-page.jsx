import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";




const Login = () => {
  
  const [email,setEmail] = useState('');
  const [password, Setpassword] = useState('');

  const navigate = useNavigate();


  const handleLogin = (e)=>{

    e.preventDefault()

    axios.post('http://localhost:5000/api/login' , {email,password})
    .then(result =>{
      console.log(result)
          if(result.data === "Success"){

            navigate('/')
      
      
          }else{
            alert(result.data)
          }
    })
    .catch(err=> alert(err +'Record Doesnt Found!'))




  }
  return (
    <div>
       <div style={{marginLeft:'10rem'}} className='login_page'>
       <h1 style={{textAlign:'center'}} >Login Now</h1>  


          <form onSubmit={handleLogin}>


          <div  className='login_card'>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>Setpassword(e.target.value)} />
            <Button variant="contained" type='submit'>Login</Button>

          </div>
          </form>

        </div>



    </div>
  )
}

export default Login
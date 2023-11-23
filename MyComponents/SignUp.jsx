import {React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const[name, setName] = useState()
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()
  const Navigate = useNavigate()

  const handleSubmit = (e)=> {
    e.preventDefault();
    
    axios.post('http://localhost:3000/register',{name, email, password})
    .then(result=> {console.log(result)
      if (result.status === 200){
        alert('registration successful');
        Navigate('/create')
      }
      else{
        alert('registration failed');
      }
    })
    .catch(err=> console.log(err))
   
    
  }
    
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 '> 
    <div className='p-3 rounded w-50 vh-50 bg-secondar border border-dark '>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="email"><strong>Name</strong></label>
          <input type='text' placeholder='Enter Name' autoComplete='off' name='name' className='form-control rounded-0' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor="email"><strong>Email</strong></label>
          <input type='email' placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor="email"><strong>Password</strong></label>
          <input type='password' placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-0'onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
        </form>
        <p>Already have an account</p>
        <NavLink to="/LogIn" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</NavLink>
     
     </div>
    </div>
  )
}

export default SignUp
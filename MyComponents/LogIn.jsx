import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
const[email, setEmail] = useState()
const[password, setPassword] = useState()
const navigate = useNavigate()


  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post('http://localhost:3000/login',{ email, password})
    .then(result=> {console.log(result)
      if (result.data == 'Success'){
        navigate('/create')
      }
      else{
        alert('check details once');
      }
    })
    .catch(err=> console.log(err))
    }
    return (
    <div className='d-flex justify-content-center align-items-center vh-100 '> 
    <div className='p-3 rounded w-50 vh-30 bg-secondar border border-dark '>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor="email"><strong>Email</strong></label>
          <input type='email' placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor="email"><strong>Password</strong></label>
          <input type='password' placeholder='Enter Password' autoComplete='off' name='password' className='form-control rounded-0'onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
        </form>
        <p>Want to have an account</p>
        <NavLink to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</NavLink>
        </div>
    </div> 
  )
}
export default LogIn
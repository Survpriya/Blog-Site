import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = () => {

return (
    <header>
    <NavLink to='/' className= 'Logo'>My Blog</NavLink>
    <nav>
    
      <NavLink to='/create' className= 'NavLink'>Create new Post </NavLink>
      <NavLink to='/login' className= 'NavLink'>Log In </NavLink>
      <NavLink to='/Register' className= 'NavLink'>Register</NavLink>
      
    </nav>
  </header>
  )
}
export default Header
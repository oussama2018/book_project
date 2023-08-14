import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';

const Navbar = () => {
const dispatch=useDispatch()
  return (
    <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/Loginadmin">LoginAdmin</Link>
        <Link to="/Admin">Admin</Link>
        <button onClick={()=>dispatch(logout())}>logout</button>
    </div>
  )
}

export default Navbar
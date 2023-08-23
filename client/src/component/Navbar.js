import React from 'react'

import { Link } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
  const dispatch =useDispatch()
  const {isAuth}=useSelector(state=>state.user)
  return (
    <div>
    <ul style={{backgroundColor:'white'}}>
    {(isAuth)? <div><Link to="/listbooks"> List of Books </Link>
    <Link to="/Userprofile"> Profile </Link>
    <button onClick={()=>dispatch(logout())}>logout</button></div>:<div>  <Link to="/Register"> Register </Link>
    <Link to="/Login"> Login </Link>
    </div>}
  
  

</ul>
   
    </div>
  )
}

export default Navbar
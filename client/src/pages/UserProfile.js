import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
    const dispatch=useDispatch()
    const {userdata,isAuth,isLoading}=useSelector(state=>state.user)
   
  return (
    <div>
        <h1>dqdsdsq</h1>
          {userdata &&
      <div>
        <h1>{userdata.name}</h1>
        <h1>{userdata.age}</h1>
        <h1>{userdata.email}</h1>
       
    </div>
}
</div> 
  )}


export default UserProfile
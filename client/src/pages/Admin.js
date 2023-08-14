import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBook, logout } from '../redux/slices/adminSlice';

const Admin = () => {
  const dispatch=useDispatch()
  const {userdata,isAuth,isLoading}=useSelector(state=>state.admin)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!isAuth){
      navigate("/LoginAdmin")
    }
  },[isAuth])
/*   useEffect(()=>{
    dispatch(getBook())
  }) */
  return (
    <div>Admin
         <button onClick={()=>dispatch(logout())}>logout</button>
    </div>
  )
}

export default Admin
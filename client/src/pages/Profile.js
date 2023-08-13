import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const {userdata,isAuth,isLoading}=useSelector(state=>state.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
  },[isAuth])
  return (
    <div>
      {userdata &&
      <div>
        <h1>{userdata.name}</h1>
        <h1>{userdata.age}</h1>
        <h1>{userdata.email}</h1>
      </div>
      }
    </div>
  )
}

export default Profile
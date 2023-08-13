import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { signin } from '../redux/slices/adminSlice';
import { useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {isAuth}=useSelector(state=>state.user)
    useEffect(()=>{
      if(isAuth){
        navigate("/admin")
      }
    },[isAuth])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data)
      dispatch(signin(data))
   
      };
      console.log(errors)
    return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
        
        <input type="email" placeholder="email" {...register("email", {required: true, maxLength: 80})} />
        <input type="password" placeholder="password" {...register("password", {required: true, maxLength: 80})} />
  
        <input type="submit" />
      </form>
      </div>
    )
  }
export default LoginAdmin
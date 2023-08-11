import React from 'react'
import { useForm } from 'react-hook-form'
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
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

export default Login
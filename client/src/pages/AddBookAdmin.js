import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/adminSlice';

const AddBookAdmin = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch((addBook(data)))
        console.log(data)};
    console.log(errors);
  return (
    <div>AddBookAdmin
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="bookname" {...register("bookname", {required: true})} />
      <input type="text" placeholder="description" {...register("description", {required: true})} />
      <input type="text" placeholder="author" {...register("author", {required: true})} />
      <input type="text" placeholder="image" {...register("image", {required: true})} />
      <input type="number" placeholder="price" {...register("price", {required: true})} />

      <input type="submit" />
    </form>
    </div>
  )
}

export default AddBookAdmin
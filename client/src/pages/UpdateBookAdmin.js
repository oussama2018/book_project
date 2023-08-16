import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateBook } from '../redux/slices/adminSlice';
const UpdateBookAdmin = () => {
    const dispatch = useDispatch();
  const location = useLocation();
  const { book } = location.state;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = React.useState(true);

  // Pre-fill the form fields with the book data
  React.useEffect(() => {
    if (book) {
      setValue("bookname", book.bookname);
      setValue("description", book.description);
      setValue("author", book.author);
      setValue("image", book.image);
      setValue("price", book.price);
      setLoading(false); // Set loading to false once values are set
    }
  }, [book, setValue]);

  const onSubmit = data => {
    // Send the updated book data to your backend API or Redux store
    dispatch(updateBook({ bookId: book.id, data }));
        console.log("Updated book data:", data);
    // Handle the update process here
  };

  console.log("Form errors:", errors);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="bookname" {...register("bookname", { required: true })} />
        <input type="text" placeholder="description" {...register("description", { required: true })} />
        <input type="text" placeholder="author" {...register("author", { required: true })} />
        <input type="text" placeholder="image" {...register("image", { required: true })} />
        <input type="number" placeholder="price" {...register("price", { required: true })} />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateBookAdmin;

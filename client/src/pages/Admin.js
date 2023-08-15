import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBook, logout, getAllBooks,deleteBook } from '../redux/slices/adminSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const { admindata, isAuth, isLoading} = useSelector(state => state.admin); // Check this line
  const posts = useSelector((state) => state.admin.posts);
  console.log(posts)
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/LoginAdmin');
    } else {
      dispatch(getAllBooks());
      console.log(getAllBooks); // Now you are logging the destructured 'posts' array
    }
  }, [isAuth]);

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };
  return (
    <div>
      <h1>Welcome, Admin!</h1>
      
      
      <h1>{posts.msg}</h1>
      <ul>
        {posts.books && posts.books.map((post, index) => (
          <li >
            <h2>{`Post ${index + 1}`}</h2>
            <p><strong>Book Name:</strong> {post.bookname}</p>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Creation Date:</strong> {post.createAt}</p>
            <button onClick={() => handleDelete(post._id)}>Delete</button> {/* Delete button */}
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Admin;

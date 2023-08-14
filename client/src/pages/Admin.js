import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBook, logout, getAllBooks } from '../redux/slices/adminSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const { admindata, isAuth, isLoading,posts } = useSelector(state => state.admin); // Check this line

  
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/LoginAdmin');
    } else {
      dispatch(getAllBooks());
      console.log(posts); // Now you are logging the destructured 'posts' array
    }
  }, [isAuth]);

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      
      <button onClick={() => dispatch(logout())}>Logout</button>
      
      {posts && posts.map(el => (
        <div> 
          <h1>{el.bookname}</h1>
        </div>
      ))}
    </div>
  );
};

export default Admin;

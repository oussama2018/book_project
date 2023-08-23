import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBook, logout, getAllBooks, deleteBook } from '../redux/slices/adminSlice';
import '../styles/Card.css';

const Admin = () => {
  
  const dispatch = useDispatch();
  const { admindata, isAuth, isLoading } = useSelector(state => state.admin);
  const posts = useSelector((state) => state.admin.posts);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/LoginAdmin');
    } else {
      dispatch(getAllBooks());
    }
  }, [isAuth]);

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  const handleUpdate = (bookId) => {
    const selectedBook = posts.books.find(book => book._id === bookId);
    navigate('/UpdateBook', { state: { book: selectedBook } });
  };

  return (
    <div>
      <h1>Welcome, Admin!</h1>
      
      <div className="card-container">
        {posts && posts.map((post, index) => (
          <div className="card" key={post._id}>
            {post.image && <img src={post.image} alt={post.bookname} />}
            <p><strong>Book Name:</strong> {post.bookname}</p>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Creation Date:</strong> {post.createAt}</p>
            <button onClick={() => handleDelete(post._id)}>Delete</button> 
            <button onClick={() => handleUpdate(post._id)}>Update</button>
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Admin;


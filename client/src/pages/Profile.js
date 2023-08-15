import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/slices/userSlice';

const Profile = () => {
  const dispatch=useDispatch()
  const {userdata,isAuth,isLoading}=useSelector(state=>state.user)
  const posts = useSelector((state) => state.admin.posts);
  console.log(posts)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!isAuth){
      navigate("/login")
    }
    else {
      dispatch(getAllBooks());
      console.log(getAllBooks); // Now you are logging the destructured 'posts' array
    }
  },[isAuth])
  return (
    <div>
      {userdata &&
      <div>
        <h1>{userdata.name}</h1>
        <h1>{userdata.age}</h1>
        <h1>{userdata.email}</h1>
        <h1>{posts.msg}</h1>
      <ul>
        {posts.books && posts.books.map((post, index) => (
          <li >
            <h2>{`Post ${index + 1}`}</h2>
            <p><strong>Book Name:</strong> {post.bookname}</p>
            <p><strong>Description:</strong> {post.description}</p>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Creation Date:</strong> {post.createAt}</p>
          </li>
        ))}
      </ul>
      </div>
      
      }
       <button onClick={()=>dispatch(logout())}>logout</button>
    </div>
  )
}

export default Profile
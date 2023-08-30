import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllUsers, deleteUser } from '../redux/slices/adminSlice';
import '../styles/Card.css';

const ListUsers = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.admin);

  const users = useSelector((state) => state.admin.users);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/LoginAdmin');
    } else {
      dispatch(getAllUsers());
    }
  }, [isAuth, dispatch, navigate]);

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div className="user-list-container" style={{ color: 'white' }}>
      <h2>User List:</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th> {/* Add a column for the delete button */}
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;

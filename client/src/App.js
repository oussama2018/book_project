import './App.css';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './component/Navbar';
import LoginAdmin from './pages/LoginAdmin';
import Admin from './pages/Admin';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/LoginAdmin" element={<LoginAdmin />} /> 
        <Route path="/Admin" element={<Admin />} /> 

      </Routes>
    </div>
  );
}

export default App;

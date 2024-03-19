import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Login.png'; // Import the logo image

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = () => {
    // Here, you can perform authentication logic
    // For simplicity, let's assume login is successful if username and password are both "admin" or "user"
    if ((username === 'admin' && password === 'admin') || (username === 'user' && password === 'user')) {
      onLogin(username); // Notify parent component about successful login
      if (username === 'admin') {
        navigate('/Home'); // Navigate to the home page for admin
      } else {
        navigate('/BookPage'); // Navigate to the BookPage for user
      }
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', backgroundColor: '#fff' }}> {/* Inline styling for border, rounded corners, shadow effect, and background color */}
            <img src={logo} alt="Logo" className="card-img-top" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} /> {/* Larger logo size */}
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

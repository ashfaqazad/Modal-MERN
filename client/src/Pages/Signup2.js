import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // console.log({ username, email, mobileNumber, password });
    Axios.post('http://localhost:5000/auth/signup', {
        username,
        email,
        password
    }).then(response => {
    console.log(response.data);  // Log the response to inspect the data

        if(response.data.status){
          navigate('/login')
        }
      
        // console.log(response)
    }).catch(err => {
        console.log(err)
    })
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '50%' }}>
        <h1 className="mb-4">Sign up form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label fw-bold">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Enter here username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter here Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter here Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Sign up</button>
          <p>Have an account? <Link to='/login'>Login</Link> </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

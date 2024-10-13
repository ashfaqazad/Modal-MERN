import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JavaScript for Bootstrap components
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    Axios.post('http://localhost:5000/auth/signup', {
      username,
      email,
      password,
    })
      .then((response) => {
        console.log(response.data); // Log the response to inspect the data

        if (response.data.status) {
          navigate('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Bootstrap Modal handle
  useEffect(() => {
    const modalElement = document.getElementById('signupModal');
    const modal = new window.bootstrap.Modal(modalElement);

    const button = document.getElementById('modalButton');
    button.addEventListener('click', () => {
      modal.show(); // Showing the modal
    });
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {/* Button to open modal */}
      <button id="modalButton" type="button" className="btn btn-primary">
        Open Signup Modal
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signupModalLabel">
                Sign Up Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label fw-bold">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="Enter here username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter here Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter here Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
                <p>
                  Have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

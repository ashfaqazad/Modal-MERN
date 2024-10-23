import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const [showModal, setShowModal] = useState(false);  // For modal visibility
    const [modalMessage, setModalMessage] = useState(''); // For modal content

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = loginData; 

        axios.post('http://localhost:5000/auth/login', {email, password})
        .then(response => {
            console.log(response.data);
            if (response.data.token) {
                // Store the token in localStorage
                localStorage.setItem('authToken', response.data.token); // Use 'authToken' as the key for clarity
                navigate('/'); // Navigate to home on successful login
            }
        })
        .catch(error => {
            console.log(error);
            // Trigger modal on error
            setModalMessage('Login failed. Please check your credentials.');
            setShowModal(true);  // Show modal on error
        });
    };

    return (
        <div className='container bg-white shadow w-50 mt-5 pb-3'>
            <h1 className='mb-5'>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        name="email"
                        placeholder="name@example.com"
                        value={loginData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        name="password"
                        placeholder="password"
                        value={loginData.password}
                        onChange={handleChange}
                    />
                </div>

                <button className='btn btn-primary mb-3' type='submit'>Submit</button>
                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            </form>

            {/* Bootstrap Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Login Status</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>{modalMessage}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;

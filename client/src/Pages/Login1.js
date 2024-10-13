import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Corrected case
        setLoginData({
            email: '',
            password: '',
        })
        console.log("Form Submitted", loginData);
        navigate('/')

    };

    return (
        <>
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
                    <p>Don't have an account? <Link to='/signup'>Sign Up</Link> </p>

                </form>
            </div>
        </>
    );
};

export default Login;

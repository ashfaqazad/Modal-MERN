import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setFormData({
            username: '',
            email: '',
            password: '',
        });
        console.log("Form Submitted", formData);
    };

    return (
        <>
            {/* Added 'pb-5' for bottom padding */}
            <div className='container bg-white shadow w-50 mt-5 pb-3'>
                <h1 className='mb-5'>Signup Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="usernameInput" className="form-label">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="usernameInput"
                            name="username"
                            placeholder="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
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
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button className='btn btn-primary mb-3' type='submit'>Submit</button>

                    {/* No need to add anything here for spacing */}
                    <p>Have an account? <Link to='/login'>Login</Link></p>
                </form>
            </div>
        </>
    );
};

export default Signup;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
//         setFormData({
//             username: '',
//             email: '',
//             password: '',
//         });
//         console.log("Form Submitted", formData);
//     };

//     return (
//         <>
//             {/* Added 'pb-5' for bottom padding */}
//             <div className='container bg-white shadow w-50 mt-5 pb-3'>
//                 <h1 className='mb-5'>Signup Form</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="usernameInput" className="form-label">User Name</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             id="usernameInput"
//                             name="username"
//                             placeholder="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="emailInput" className="form-label">Email address</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             id="emailInput"
//                             name="email"
//                             placeholder="name@example.com"
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="passwordInput" className="form-label">Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             id="passwordInput"
//                             name="password"
//                             placeholder="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <button className='btn btn-primary mb-3' type='submit'>Submit</button>

//                     {/* No need to add anything here for spacing */}
//                     <p>Have an account? <Link to='/login'>Login</Link></p>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default Signup;

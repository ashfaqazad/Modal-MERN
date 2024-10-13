import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Correct usage of useNavigate

  // const handleLogout = () => {
  //   axios.get('http://localhost:5000/auth/logout')
  //     .then(response => {
  //       if (response.data.status) {
  //         navigate('/login'); // Correct way to navigate after logout
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };



//   const handleLogout = () => {
//     axios.post('http://localhost:5000/auth/logout')  // Change to POST
//       .then(response => {
//         if (response.data.status) {
//           navigate('/login'); // Navigate after successful logout
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
// };



const handleLogout = () => {
  axios.get('http://localhost:5000/auth/logout', { withCredentials: true })  // Ensure credentials are sent
    .then(response => {
      if (response.data.status) {
        console.log(response.data.msg);
        localStorage.removeItem('authToken'); // Remove token from local storage

        navigate('/login');  // Redirect to login page after logout
      }
    })
    .catch(error => {
      console.error('Error during logout:', error);
    });
};


  return (
    <>
      <h1 className='text-white mt-5'>Dash Board</h1>
      <button className='btn btn-primary' onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default Home;

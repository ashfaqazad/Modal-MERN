import React from 'react';
import { useNavigate } from 'react-router-dom';

const ClickButton = () => {
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleClick = () => {
        // Perform any action here if needed
        navigate('/'); // Navigate to '/login'
    }

    return (
        <>
            <button className='btn btn-primary' onClick={handleClick}>Click Me</button>
        </>
    )
}

export default ClickButton;

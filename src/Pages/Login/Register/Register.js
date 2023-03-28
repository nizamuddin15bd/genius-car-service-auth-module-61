import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const handleNavigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-container'>
            <h2 className='register-title'>Please Register Now</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" id="" />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register Now" />
            </form>
            <p>New to Genius Car? <Link to={'/login'} className='text-danger' onClick={handleNavigateLogin}> Please Register Now</Link></p>
        </div>
    );
};

export default Register;
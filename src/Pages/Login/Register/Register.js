import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    // const emailRef = useRef('')
    // const passwordRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleNavigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.email.value;
        const email = event.target.email.value;
        createUserWithEmailAndPassword(email, password)
        console.log(email, password)
    }
    return (
        <div className='register-container'>
            <h2 className='register-title'>Please Register Now</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register Now" />
            </form>
            <p>New to Genius Car? <Link to={'/login'} className='text-danger' onClick={handleNavigateLogin}> Please Register Now</Link></p>
        </div>
    );
};

export default Register;
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    // const emailRef = useRef('')
    // const passwordRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const handleNavigateLogin = () => {
        navigate('/login');
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user)
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const password = event.target.email.value;
        const email = event.target.email.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('profile update');
        navigate('/home')
        // console.log(email, password)
    }
    return (
        <div className='register-container'>
            <h2 className='register-title'>Please Register Now</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="text" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'px -2 text-info' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius car Terms and Conditions</label>
                <input
                    disabled={!agree}
                    type="submit" value="Register Now" />
            </form>
            <p>New to Genius Car? <Link to={'/login'} className='text-danger' onClick={handleNavigateLogin}> Please Register Now</Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
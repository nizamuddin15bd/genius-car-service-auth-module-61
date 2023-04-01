import React from 'react';
import google from '../../../images/sociallogin/google.png';
import facebook from '../../../images/sociallogin/facebook.png';
import github from '../../../images/sociallogin/github.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {

        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='ml-2'>Google SignUp</span>
            </button>
            <button className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={facebook} alt="" />
                <span className='ml-2'>facebook SignUP</span>
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={github} alt="" />
                <span className='ml-2'>github SignUp</span>
            </button>
        </div>
    );
};

export default SocialLogin;
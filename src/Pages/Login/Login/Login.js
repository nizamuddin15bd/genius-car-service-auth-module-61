import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {
    const emailRef = useRef('');
    const passWordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(
        auth
    );
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passWordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const rsetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('set email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-primary text-center mt-5'>Please Login Now</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb
                -3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passWordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius Car? <Link to={'/register'} className='text-danger' onClick={navigateRegister}> Please Register Now</Link></p>
            <p>Forget password <button className='btn btn-link text-danger' onClick={rsetPassword}> Forget Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;
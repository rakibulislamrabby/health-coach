import { Button } from 'bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import LoginGoogle from './LoginGoogle/LoginGoogle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef("");
    const passRef = useRef("");
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    // SignIn Logic
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Reset password hooks
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    // show error
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
        // if (error) {
        //     toast("please give correct information")
        // }
        if (!user) {
            toast("please give correct information")
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }

    // else {
    //     toast("Please correct informetion")
    // }
    const navigateRegister = event => {
        navigate("/register")
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast("please enter your email")
        }
    }

    return (
        <div>
            <h2 className='text-center mt-3 text-success'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <p>New to Health-Coach? <Link to="/register" className='text-danger text-decoration-none' >Please Register</Link></p>
                <p>Forgate PassWord? <button className='btn btn-link text-success text-decoration-none' onClick={resetPassword}>Reset Password</button></p>

                {/* <p>Forgate PassWord? <button className='btn btn-link text-primary text-decoration-none'>Reset Password</button></p> */}

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <button className=' btn btn-success w-50 d-block mx-auto rounded-pill' variant="success" type="submit">
                    Login
                </button>
                <LoginGoogle></LoginGoogle>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Login;
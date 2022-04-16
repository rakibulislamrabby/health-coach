import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = () => {

    }
    return (
        <div>
            <h2 className='text-center mt-3 text-info'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                {/* {errorElement} */}
                <p>New to Genius car? <Link to="/register" className='text-danger text-decoration-none' >Please Register</Link></p>

                <p>Forgate PassWord? <button className='btn btn-link text-primary text-decoration-none'>Reset Password</button></p>

                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <button className=' btn btn-info w-50 d-block mx-auto rounded-pill' variant="info" type="submit">
                    Login
                </button>
                {/* <SocialLogin></SocialLogin> */}
                {/* <ToastContainer /> */}
            </Form>
        </div>
    );
};

export default Login;
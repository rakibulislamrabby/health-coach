import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import LoginGoogle from '../Login/LoginGoogle/LoginGoogle';

const Register = () => {
    const [permit, setPermit] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigateLogin = () => {
        navigate("/login")
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate("/home")
    }
    return (
        <div>
            <h2 className='text-center mt-3 text-success'>Register in Health-Coach</h2>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='text' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setPermit(!permit)} type="checkbox" name="terms" id="terms" />

                {/* terms condition color change step-1 */}
                {/* <label className={agree ? "text-primary ps-2" : "text-danger ps-1"} htmlFor='terms'>Accept Terms and Condition</label> */}

                {/* step-2 */}
                <label className={`ps-2 ${permit ? "text-success" : "text-danger"}`} htmlFor='terms'>Accept Terms and Condition</label>

                <p className='mt-2'>Already have Account? <Link to="/login" className='text-success text-decoration-none ' >Please Login</Link></p>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button disabled={!permit} className='w-50 d-block mx-auto rounded-pill bg-success' variant="success" type="submit">
                    Register
                </Button>
                <LoginGoogle></LoginGoogle>

            </Form>

        </div>
    );
};

export default Register;
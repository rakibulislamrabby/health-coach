import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from "../../../images/icon/google.png"
import Loading from '../../Loading/Loading';

const LoginGoogle = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate("/home");
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-success w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-success w-50'></div>
            </div>
            {/* {errorElement} */}

            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-success rounded-pill w-50 d-block mx-auto'>
                    <img className='me-4 sm-ms-3' style={{ width: "30px" }} src={google} alt="" />
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default LoginGoogle;
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import swal from 'sweetalert';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                if (user.emailVerified){
                    form.reset();
                    navigate("/");
                    setError("")
                    swal("Congratulations", "You are pemitted to access our private routes", "success");
                }else{
                    swal("Sorry", "Your email is not verified. Please verify it.", "warning");
                    return;
                }
                
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return (
        <div className='w-75 mx-auto bg-light p-5 border'>
            <Form onSubmit={handleSubmit}>
                <h3 className='text-center'>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <div>
                    <small>{error}</small>
                </div>
                <div className='text-center'>
                    <Button variant="primary" className='py-2 px-5' type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Login;
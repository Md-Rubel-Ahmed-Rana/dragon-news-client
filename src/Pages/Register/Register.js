import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import swal from 'sweetalert';


const Register = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const { createUser, profileUpdate, verifyEmailAddress } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        console.log(photourl);
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();

            profileUpdate(name, photourl)
            .then(() => alert("Profile updated"))
            .catch((error) => console.log(error))

            verifyEmailAddress()
            .then(() => {})
            .catch(() => {});

            navigate("/login");
            swal("Good job!", "Pleaes check your email and verify", "success");
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='w-75 mx-auto bg-light p-5 border'>
            <Form onSubmit={handleSubmit}>
                <h3 className='text-center'>Register</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photourl" placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                        <input onClick={() => setIsDisabled(!isDisabled)} type="checkbox" name='' />
                        <small className='ms-1'>By clicking you are agree to our terms and conditions.</small>
                </Form.Group>

                <div className='text-center'>
                    <Button disabled={isDisabled} variant="primary" className='py-2 px-5' type="submit">
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;
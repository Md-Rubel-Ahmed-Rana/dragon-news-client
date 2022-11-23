import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='w-75 mx-auto bg-light p-5 border'>
            <Form>
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
                    <input  type="checkbox" name='' />
                    <small className='ms-1'>By clicking you are agree to our terms and conditions.</small>
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" className='py-2 px-5' type="submit">
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Profile;
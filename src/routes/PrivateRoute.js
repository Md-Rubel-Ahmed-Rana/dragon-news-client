import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className='text-center'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;
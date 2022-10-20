import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch} from "react-icons/fa"
import { AuthContext } from '../../contexts/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSide = () => {
    
    const { providerLogin, setUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h3>Find us</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaWhatsapp /> WhatsApp </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaTwitch /> Twitch </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSide;
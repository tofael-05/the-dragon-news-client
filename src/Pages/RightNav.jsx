import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import  qZone1 from '../assets/qZone1.png';
import  qZone2 from '../assets/qZone2.png';
import  qZone3 from '../assets/qZone3.png';


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className="mb-2 " variant="outline-primary"><AiOutlineGoogle />  Login with Google</Button>
            <Button variant="outline-secondary"><AiFillGithub />  Login with Github</Button>
            <div>
                <h4 className='my-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <h4 className='text-center mt-4'>QZone</h4>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;
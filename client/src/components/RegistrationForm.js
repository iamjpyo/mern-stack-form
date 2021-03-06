import React, { useState} from 'react';
import axios from "axios";
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./RegistrationForm.css";
import { StarRating } from './StarRating';
import "./StarRating.css";


export const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        message: '',
        rating: ''
    });
    const { name, email, telephone, message, rating } = formData;

    const [starRating, setStarRating] = useState(0);
    const [hover, setHover] = useState(0);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        const newRegistration ={
            name,
            email,
            telephone,
            message,
            rating
        };

        try {
            const config = {
                headers:{
                    'Content-Type': 'application/json'
                }
            };

            const body = JSON.stringify(newRegistration);

            const res = axios.post('http://localhost:5001/api/registration', body, config);
            console.log(res.data);

        } catch (err) {
            console.error(err.response.data);
        }

         fieldClearance();
    }

    async function fieldClearance (){
        await handleShow();
        await setFormData({ name: "", email: "", telephone:"", message: "", rating: 0 });
    };
    
    return (
        <div className="Form">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Successful Post!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Good Job! Your vote and comment successfully posted!</Modal.Body>
                <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="dark" onClick={event =>  window.location.href='/display'}>
                    Go To Submissions!
                </Button>
                </Modal.Footer>
            </Modal>

            <Form className="mainForm" onSubmit={onSubmit}>
            <h1>Send a message!</h1>
            <Form.Floating className="mb-3">
                <Form.Control
                id="Name"
                type="text"
                placeholder="Name"
                name='name' 
                value={name} 
                onChange={onChange} 
                required
                />
                <label htmlFor="floatingInputCustom">Name</label>
            </Form.Floating>
            
            <Form.Floating className="mb-3">
                <Form.Control
                id="email"
                type="email"
                placeholder="Email"
                name='email' 
                value={email} 
                onChange={onChange} 
                required
                />
                <label htmlFor="floatingPasswordCustom">Email</label>
            </Form.Floating>  

            <Form.Floating className="mb-3">
                <Form.Control
                id="phone"
                type="phone"
                placeholder="Phone #"
                name='telephone' 
                value={telephone} 
                onChange={onChange}
                />
                <label htmlFor="floatingPasswordCustom">Phone</label>
            </Form.Floating>    

            <Form.Floating className="mb-3">
                <Form.Control
                rows={4}
                id="Message"
                type="text"
                placeholder="Message"
                name='message' 
                value={message} 
                onChange={onChange} 
                required
                style={{ height: '100px' }}
                />
                <label htmlFor="floatingPasswordCustom">Comment</label>
            </Form.Floating>

            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                    type="button"
                    name='rating'
                    key={index}
                    className={index <= (hover || starRating) ? "on" : "off"}
                    onClick={() => setStarRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(starRating)}
                    value={index}
                    onChange={onChange}  
                    >
                    <span className="star">&#9733;</span>
                    </button>
                );
                })}
            </div>
            
            <Button variant="dark" type="submit" value="Register"> Submit your message</Button>
        </Form>

        </div>
    )
}
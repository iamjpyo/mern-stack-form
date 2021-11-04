import React, {Fragment, useState} from 'react';
import axios from "axios";
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import "./RegistrationForm.css";


export const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        message: ''
    });

    const { name, email, telephone, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        const newRegistration ={
            name,
            email,
            telephone,
            message
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

         fieldClearance()
    }
    const fieldClearance = e => setFormData({ name: "", email: "", telephone:"", message: "" });
    
    return (
        <div className="Form">
            <Form className="mainForm" onSubmit={onSubmit}>
            <h1>Send a message to your future self!</h1>
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
                <label htmlFor="floatingPasswordCustom">Message To Future Self</label>
            </Form.Floating>

            <Button variant="outline-success" type="submit" value="Register"> Submit your message</Button>
        </Form>
        </div>
    )
}
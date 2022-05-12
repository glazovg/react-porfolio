import React, { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";

function ContactMe() {
    const [show, setShow] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const isNilOrEmpty = (value) => {
        return value === null || value === undefined || value?.length === 0;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (error){
                setShow(true);
                return
            }

            if (!formState.name || !formState.email || !formState.message) {
                setError('Name, Email and Message fields cannot be empty, please fill them out.');
                setShow(true);
                return
            }
            alert('Message has been submitted!');
        } catch (e) {
            console.error(e);
            setError(e);
        }

        setFormState({
            name: '',
            email: '',
            message: '',
        });
    };

    const closeAlert = async () => {
        setError('');
        setShow(false);
    }

    return (
        <Container className="p-5 mb-4 rounded-3 d-flex row"
            id="contact-me">
            <Container className="section-header p-4">
                <h2 className="fw-bold">Contact Me</h2>
            </Container>
            <Form
                id="contact-form"
                onSubmit={handleFormSubmit}
                method="POST">
                <Form.Group>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                        size='lg'
                        type="name"
                        placeholder="Name"
                        name='name'
                        value={formState.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                    <Form.Control
                        size='lg'
                        type="email"
                        placeholder="Email"
                        name='email'
                        value={formState.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={4}
                        type="message"
                        placeholder="Message"
                        name='message'
                        value={formState.message}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button type="submit" variant="secondary">Submit</Button>
            </Form>
            {error && (
                <Alert show={show} variant="info" onClose={closeAlert} dismissible>
                    <p>{error}</p>
                </Alert>
            )}
        </Container>
    );
};

export default ContactMe;
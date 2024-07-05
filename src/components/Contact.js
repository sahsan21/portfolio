import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/contact/', formData)
            .then(response => {
                if (response.data.status === 'success') {
                    alert('Message sent successfully!');
                } else {
                    alert('Failed to send message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <section id="contact" className="section-contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={handleChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required onChange={handleChange}></textarea>

                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;

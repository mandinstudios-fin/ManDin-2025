import React, { useState, useEffect } from 'react';
import cimage from '../assets/CImage.svg'

const Contact = ({ isVisible, onClose }) => {
    const [isMounted, setIsMounted] = useState(false);
    const [showVisibleClass, setShowVisibleClass] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form (optional)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        });
    };


    useEffect(() => {
        if (isVisible) {
            setIsMounted(true);
            // Allow the DOM to mount first, then trigger the class in the next tick
            requestAnimationFrame(() => {
                setShowVisibleClass(true);
            });
        } else if (!isVisible && !isClosing) {
            setIsMounted(false);
            setShowVisibleClass(false);
        }
    }, [isVisible]);

    const handleClose = () => {
        setIsClosing(true);
        setShowVisibleClass(false); // Start closing animation (remove visible class)
        setTimeout(() => {
            setIsClosing(false);
            setIsMounted(false);
            onClose();
        }, 2000);
    };

    return (
        <div className={`contact-container 
        ${showVisibleClass && !isClosing ? 'visible' : ''} 
        ${isClosing ? 'closing' : ''}`}>
            <div className="contact-inner">
                <button className="close-button" onClick={handleClose}>
                    <span className="close-icon"></span>
                </button>

                <section className="content-section">
                    <div className="content-wrapper">
                        <h1 className="title">Let's Create Something Amazing</h1>
                        <div className="contact-content">
                            <div className="contact-info">
                                <img src={cimage} className='cimage' />
                                {/* <h2>Get in Touch</h2>
                <p>Ready to transform your vision into reality? We're here to help bring your ideas to life.</p>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <p>hello@mandinstudios.com</p>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Phone</span>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Location</span>
                    <p>New York City, NY</p>
                  </div>
                </div> */}
                            </div>
                            {/* <div className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Name" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" className="form-input" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" className="form-input form-textarea"></textarea>
                </div>
                <button className="submit-button">Send Message</button>
              </div> */}
                            <div className="form-container2">
                                <h1 className="title-normal">Let's build something</h1>
                                <h2 className="title-bold">great together!</h2>
                                <p className="subtitle">Give us a nudge with the basics, and we'll make magic happen!</p>

                                <form className="form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="firstName">
                                            First Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName">
                                            Last Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            Phone Number <span className="required">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="submit-wrapper">
                                        <button type="submit" className="submit-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact; 
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
                        <h1 className="mt-[2rem] text-white text-center text-[2rem] lg:text-[3.5rem] font-['Denton-Bold']">Let's Create<br className='block md:hidden' /> Something Amazing!</h1>
                        <div className="contact-content mt-[1rem] lg:gap-[4rem] gap-0">
                            <div className="contact-info">
                                <img src={cimage} className='cimage' />
                            </div>

                            <div className="form-container2">
                                <h1 className="title-normal font-['Denton-Bold']">Have a project in mind?</h1>
                                <h2 className="title-normal font-[Denton-Bold]">We’d love to hear from you.</h2>
                                <p className="subtitle font-['Gilroy-Regular'] opacity-60">Give us a nudge with the basics, and we'll make magic happen!</p>

                                <form className="form font-['Gilroy-Regular']" onSubmit={handleSubmit}>
                                    <div className="form-group font-['Gilroy-Regular']">
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
                                            className='text-white bg-transparent border-none outline-none bg-opacity-40'
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="lastName font-['Gilroy-Regular']">
                                            Last Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className='text-white bg-transparent border-none outline-none bg-opacity-40'
                                        />
                                    </div>

                                    <div className="form-group font-['Gilroy-Regular']">
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
                                            className='text-white bg-transparent border-none outline-none bg-opacity-40'
                                        />
                                    </div>

                                    <div className="form-group font-['Gilroy-Regular']">
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
                                            className='text-white bg-transparent border-none outline-none bg-opacity-40'
                                        />
                                    </div>

                                    <div className="submit-wrapper font-['Gilroy-Bold']">
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
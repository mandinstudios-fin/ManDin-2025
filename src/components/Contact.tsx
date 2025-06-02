import React, { useState, useEffect } from 'react';
import cimage from '../assets/CImage.svg'

interface ContactProps {
    isVisible: boolean;
    onClose: () => void;
}

const Contact = ({ isVisible, onClose }: ContactProps) => {
    const [showVisibleClass, setShowVisibleClass] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('https://formspree.io/f/xwpvwdyb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    message: `New contact form submission from ${formData.firstName} ${formData.lastName}`,
                }),
            });

            if (response.ok) {
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                });
                // Show success popup
                setShowSuccessPopup(true);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSubmitError('Failed to send message. Please try again.');
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSuccessPopupClose = () => {
        setShowSuccessPopup(false);
        // Close the main contact modal after success
        setTimeout(() => {
            handleClose();
        }, 300);
    };


    useEffect(() => {
        if (isVisible) {
            // Allow the DOM to mount first, then trigger the class in the next tick
            requestAnimationFrame(() => {
                setShowVisibleClass(true);
            });
        } else if (!isVisible && !isClosing) {
            setShowVisibleClass(false);
        }
    }, [isVisible, isClosing]);

    const handleClose = () => {
        setIsClosing(true);
        setShowVisibleClass(false); // Start closing animation (remove visible class)
        setTimeout(() => {
            setIsClosing(false);
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
                        <h1 className="mt-[2rem] lg:-mt-[3rem] text-white text-center text-[2rem] lg:text-[3.5rem] font-['Denton-Bold']">Let's Create<br className='block md:hidden' /> Something Amazing!</h1>
                        <div className="contact-content mt-[1rem] lg:mt-[3rem] lg:gap-[4rem] gap-0">
                            <div className="contact-info">
                                <img src={cimage} className='cimage' />
                            </div>

                            <div className="form-container2">
                                <h1 className="title-normal font-['Denton-Bold']">Have a project in mind?</h1>
                                <h2 className="title-normal font-[Denton-Bold]">We'd love to hear from you.</h2>
                                <p className="subtitle font-['Gilroy-Regular'] opacity-60">Give us a nudge with the basics, and we'll make magic happen!</p>

                                {submitError && (
                                    <div className="error-message" style={{
                                        color: '#ff6b6b',
                                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                                        border: '1px solid rgba(255, 107, 107, 0.3)',
                                        padding: '0.75rem',
                                        borderRadius: '4px',
                                        marginBottom: '1rem',
                                        fontSize: '0.9rem',
                                        fontFamily: 'Gilroy-Regular'
                                    }}>
                                        {submitError}
                                    </div>
                                )}

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
                                        <button 
                                            type="submit" 
                                            className="submit-btn" 
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Success Popup */}
            {showSuccessPopup && (
                <div className="success-popup-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10000,
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    <div className="success-popup" style={{
                        backgroundColor: '#000000',
                        border: '2px solid #ffffff',
                        borderRadius: '0',
                        padding: '2.5rem',
                        maxWidth: '420px',
                        width: '90%',
                        textAlign: 'center',
                        position: 'relative',
                        animation: 'slideUp 0.3s ease-out'
                    }}>
                        {/* Success Icon */}
                        <div style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: '#ffffff',
                            borderRadius: '0',
                            border: '2px solid #ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            animation: 'bounceIn 0.6s ease-out'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20,6 9,17 4,12"></polyline>
                            </svg>
                        </div>

                        <h3 style={{
                            fontFamily: 'Denton-Bold',
                            fontSize: '1.5rem',
                            color: '#ffffff',
                            marginBottom: '1rem',
                            lineHeight: '1.2'
                        }}>
                            Message Sent Successfully!
                        </h3>

                        <p style={{
                            fontFamily: 'Gilroy-Regular',
                            fontSize: '1rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            marginBottom: '1.5rem',
                            lineHeight: '1.5'
                        }}>
                            Thank you for reaching out! We'll get back to you within 24 hours.
                        </p>

                        <button
                            onClick={handleSuccessPopupClose}
                            style={{
                                backgroundColor: '#ffffff',
                                color: '#000000',
                                border: '2px solid #ffffff',
                                padding: '0.875rem 2.5rem',
                                borderRadius: '0',
                                fontSize: '1rem',
                                fontFamily: 'Gilroy-Bold',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                outline: 'none',
                                letterSpacing: '0.5px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#000000';
                                e.currentTarget.style.color = '#ffffff';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                                e.currentTarget.style.color = '#000000';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            Thank You!
                        </button>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes bounceIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.3);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    70% {
                        transform: scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                `
            }} />
        </div>
    );
};

export default Contact; 
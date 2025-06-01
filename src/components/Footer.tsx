import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink, Code, Smartphone, Globe, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import './FooterMobile.css'

const Footer = () => {
    return (
        <footer className="footer-new">
            {/* Watermark Background */}
            <div className="footer-watermark">
                <div className="watermark-text">ManDin</div>
                <div className="watermark-outline">ManDin</div>
            </div>
            
            <div className="footer-container">
                {/* Desktop Layout - 4 columns */}
                <div className="footer-content-new hidden lg:grid">
                    {/* Company Section */}
                    <div className="footer-section-new company-section">
                        <div className="company-logo">
                            <h2 className="company-name">ManDin Studios</h2>
                            <div className="company-tagline">Transforming Digital Dreams</div>
                        </div>
                        <p className="company-description">
                            Crafting exceptional digital experiences with cutting-edge technology and innovative solutions. We transform ideas into reality.
                        </p>
                        <div className="company-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Success</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-section-new">
                        <h3 className="footer-title">
                            <Code className="title-icon" />
                            Our Services
                        </h3>
                        <div className="footer-links">
                            <a href="#what-we-do" className="footer-link">
                                <Globe className="link-icon" />
                                Web Development
                            </a>
                            <a href="#what-we-do" className="footer-link">
                                <Smartphone className="link-icon" />
                                Mobile Apps
                            </a>
                            <a href="#what-we-do" className="footer-link">
                                <Shield className="link-icon" />
                                Digital Security
                            </a>
                            <a href="#what-we-do" className="footer-link">
                                <Zap className="link-icon" />
                                Performance
                            </a>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="footer-section-new">
                        <h3 className="footer-title">
                            <ExternalLink className="title-icon" />
                            Quick Links
                        </h3>
                        <div className="footer-links">
                            <a href="#what-we-do" className="footer-link">What We Do</a>
                            <a href="#who-we-serve" className="footer-link">Who We Serve</a>
                            <a href="#our-niche" className="footer-link">Our Niche</a>
                            <a href="#blogs" className="footer-link">Blog & Insights</a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-section-new contact-section">
                        <h3 className="footer-title">
                            <Mail className="title-icon" />
                            Get In Touch
                        </h3>
                        <div className="contact-info-new">
                            <a href="mailto:info@mandinstudios.com" className="contact-item-new">
                                <Mail className="contact-icon" />
                                <span>info@mandinstudios.com</span>
                            </a>
                            <a href="tel:+919115962222" className="contact-item-new">
                                <Phone className="contact-icon" />
                                <span>+91-9115962222</span>
                            </a>
                            <div className="contact-item-new">
                                <MapPin className="contact-icon" />
                                <span>Hyderabad, India</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="social-section">
                            <h4 className="social-title">Follow Us</h4>
                            <div className="social-links-new">
                                <a href="https://www.instagram.com/mandin_studios/" target="_blank" rel="noopener noreferrer" className="social-link-new instagram">
                                    <Instagram className="social-icon" />
                                    <span>Instagram</span>
                                </a>
                                <a href="https://www.linkedin.com/in/mdstudios/" target="_blank" rel="noopener noreferrer" className="social-link-new linkedin">
                                    <Linkedin className="social-icon" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Concise and Professional */}
                <div className="footer-mobile lg:hidden">
                    {/* Company Section */}
                    <div className="footer-mobile-company">
                        <h2 className="mobile-company-name">ManDin Studios</h2>
                        <p className="mobile-company-tagline">Transforming Digital Dreams</p>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-mobile-contact">
                        <div className="mobile-contact-grid">
                            <a href="mailto:info@mandinstudios.com" className="mobile-contact-item">
                                <Mail size={18} />
                                <span>Email</span>
                            </a>
                            <a href="tel:+919115962222" className="mobile-contact-item">
                                <Phone size={18} />
                                <span>Call</span>
                            </a>
                        </div>
                        <div className="mobile-location">
                            <MapPin size={16} />
                            <span>Hyderabad, India</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="footer-mobile-social">
                        <span className="mobile-follow-text">Follow Us</span>
                        <div className="mobile-social-links">
                            <a href="https://www.instagram.com/mandin_studios/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/mdstudios/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom-new">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            <p>&copy; 2025 ManDin Studios. All rights reserved.</p>
                        </div>
                        <div className="footer-bottom-links">
                            <Link to="/privacy-policy" className="bottom-link">Privacy Policy</Link> <span style={{marginRight: '20px' , color: 'gray',marginLeft: '10px'}}>|</span>
                            <Link to="/refund-policy" className="bottom-link">Refund Policy</Link>
                        </div>
                        <div className="made-with-love">
                            <span>Andhra Dreams ❤️ Hyderabad Hands</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
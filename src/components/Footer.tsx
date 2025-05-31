import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink, Code, Smartphone, Globe, Shield, Zap } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="footer-new">
            {/* Watermark Background */}
            <div className="footer-watermark">
                <div className="watermark-text">ManDin</div>
                <div className="watermark-outline">ManDin</div>
            </div>
            
            <div className="footer-container">
                <div className="footer-content-new">
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
                            <a href="mailto:contact@mandinstudios.com" className="contact-item-new">
                                <Mail className="contact-icon" />
                                <span>contact@mandinstudios.com</span>
                            </a>
                            <a href="tel:+1234567890" className="contact-item-new">
                                <Phone className="contact-icon" />
                                <span>+1 (234) 567-890</span>
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

                {/* Footer Bottom */}
                {/* <div className="footer-bottom-new">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            <p>&copy; 2024 ManDin Studios. All rights reserved.</p>
                        </div>
                        <div className="footer-bottom-links">
                            <a href="#privacy" className="bottom-link">Privacy Policy</a>
                            <a href="#terms" className="bottom-link">Terms of Service</a>
                            <a href="#cookies" className="bottom-link">Cookies</a>
                        </div>
                        <div className="made-with-love">
                            <span>Made with ❤️ in India</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer

// Minimalism in easy words is simplicity. Avoiding every unneccessary detail to keep it simple is what it means ultimately.
// In tech universe, minimalism refers to a design or a development that can be simple, efficient yet clear. From code and user interfaces to the overall workflow, it should all be clutterfree and easy to understand. This is to clear unnecessary clutter and provide cleaner and user-friendly outcome to the user.
// Key Principles to minimalism are : simplicity, efficiency and clarity.
// Simplicity: Focusing on essential elements and eliminating  unnecessary clutter.
// Efficiency: Keeping the concept cut to cut, to avoid non needed details.
// Clarity: Ensuring easy understanding and easy navigation to the users.
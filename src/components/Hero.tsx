import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import bg2 from '../assets/final 2 (1).jpg'
import { ArrowRight, Menu, X } from 'lucide-react';
import Contact from './Contact';

const navItems = [
    { id: 1, title: 'What We Do', path: 'what-we-do' },
    { id: 2, title: 'Why Us', path: 'who-we-serve' },
    { id: 3, title: 'Our Work', path: 'our-work' },
    { id: 4, title: 'Team', path: 'team' },
    { id: 5, title: 'Contact', path: 'contact' }
];

const Hero = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
    };

    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='w-full ' style={{ height: `${height}px` }}>
            {/* <video
                className="z-[-1] absolute top-0 left-0 object-cover lg:object-[center_-150px] w-full h-full"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <img
                className="z-[-2] absolute top-0 left-0 object-cover w-full h-full  lg:object-[center_-142px]"
                src={bg2}
            />

            <div className="z-[10] fixed top-10 px-[4rem]  w-full">
                <div className='flex items-center justify-between'>
                    <div>
                        <img src={logo} className='w-[19rem] drop-shadow' />
                    </div>
                    <div className="nav-controls " onClick={toggleMenu}>
                        <button className="svalbard-button">
                            <span className="button-text font-['Gilroy-Regular'] text-[1.4rem]">Explore</span>
                            <span className="button-icon"></span>
                        </button>
                        <div className="menu-container">
                            <Menu className='text-white' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='z-2 max-w-[1280px] mx-auto p-[2rem] h-full '>
                <div>
                    <h2 className='text-[4rem] leading-[1.1] font-["Denton-Bold"] font-extrabold text-center mt-[13rem]'>Where Expertise Meets Artistry</h2>
                    <h2 className='text-[4rem] leading-[1.1] font-["Denton-Bold"] font-extrabold text-center'>You're Witnessing Brillliance Unfold.</h2>
                    <p className='text-[2.5rem] mt-[0.5rem] text-center font-["Gilroy-Regular"]'>You are witnessing a Master at Work</p>
                    <div className='flex justify-center mt-[2.3rem] font-["Gilroy-Regular"]'><button onClick={toggleContact} className='cursor-pointer px-[3rem] py-[0.7rem] border border-black text-[1.2rem] flex items-center gap-[0.5rem] bg-black text-white hover:bg-transparent hover:text-black transition-all duration-300 ease-in-out'>Meet Us <span><ArrowRight /></span></button></div>
                </div>
            </div>

            <div className={`full-page-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="menu-close-button" onClick={toggleMenu}>
                    <X className='text-white size-7' />
                </button>
                <div className="menu-content">
                    <div className="menu-items">
                        {navItems.map((item, index) => (
                            <div key={item.id} className="menu-item-wrapper" style={{ transitionDelay: `${index * 0.1}s` }}>
                                <a href={`#${item.path}`} className="menu-item" onClick={() => setIsMenuOpen(false)}>
                                    <span className="menu-item-number">{String(item.id).padStart(2, '0')}</span>
                                    <span className="menu-item-title">{item.title}</span>
                                    <span className="menu-item-arrow">→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="menu-footer">
                        <div className="social-links">
                            <a href="#" className="social-link">Instagram</a>
                            <a href="#" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">Twitter</a>
                        </div>
                    </div>
                </div>

                {/* <img src={bgImg} className='full-page-menu-bg-img' /> */}
            </div>

            <Contact isVisible={isContactOpen} onClose={toggleContact} />
        </header>
    )
}

export default Hero
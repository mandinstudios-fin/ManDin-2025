import { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import bg2 from '../assets/2288.mp4'
import { ArrowRight, Menu, X } from 'lucide-react';
import Contact from './Contact';
import { useContact } from '../hooks/contactHook';

const navItems = [
    { id: 1, title: 'What We Do', path: 'what-we-do' },
    { id: 2, title: 'Who We Serve', path: 'who-we-serve' },
    { id: 3, title: 'Our Niche', path: 'our-niche' },
    { id: 4, title: 'Blog', path: 'blogs' },
    { id: 5, title: 'Contact', path: 'contact' }
];

const Hero = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const { isContactOpen, toggleContact } = useContact();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = (id: string) => {
        if (id === 'contact') {
            toggleContact();
            setIsMenuOpen(false);

            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const yOffset = -60;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    // Preload video for faster loading
    useEffect(() => {
        const video = document.createElement('video');
        video.onloadeddata = () => setVideoLoaded(true);
        video.src = bg2;
        video.load();
    }, []);

    useEffect(() => {
        const updateHeight = () => {
            setHeight(window.innerHeight);
        };
        
        updateHeight(); // Set initial height
        window.addEventListener('resize', updateHeight);
        window.addEventListener('orientationchange', updateHeight);
        document.addEventListener('fullscreenchange', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('orientationchange', updateHeight);
            document.addEventListener('fullscreenchange', updateHeight);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <style>
                {`
                    .hero-bg-video {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center center;
                        filter: brightness(0.85);
                        z-index: -2;
                        transition: opacity 0.3s ease-in-out;
                    }
                    
                    /* Desktop: Keep current behavior */
                    @media (min-width: 1024px) {
                        .hero-bg-video {
                            object-fit: cover;
                            object-position: center center;
                        }
                    }
                    
                    /* Tablet: Adjust positioning */
                    @media (max-width: 1023px) and (min-width: 768px) {
                        .hero-bg-video {
                            object-fit: cover;
                            object-position: center top;
                        }
                    }
                    
                    /* Mobile: Optimize for mobile screens */
                    @media (max-width: 767px) {
                        .hero-bg-video {
                            object-fit: cover;
                            object-position: center center;
                            height: 100vh;
                            min-height: 100vh;
                            width: 100vw;
                            left: 0;
                            top: 0;
                        }
                    }
                    
                    /* Very small mobile devices */
                    @media (max-width: 480px) {
                        .hero-bg-video {
                            object-fit: cover;
                            object-position: center 30%;
                        }
                    }
                    
                    /* Landscape mobile */
                    @media (max-width: 767px) and (orientation: landscape) {
                        .hero-bg-video {
                            object-fit: cover;
                            object-position: center center;
                            width: 100vw;
                            height: 100vh;
                        }
                    }
                `}
            </style>
            <header className='relative w-full h-screen overflow-visible'>
                {/* Loading placeholder */}
                {!videoLoaded && (
                    <div 
                        className="absolute inset-0 w-full h-full bg-black"
                        style={{ zIndex: -3 }}
                    />
                )}
                
                {/* Background Video - Extended downward */}
                <video
                    src={bg2}
                    className="hero-bg-video"
                    style={{
                        opacity: videoLoaded ? 1 : 0,
                        height: 'calc(100vh + 300px)', // Extend 300px below
                        minHeight: 'calc(100vh + 300px)',
                        zIndex: -2
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                />
                
                {/* Gradient overlay - extends down as well */}
                <div 
                    className="absolute inset-0 w-full"
                    style={{
                        height: 'calc(100vh + 300px)',
                        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.8) 90%, rgba(0, 0, 0, 1) 100%)',
                        zIndex: -1
                    }}
                />
                
                {/* Navigation */}
                <div className="z-[100] fixed top-10 lg:px-[4rem] px-[1rem] w-full mix-blend-difference lg:mix-blend-normal">
                    <div className='flex items-center justify-between'>
                        <div>
                            <img 
                                src={logo} 
                                className='hidden lg:block w-[10rem] lg:w-[15rem] drop-shadow-2xl cursor-pointer mix-blend-difference lg:mix-blend-normal' 
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    })
                                }}
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                alt="ManDin Studios Logo"
                            />
                        </div>
                        <div className="flex items-center bg-white/10 px-[1rem] lg:px-[2rem] py-[0.5rem] lg:py-[0.7rem] gap-[0.5rem] backdrop-blur-[8px] cursor-pointer" onClick={toggleMenu}>
                            <p className="hidden lg:block button-text font-['Gilroy-Regular'] text-white text-[1.4rem]">Explore</p>
                            <Menu className='text-white' />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className='relative z-10 w-full mx-auto px-[0.5rem] sm:px-[1rem] md:px-[2rem] lg:px-[3rem] h-full flex flex-col justify-center'>
                    <div className='text-center'>
                        <h1 className='text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.7rem] leading-[1.1] font-["Denton-Bold"] font-extrabold text-white mb-[0.5rem] lg:mb-[1rem]'>Where Expertise Meets Artistry</h1>
                        <h2 className='text-[1.4rem] sm:text-[1.7rem] md:text-[2.1rem] lg:text-[2.5rem] xl:text-[2.8rem] leading-[1.2] font-["Denton-Bold"] font-extrabold text-white mb-[1rem] lg:mb-[1.5rem]'>You're Witnessing Brilliance Unfold.</h2>
                        <p className='text-[0.85rem] sm:text-[0.95rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] leading-[1.4] font-["Gilroy-Regular"] text-white opacity-90'>You're watching Master at Work</p>
                        <div className='flex justify-center mt-[2.3rem] font-["Gilroy-Regular"]'>
                            <button 
                                onClick={toggleContact} 
                                className='relative cursor-pointer px-[2rem] py-[0.5rem] lg:px-[3rem] lg:py-[0.7rem] border border-[#FFFFFFF] lg:text-[1.2rem] flex items-center gap-[0.5rem] bg-transparent text-white overflow-hidden shadow-[0_10px_25px_rgba(17,27,33,0.9),0_4px_6px_rgba(17,27,33,0.1)] group hover:border-white transform-none'
                            >
                                <span className='absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 z-0'></span>
                                <span className='relative z-10 transition-colors duration-300 group-hover:text-[#000000]'>Meet Us</span>
                                <span className='relative z-10 transition-colors duration-300 group-hover:text-[#000000]'>
                                    <ArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Full Page Menu */}
                <div className={`full-page-menu ${isMenuOpen ? 'open' : ''}`}>
                    <button className="menu-close-button top-[0.5rem] lg:top-[3rem] right-[1rem] lg:right-[20rem]" onClick={toggleMenu}>
                        <X className='text-white size-7' />
                    </button>
                    <div className="menu-content lg:p-[5rem_2rem_2rem_2rem] p-[2rem_2rem_2rem_2rem]">
                        <div className="menu-items">
                            {navItems.map((item, index) => (
                                <div key={item.id} className="menu-item-wrapper" style={{ transitionDelay: `${index * 0.1}s` }}>
                                    <p className="menu-item p-[0rem] lg:p-[1rem] cursor-pointer" onClick={() => handleScroll(item.path)}>
                                        <span className="menu-item-number text-[1.3rem] lg:text-[3rem] font-['Gilroy-Regular']">{String(item.id).padStart(2, '0')}</span>
                                        <span className="menu-item-title text-[1.3rem] lg:text-[3rem] font-['Gilroy-Regular']">{item.title}</span>
                                        <span className="menu-item-arrow">→</span>
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="menu-footer mb-[5.5rem] lg:mb-[0.5rem]">
                            <div className="card pt-[2rem]">
                                <a className="socialContainer containerOne" href="https://www.instagram.com/mandin_studios/" target='_blank'>
                                    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                                </a>

                                <a className="socialContainer containerThree" href="https://www.linkedin.com/in/mdstudios/" target='_blank'>
                                    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                </a>

                                <a className="socialContainer containerFour" href="https://wa.me/12345678900" target='_blank'>
                                    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Contact isVisible={isContactOpen} onClose={toggleContact} />
            </header>
        </>
    )
}

export default Hero
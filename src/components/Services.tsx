import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useContact } from '../hooks/contactHook';
import nicheImg from '../assets/nieche.jpg'

const FEATURES = [
    {
        title: 'Fintech Innovation',
        content: 'We build next-generation financial platforms with seamless payment processing, digital wallets, and real-time transaction systems. Our solutions integrate advanced security protocols and regulatory compliance to transform how businesses handle financial operations.',
    },
    {
        title: 'AI-Driven Automation',
        content: 'Transform your business processes with intelligent automation powered by machine learning and natural language processing. We develop custom AI solutions that reduce operational costs, enhance decision-making, and scale your business operations efficiently.',
    },
    {
        title: 'Web & Mobile Applications',
        content: 'Create powerful, scalable applications that deliver exceptional user experiences across all platforms. From progressive web apps to native mobile solutions, we build responsive, fast, and intuitive applications that drive user engagement and business growth.',
    },
    {
        title: 'Information Security',
        content: 'Zero Trust is our strategy. We implement comprehensive cybersecurity frameworks that protect your digital assets with multi-layered defense systems, continuous monitoring, and advanced threat detection to ensure your business stays secure in an evolving threat landscape.',
    },
    {
        title: 'Web3 & Blockchain',
        content: 'Enter the decentralized future with our blockchain development expertise. We create smart contracts, DeFi protocols, NFT platforms, and decentralized applications that leverage the power of distributed ledger technology for transparent and secure digital transactions.',
    },
];

const CARDS = [
    {
        title: "Radio Maria",
        description: "Digital transformation for religious broadcasting with modern streaming solutions and community engagement platforms.",
        // metrics: "Global Reach community",
        metrics: "50,000+ active listeners",
        website: "https://radiomaria.org",
        appStore: "https://apps.apple.com/app/radio-maria",
        playStore: "https://play.google.com/store/apps/details?id=com.radiomaria"
    },
    {
        title: "Culinary Artist",
        description: "Revolutionary food delivery platform connecting local chefs with food enthusiasts through AI-powered matching.",
        metrics: "Hyderabad's first nutrition centric platform",
        impact: "80% faster delivery times",
        website: "https://culinaryartist.com",
        appStore: "https://apps.apple.com/app/culinary-artist",
        playStore: "https://play.google.com/store/apps/details?id=com.culinaryartist"
    },
    {
        title: "Neon Pay",
        description: "Next-generation fintech solution providing seamless payment processing and digital wallet services.",
        metrics: "$10M+ transactions processed",
        impact: "99.9% uptime achieved",
        website: "https://neonpay.com",
        appStore: "coming-soon",
        playStore: "coming-soon"
    },
    {
        title: "OliviaFinance",
        description: "Innovative crypto gifting service enabling secure digital asset transfers with personalized experiences.",
        metrics: "$5M+ crypto gifts sent",
        impact: "95% user satisfaction rate",
        website: "https://oliviafinance.com",
        appStore: null,
        playStore: null
    },
]

// Enhanced Divider for Our Niche section
const EnhancedDivider = () => (
    <div className="w-full max-w-[1600px] mx-auto px-[2rem] py-[rem] lg:py-[6rem]">
        <div className="w-full max-w-[1200px] mx-auto h-[2px] bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
    </div>
)

const Services = () => {
    return (
        <section className='relative min-h-screen' style={{backgroundColor: '#111b21'}}>
            <div className='p-[2rem]'>
                <div>
                    <WhatWeDo />
                    <WhoWeServe />
                    <EnhancedDivider />
                    <OurNiche />
                </div>
            </div>
        </section>
    )
}

const WhatWeDo = () => {
    const [selectedFeature, setSelectedFeature] = useState<{title: string, content: string} | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const introRef = useRef<HTMLDivElement>(null);

    const { toggleContact } = useContact();

    const openModal = (feature: {title: string, content: string}) => {
        setSelectedFeature(feature);
        setIsModalOpen(true);
        setTimeout(() => setIsAnimating(true), 10);
    };

    const closeModal = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsModalOpen(false);
            setSelectedFeature(null);
        }, 300); // match your animation duration
    };

    useEffect(() => {
        const body = document.body;

        if (isModalOpen) {
            body.style.overflow = 'hidden';
            body.style.touchAction = 'none';
        } else {
            body.style.overflow = '';
            body.style.touchAction = '';
        }

        return () => {
            body.style.overflow = '';
            body.style.touchAction = '';
        };
    }, [isModalOpen]);

    return (
        <div ref={introRef} id='what-we-do' className='max-w-[1300px] mx-auto relative'>
            {/* Classic Clean Background Elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {/* Simple horizontal lines */}
                <div className='absolute top-[25%] left-[10%] right-[10%] h-[1px] bg-orange/8'></div>
                <div className='absolute bottom-[25%] left-[15%] right-[15%] h-[1px] bg-orange/6'></div>
                
                {/* Minimal corner accents */}
                <div className='absolute top-[15%] right-[12%] w-[30px] h-[1px] bg-orange/10'></div>
                <div className='absolute top-[15%] right-[12%] w-[1px] h-[30px] bg-orange/10'></div>
            </div>

            <h2 className='text-center text-white text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[1] font-semibold mt-[4rem] lg:mt-[6rem] font-["Denton-Bold"] relative z-10'>What We Do</h2>
            <div className='mt-[4rem] relative z-10'>
                <h2 className={`font-["Denton-Bold"] text-[2.5rem] md:text-[3.2rem] text-center lg:text-left lg:text-[5rem] leading-[1.1] text-orange font-bold`}>We don't just</h2>
                <h2 className={`font-["Denton-Bold"] text-[2.5rem] md:text-[3.2rem] text-center lg:text-left lg:text-[5rem] leading-[1.1] text-white font-bold`}>Build Products</h2>
                <p className={`font-["Gilroy-Regular"] text-center lg:text-left max-w-2xl text-white lg:text-[1.3rem] leading-[1.3] mt-[1rem]`}>We create transformative digital solutions. from fintech
                    innovations to AI -driven automation, our solutions are
                    engineered for performance, scalability, and real-world impact.</p>
                <div className={`mt-[3.7rem] lg:mt-[3rem] flex gap-[1rem] lg:justify-start justify-center group `}>
                    <div className='flex items-center gap-[1rem] cursor-pointer' onClick={() => toggleContact()}>
                        <p className='text-orange text-[1.3rem] font-["Denton-Bold"] ml-[1.75rem] lg:ml-0'>Make the Switch</p>
                        <ArrowRight className='text-white size-7 animate-arrow-move' />
                    </div>
                </div>
            </div>
            <div className='mt-[4rem] lg:mt-[6rem] relative z-10'>
                {/* Grid layout with 2x2 mobile style */}
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] md:gap-[2rem] lg:gap-[4rem]'>
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className={`group cursor-pointer transition-all duration-300 relative overflow-hidden ${
                                index === 4 ? 'col-span-2 md:col-span-1' : ''
                            }`}
                            onClick={() => openModal(feature)}
                        >
                            {/* Icon */}
                            <div className='mb-[1rem] md:mb-[1.5rem] lg:mb-[2rem] relative z-10'>
                                <div className='w-[2rem] h-[2rem] md:w-[2.5rem] md:h-[2.5rem] lg:w-[3rem] lg:h-[3rem] flex items-center justify-center'>
                                    {index === 0 && (
                                        <svg className='w-full h-full text-orange group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4' />
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg className='w-full h-full text-orange group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg className='w-full h-full text-orange group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z' />
                                        </svg>
                                    )}
                                    {index === 3 && (
                                        <svg className='w-full h-full text-orange group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' />
                                        </svg>
                                    )}
                                    {index === 4 && (
                                        <svg className='w-full h-full text-orange group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3' />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className='text-white font-["Denton-Bold"] text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] mb-[0.8rem] md:mb-[1rem] lg:mb-[1.2rem] leading-tight group-hover:text-orange transition-colors duration-300 relative z-10'>
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className='text-gray-400 font-["Gilroy-Regular"] text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] leading-relaxed group-hover:text-gray-300 transition-colors duration-300 relative z-10'>
                                {feature.content}
                            </p>

                            {/* Enhanced bottom border line with gradient */}
                            <div className='relative mt-[1.5rem] md:mt-[2rem] lg:mt-[2.5rem]'>
                                <div className='w-full h-[1px] bg-gray-800 group-hover:bg-orange/30 transition-colors duration-300'></div>
                                <div className='absolute inset-0 w-0 h-[1px] bg-gradient-to-r from-orange to-orange/50 group-hover:w-full transition-all duration-500 ease-out'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && selectedFeature && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-100 backdrop-blur-sm"
                    style={{backgroundColor: 'rgba(17, 27, 33, 0.8)'}}
                    onClick={closeModal}
                >
                    <div
                        className={`relative w-full max-w-lg p-8 text-black rounded-lg transform transition-all duration-300 m-[1rem] ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                        style={{backgroundColor: '#111b21'}}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={closeModal} className="absolute text-4xl text-white top-3 right-3">
                            &times;
                        </button>
                        <h2 className='text-[2rem] font-bold mb-4 font-["Denton-Bold"] text-white'>{selectedFeature.title}</h2>
                        <p className='text-[1rem] font-["Gilroy-Medium"] text-white'>{selectedFeature.content}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

const WhoWeServe = () => {
    return (
        <div id='who-we-serve' className='max-w-[1400px] mx-auto pb-[3rem] md:pb-[5rem] lg:pb-[7rem] px-[1rem] md:px-[2rem]'>
            {/* Left-Right Layout for Desktop */}
            <div className='mt-[4rem] md:mt-[8rem] lg:mt-[16rem] flex flex-col lg:flex-row lg:items-start lg:gap-[3rem]'>
                
                {/* Left Side - Heading with Styling */}
                <div className='lg:w-[32%] mb-[2rem] md:mb-[3rem] lg:mb-0 relative lg:pr-[2rem] text-center lg:text-left'>
                    <h2 className='font-["Denton-Bold"] text-white text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] font-semibold mb-[1rem]'>
                        Who We Serve
                    </h2>

                    {/* Subtitle */}
                    <div className='mt-[1rem] md:mt-[2rem]'>
                        <p className='font-["Gilroy-Regular"] text-gray-300 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-[500px] mx-auto lg:mx-0'>
                            Transforming businesses across industries with innovative digital solutions and cutting-edge technology.
                        </p>
                    </div>
                </div>

                {/* Right Side - Mobile Horizontal Scroll, Desktop Grid */}
                <div className='lg:w-[70%] lg:flex-1'>
                    {/* Mobile Horizontal Scroll */}
                    <div className='block lg:hidden'>
                        <div className='flex gap-[1rem] overflow-x-auto scrollbar-hide pb-[1rem] snap-x snap-mandatory'>
                            {CARDS.map((card, index) => (
                                <div
                                    key={index}
                                    className={`group cursor-pointer transition-all duration-300 ease-in-out relative flex-shrink-0 w-[280px] snap-start ${
                                        index === 2 ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/30' : ''
                                    } border border-white/20 rounded-lg overflow-hidden backdrop-blur-sm`}
                                    style={{
                                        backgroundColor: index === 2 ? '' : 'rgba(17, 27, 33, 0.4)'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (index !== 2) {
                                            e.currentTarget.style.backgroundColor = 'rgba(17, 27, 33, 0.6)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (index !== 2) {
                                            e.currentTarget.style.backgroundColor = 'rgba(17, 27, 33, 0.4)';
                                        }
                                    }}
                                >
                                    <div className="flex flex-col p-[1.5rem] h-[320px]">
                                        {/* Metrics */}
                                        <div className="mb-[1rem]">
                                            <p className="font-['Gilroy-Medium'] text-orange text-[0.8rem] mb-[0.3rem]">{card.metrics}</p>
                                            <p className="font-['Gilroy-Regular'] text-gray-300 text-[0.75rem]">{card.impact}</p>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-['Denton-Bold'] text-[1.3rem] font-semibold text-white mb-[0.8rem] group-hover:text-orange transition-colors duration-300 leading-tight">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-['Gilroy-Regular'] text-gray-300 text-[0.85rem] leading-relaxed flex-grow">
                                            {card.description}
                                        </p>

                                        {/* Links Section */}
                                        <div className="mt-[1rem] space-y-[0.8rem]">
                                            {/* Website Link */}
                                            <div className="flex items-center gap-[0.5rem]">
                                                <ExternalLink size={16} className="text-orange flex-shrink-0" />
                                                <a 
                                                    href={card.website} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="font-['Gilroy-Medium'] text-white hover:text-orange transition-colors duration-300 text-[0.85rem]"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Visit Website
                                                </a>
                                            </div>

                                            {/* App Store Links */}
                                            <div className="flex flex-col gap-[0.6rem]">
                                                {/* App Store */}
                                                {card.appStore && (
                                                    <div className="flex items-center gap-[0.4rem]">
                                                        {card.appStore === "coming-soon" ? (
                                                            <div className="flex items-center gap-[0.4rem] opacity-50">
                                                                <svg className="w-[14px] h-[14px] text-gray-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                                </svg>
                                                                <span className="font-['Gilroy-Regular'] text-gray-500 text-[0.75rem]">Coming Soon</span>
                                                            </div>
                                                        ) : (
                                                            <a 
                                                                href={card.appStore} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-[0.4rem] hover:opacity-80 transition-opacity duration-300"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <svg className="w-[14px] h-[14px] text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                                </svg>
                                                                <span className="font-['Gilroy-Regular'] text-blue-400 text-[0.75rem]">App Store</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Play Store */}
                                                {card.playStore && (
                                                    <div className="flex items-center gap-[0.4rem]">
                                                        {card.playStore === "coming-soon" ? (
                                                            <div className="flex items-center gap-[0.4rem] opacity-50">
                                                                <svg className="w-[14px] h-[14px] text-gray-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                                                </svg>
                                                                <span className="font-['Gilroy-Regular'] text-gray-500 text-[0.75rem]">Coming Soon</span>
                                                            </div>
                                                        ) : (
                                                            <a 
                                                                href={card.playStore} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-[0.4rem] hover:opacity-80 transition-opacity duration-300"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <svg className="w-[14px] h-[14px] text-green-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                                                </svg>
                                                                <span className="font-['Gilroy-Regular'] text-green-400 text-[0.75rem]">Play Store</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Read Story Button (for featured card) */}
                                        {index === 2 && (
                                            <div className="mt-[0.8rem] flex items-center justify-center">
                                                <button className="bg-white/10 hover:bg-white/20 transition-colors duration-300 px-[1rem] py-[0.5rem] flex items-center gap-[0.4rem] text-white font-['Gilroy-Medium'] text-[0.8rem] rounded-md">
                                                    Read story
                                                    <ArrowRight size={12} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Mobile Scroll indicator */}
                        <div className="mt-[1rem] text-center">
                            <p className="text-gray-400 text-[0.8rem] font-['Gilroy-Regular']">← Scroll to see more →</p>
                        </div>
                    </div>

                    {/* Desktop Grid (Original Design) */}
                    <div className='hidden lg:block'>
                        <div className='grid grid-cols-2 max-w-[900px] mx-auto border border-white/20 rounded-lg overflow-hidden backdrop-blur-sm'>
                            {CARDS.map((card, index) => (
                                <div
                                    key={index}
                                    className={`group cursor-pointer transition-all duration-300 ease-in-out relative ${
                                        index === 2 ? 'bg-gradient-to-br from-blue-900/50 to-blue-800/30' : ''
                                    } ${
                                        // Enhanced border system for desktop grid
                                        index === 0 ? 'border-r border-b border-white/20' : 
                                        index === 1 ? 'border-b border-white/20' :
                                        index === 2 ? 'border-r border-white/20' :
                                        ''
                                    }`}
                                    style={{
                                        backgroundColor: index === 2 ? '' : 'rgba(17, 27, 33, 0.4)'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (index !== 2) {
                                            e.currentTarget.style.backgroundColor = 'rgba(17, 27, 33, 0.6)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (index !== 2) {
                                            e.currentTarget.style.backgroundColor = 'rgba(17, 27, 33, 0.4)';
                                        }
                                    }}
                                >
                                    <div className="flex flex-col p-[2.5rem] min-h-[28rem]">
                                        {/* Metrics */}
                                        <div className="mb-[1.5rem]">
                                            <p className="font-['Gilroy-Medium'] text-orange text-[1rem] mb-[0.4rem]">{card.metrics}</p>
                                            <p className="font-['Gilroy-Regular'] text-gray-300 text-[0.9rem]">{card.impact}</p>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-['Denton-Bold'] text-[2rem] font-semibold text-white mb-[1.5rem] group-hover:text-orange transition-colors duration-300 leading-tight">
                                            {card.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-['Gilroy-Regular'] text-gray-300 text-[1rem] leading-relaxed flex-grow">
                                            {card.description}
                                        </p>

                                        {/* Links Section */}
                                        <div className="mt-[1.5rem] space-y-[1rem]">
                                            {/* Website Link */}
                                            <div className="flex items-center gap-[0.7rem]">
                                                <ExternalLink size={18} className="text-orange flex-shrink-0" />
                                                <a 
                                                    href={card.website} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="font-['Gilroy-Medium'] text-white hover:text-orange transition-colors duration-300 text-[1rem]"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    Visit Website
                                                </a>
                                            </div>

                                            {/* App Store Links */}
                                            <div className="flex items-center gap-[1.5rem]">
                                                {/* App Store */}
                                                {card.appStore && (
                                                    <div className="flex items-center gap-[0.5rem]">
                                                        {card.appStore === "coming-soon" ? (
                                                            <div className="flex items-center gap-[0.5rem] opacity-50">
                                                                <svg className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                                </svg>
                                                                <span className="font-['Gilroy-Regular'] text-gray-500 text-[0.9rem]">Coming Soon</span>
                                                            </div>
                                                        ) : (
                                                            <a 
                                                                href={card.appStore} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-[0.5rem] hover:opacity-80 transition-opacity duration-300"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <svg className="w-[18px] h-[18px] text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                                                </svg>
                                                                <span className="font-['Gilroy-Regular'] text-blue-400 text-[0.9rem]">App Store</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Play Store */}
                                                {card.playStore && (
                                                    <div className="flex items-center gap-[0.5rem]">
                                                        {card.playStore === "coming-soon" ? (
                                                            <div className="flex items-center gap-[0.5rem] opacity-50">
                                                                <svg className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                                                </svg>
                                                                <span className="font-['Gilroy-Regular'] text-gray-500 text-[0.9rem]">Coming Soon</span>
                                                            </div>
                                                        ) : (
                                                            <a 
                                                                href={card.playStore} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-[0.5rem] hover:opacity-80 transition-opacity duration-300"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <svg className="w-[18px] h-[18px] text-green-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                                                </svg>
                                                                <span className="font-['Gilroy-Regular'] text-green-400 text-[0.9rem]">Play Store</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Read Story Button (for featured card) */}
                                        {index === 2 && (
                                            <div className="mt-[1rem] flex items-center justify-start">
                                                <button className="bg-white/10 hover:bg-white/20 transition-colors duration-300 px-[1.5rem] py-[0.7rem] flex items-center gap-[0.5rem] text-white font-['Gilroy-Medium'] text-[1rem] rounded-md">
                                                    Read story
                                                    <ArrowRight size={16} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const OurNiche = () => {
    return (
        <div id='our-niche' className='max-w-[1600px] mx-auto pb-[3rem] md:pb-[5rem] lg:pb-[7rem] px-[1rem] md:px-[2rem]'>
            <h2 className='text-center text-white text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] font-semibold mt-[3rem] md:mt-[4rem] lg:mt-[7rem] font-["Denton-Bold"] mb-[2rem] md:mb-[3rem] lg:mb-[4rem]'>Our Niche</h2>
            <div className='relative overflow-hidden'>
                {/* Background Image */}
                <div 
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{ 
                        backgroundImage: `url(${nicheImg})`,
                        transform: 'scaleX(-1)'
                    }}
                ></div>
                
                {/* Enhanced Overlay for better text readability */}
                <div className='absolute inset-0' style={{background: 'linear-gradient(to bottom right, rgba(17, 27, 33, 0.8), rgba(17, 27, 33, 0.75), rgba(17, 27, 33, 0.7))'}}></div>
                
                {/* Content */}
                <div className='relative z-10 p-[1.5rem] md:p-[2rem] lg:p-[3rem] pb-[2rem] md:pb-[2.5rem] lg:pb-[3.7rem]'>
                    <div className='text-center md:text-left max-w-[600px] md:max-w-none'>
                        <h2 className='text-white text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[4.7rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[0.5rem] md:mb-0'>Solve your largest</h2>
                        <h2 className='text-orange text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.8rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[1rem] md:mb-[1.5rem] lg:mb-[2rem]'>security headaches</h2>
                        <p className='text-white text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] max-w-xl mx-auto md:mx-0 font-thin leading-relaxed font-["Gilroy-Regular"]'>We create transformative digital solutions. from fintech
                            innovations to AI -driven automation, our solutions are
                            engineered for performance, scalability, and real-world impact.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] mt-[2rem] md:mt-[2.5rem] lg:mt-[3rem]'>
                        <div className='text-center md:text-left'>
                            <h2 className='text-white text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.7rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[0.8rem] md:mb-[1rem]'>Branding</h2>
                            <p className='text-white/90 text-[0.85rem] md:text-[0.9rem] lg:text-[1rem] leading-relaxed font-["Gilroy-Regular"]'>We create transformative digital
                                solutions. from fintech innovations to
                                AI-driven automation, our solutions are
                                engineered for performance, scalability,
                                and real-world impact.</p>
                        </div>

                        <div className='text-center md:text-left'>
                            <h2 className='text-white text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.7rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[0.8rem] md:mb-[1rem]'>Products</h2>
                            <p className='text-white/90 text-[0.85rem] md:text-[0.9rem] lg:text-[1rem] leading-relaxed font-["Gilroy-Regular"]'>We create transformative digital
                                solutions. from fintech innovations to
                                AI-driven automation, our solutions are
                                engineered for performance, scalability,
                                and real-world impact.
                            </p>
                        </div>

                        <div className='text-center md:text-left'>
                            <h2 className='text-white text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.7rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[0.8rem] md:mb-[1rem]'>Experiences</h2>
                            <p className='text-white/90 text-[0.85rem] md:text-[0.9rem] lg:text-[1rem] leading-relaxed font-["Gilroy-Regular"]'>We create transformative digital
                                solutions. from fintech innovations to
                                AI-driven automation, our solutions are
                                engineered for performance, scalability,
                                and real-world impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
import React, { useEffect, useRef, useState } from 'react'
import bg from '../assets/final i.jpg'
import plus from '../assets/plus.png'
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useContact } from '../hooks/contactHook';

const FEATURES = [
    {
        title: 'Fintech Innovation',
        content: 'We develop cutting-edge financial solutions that revolutionize transactions and user experience.',
    },
    {
        title: 'AI-Driven Automation',
        content: 'Harness the power of AI to automate workflows, reduce costs, and increase efficiency.',
    },
    {
        title: 'Web & Mobile Applications',
        content: 'From native apps to cross-platform experiences, we build mobile solutions that scale.',
    },
];

const CARDS = [
    {
        title: "Radio Maria",
        description:
            "We create transformative digital solutions from fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.",
    },
    {
        title: "Culinary Artist",
        description:
            "We create transformative digital solutions from fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.",
    },
    {
        title: "Neon Pay",
        description:
            "We create transformative digital solutions from fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.",
    },
]

const Services = () => {
    return (
        <section className='relative min-h-screen'>
            <img
                src={bg}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
            />
            <div className="absolute inset-0 bg-black/80 z-[-1] " />
            <div className='p-[2rem]'>
                <div>
                    <WhatWeDo />
                    <WhoWeServe />
                    <OurNiche />
                </div>
            </div>
        </section>
    )
}

const WhatWeDo = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const { toggleContact } = useContact();

    const openModal = (feature) => {
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
        <div id='what-we-do' className='max-w-[1300px] mx-auto'>
            <h2 className='text-center text-white text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[1] font-semibold mt-[4rem] lg:mt-[6rem] font-["Denton-Bold"]'>What We Do</h2>
            <div className='mt-[4rem]'>
                <h2 className='font-["Denton-Bold"] text-[2.5rem] md:text-[3.2rem] text-center lg:text-left lg:text-[5rem] leading-[1.1] text-orange font-bold'>We don't just</h2>
                <h2 className='font-["Denton-Bold"] text-[2.5rem] md:text-[3.2rem] text-center lg:text-left lg:text-[5rem] leading-[1.1] text-white font-bold'>Build Products</h2>
                <p className='font-["Gilroy-Regular"] text-center lg:text-left max-w-2xl text-white lg:text-[1.3rem] leading-[1.3] mt-[1rem]'>We create transformative digital solutions. from fintech
                    innovations to AI -driven automation, our solutions are
                    engineered for performance, scalability, and real-world impact.</p>
                <div className='mt-[3.7rem] lg:mt-[3rem] flex gap-[1rem] lg:justify-start justify-center group '>
                    <div className='flex items-center gap-[1rem] cursor-pointer' onClick={() => toggleContact()}>
                        <p className='text-orange text-[1.3rem] font-["Denton-Bold"] ml-[1.75rem] lg:ml-0'>Make the Switch</p>
                        <ArrowRight className='text-white size-7 animate-arrow-move' />
                    </div>
                </div>
            </div>
            <div className='mt-[4rem] lg:mt-[6rem] grid lg:grid-cols-3 gap-[1rem]'>
                {FEATURES.map((feature, index) => (
                    <div
                        key={index}
                        className='cursor-pointer flex flex-col justify-between h-[21rem] p-[1.2rem] bg-[#111] rounded-lg border border-orange/30 hover:border-orange transition-all duration-300'
                        onClick={() => openModal(feature)}
                    >
                        <p className='text-orange font-["Denton-Bold"] text-[1.3rem]'>{feature.title}</p>
                        <div className='p-[0.5rem] bg-orange w-fit ml-auto rounded-full flex justify-center items-center'>
                            <img src={plus} className='size-5' />
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedFeature && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-100 bg-black/80 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className={`relative w-full max-w-lg p-8 text-black bg-[#111] rounded-lg transform transition-all duration-300 m-[1rem] ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
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
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [cardsPerView, setCardsPerView] = useState(
        window.innerWidth <= 768 ? 1 : 3
    );

    const nextSlide = () => {
        if (currentIndex < CARDS.length - cardsPerView) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    useEffect(() => {
        if (!carouselRef.current) return;
        const cardWidth = carouselRef.current.offsetWidth / cardsPerView;
        carouselRef.current.scrollTo({
            left: currentIndex * cardWidth,
            behavior: 'smooth',
        });
    }, [currentIndex, cardsPerView]);

    useEffect(() => {
        const container = carouselRef.current;
        if (!container) return;

        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        let isHorizontalSwipe = false;

        const handleTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isHorizontalSwipe = false;
        };

        const handleTouchMove = (e: TouchEvent) => {
            endX = e.touches[0].clientX;
            endY = e.touches[0].clientY;

            const deltaX = Math.abs(endX - startX);
            const deltaY = Math.abs(endY - startY);

            if (deltaX > deltaY && deltaX > 10) {
                isHorizontalSwipe = true;
                e.preventDefault();
            }
        };

        const handleTouchEnd = () => {
            const deltaX = startX - endX;
            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) nextSlide();
                else prevSlide();
            }
        };

        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });
        container.addEventListener("touchend", handleTouchEnd);

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
            container.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentIndex, cardsPerView]);

    useEffect(() => {
        const onResize = () => {
            setCardsPerView(window.innerWidth <= 768 ? 1 : 3);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <div id='who-we-serve' className='max-w-[1300px] mx-auto border-b border-white/10 pb-[4rem] lg:pb-[7rem]'>
            <h2 className='font-["Denton-Bold"] text-center text-white text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[1] font-semibold mt-[4rem] lg:mt-[7rem]'>Who We Serve</h2>
            <div className='relative mt-[4rem] mx-auto'>
                <div
                    ref={carouselRef}
                    className="flex overflow-hidden max-w-[1200px] mx-auto"
                >
                    {CARDS.map((card, index) => (
                        <div
                            key={index}
                            className="w-full lg:w-1/3 shrink-0 px-[0.5rem] cursor-pointer"
                            style={{
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        >
                            <div className="flex flex-col p-6 border border-orange/40 hover:border-orange transition-all duration-300 ease-in-out rounded-lg h-[30rem] backdrop-blur-sm bg-black/30">
                                <h3 className="font-['Denton-Bold'] text-[2rem] text-center font-semibold text-orange">{card.title}</h3>
                                <p className="font-['Gilroy-Regular'] text-gray-300 mt-[2rem]">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="absolute left-0 z-20 p-2 -translate-y-1/2 rounded-full text-orange top-1/2 bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= CARDS.length - cardsPerView}
                    className="absolute right-0 z-20 p-2 -translate-y-1/2 rounded-full text-orange top-1/2 bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div >
    )
}

const OurNiche = () => {
    return (
        <div id='our-niche' className='max-w-[1300px] mx-auto border-b border-white/10 pb-[4rem] lg:pb-[7rem]'>
            <h2 className='text-center text-white text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[1] font-semibold mt-[4rem] lg:mt-[7rem] font-["Denton-Bold"]'>Our Niche</h2>
            <div className='mt-[4rem] bg-[#111]/50 p-[2rem] lg:p-[3rem] pb-[3.7rem] rounded-[2rem]'>
                <h2 className='text-white text-[1.7rem] md:text-[2.2rem] lg:text-[4rem] leading-[1.1] font-semibold font-["Denton-Bold"]'>Solve your largest</h2>
                <h2 className='text-orange text-[1.7rem] md:text-[2.2rem] lg:text-[4rem] leading-[1.1] font-semibold font-["Denton-Bold"]'>security headaches</h2>
                <p className='text-white lg:text-[1.2rem] max-w-xl font-thin mt-[1rem] font-["Gilroy-Regular"]'>We create transformative digital solutions. from fintech
                    innovations to AI -driven automation, our solutions are
                    engineered for performance, scalability, and real-world impact.</p>

                <div className='grid md:grid-cols-3 gap-[3rem] mt-[3rem]'>
                    <div>
                        <h2 className='text-orange text-[1.7rem] md:text-[2.2rem] lg:text-[2.7rem] leading-[1] font-semibold font-["Denton-Bold"]'>Branding</h2>
                        <p className='text-white mt-[1rem] font-["Gilroy-Regular"]'>We create transformative digital
                            solutions. from fintech innovations to
                            AI-driven automation, our solutions are
                            engineered for performance, scalability,
                            and real-world impact.</p>
                    </div>

                    <div>
                        <h2 className='text-orange text-[1.7rem] md:text-[2.2rem] lg:text-[2.7rem] leading-[1] font-semibold font-["Denton-Bold"]'>Products</h2>
                        <p className='text-white mt-[1rem] font-["Gilroy-Regular"]'>We create transformative digital
                            solutions. from fintech innovations to
                            AI-driven automation, our solutions are
                            engineered for performance, scalability,
                            and real-world impact.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-orange text-[1.7rem] md:text-[2.2rem] lg:text-[2.7rem] leading-[1] font-semibold font-["Denton-Bold"]'>Experiences</h2>
                        <p className='text-white mt-[1rem] font-["Gilroy-Regular"]'>We create transformative digital
                            solutions. from fintech innovations to
                            AI-driven automation, our solutions are
                            engineered for performance, scalability,
                            and real-world impact.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
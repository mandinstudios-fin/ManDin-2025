import React, { useEffect, useRef, useState } from 'react'
import bg from '../assets/final i.jpg'
import plus from '../assets/plus.png'
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from 'lucide-react'

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
    {
        title: "Digital Creators",
        description:
            "We create transformative digital solutions from fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.",
    },
    {
        title: "Tech Startups",
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
    return (
        <div className='max-w-[1300px] mx-auto'>
            <h2 className='text-center text-white text-[2rem] lg:text-[3rem] leading-[1] font-semibold mt-[6rem] font-["Denton-Bold"]'>What We Do</h2>
            <div className='mt-[6rem]'>
                <h2 className='font-["Denton-Bold"] text-[2.5rem] text-center lg:text-left lg:text-[5rem] leading-[1.1] text-orange font-bold'>We don't just</h2>
                <h2 className='font-["Denton-Bold"] text-[2.5rem] text-center lg:text-left lg:text-[5rem] leading-[1.1] text-white font-bold'>Build Products</h2>
                <p className='font-["Gilroy-Regular"] text-center lg:text-left max-w-2xl text-white text-[1.3rem] leading-[1.3] mt-[1rem]'>We create transformative digital solutions. from fintech
                    innovations to AI -driven automation, our solutions are
                    engineered for performance, scalability, and real-world impact.</p>
                <div className='mt-[6rem] lg:mt-[3rem] flex gap-[1rem] lg:justify-start justify-center group '>
                    <div className='flex items-center gap-[1rem] cursor-pointer'>
                        <p className='text-orange text-[1.3rem] font-["Denton"]'>Make the Switch</p>
                        <ArrowRight className='text-orange size-7 animate-arrow-move' />
                    </div>
                </div>
            </div>
            <div className='mt-[4rem] lg:mt-[6rem] grid lg:grid-cols-3 gap-[1rem]'>
                <div className='cursor-pointer flex flex-col justify-between h-[21rem] p-[1.2rem] bg-[#111] rounded-lg border border-orange/30 hover:border-orange transition-all duration-300'>
                    <p className='text-orange font-["Denton-Bold"] text-[1.3rem]'>Fintech Innovation</p>
                    <div className='p-[0.5rem] bg-orange w-fit ml-auto rounded-full flex justify-center items-center'>
                        <img src={plus} className='size-5' />
                    </div>
                </div>

                <div className='cursor-pointer flex flex-col justify-between h-[21rem] p-[1.2rem] bg-[#111] rounded-lg border border-orange/30 hover:border-orange transition-all duration-300'>
                    <p className='text-orange font-["Denton-Bold"] text-[1.3rem]'>AI-Driven Automation</p>
                    <div className='p-[0.5rem] bg-orange w-fit ml-auto rounded-full'>
                        <img src={plus} className='size-5' />
                    </div>
                </div>

                <div className='cursor-pointer flex flex-col justify-between h-[21rem] p-[1.2rem] bg-[#111] rounded-lg border border-orange/30 hover:border-orange transition-all duration-300'>
                    <p className='text-orange font-["Denton-Bold"] text-[1.3rem]'>Mobile & Applications</p>
                    <div className='p-[0.5rem] bg-orange w-fit ml-auto rounded-full'>
                        <img src={plus} className='size-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const WhoWeServe = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    const nextSlide = () => {
        if (currentIndex < CARDS.length - 3) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    useEffect(() => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.offsetWidth / 3
            carouselRef.current.scrollTo({
                left: currentIndex * cardWidth,
                behavior: "smooth",
            })
        }
    }, [currentIndex])

    return (
        <div className='max-w-[1300px] mx-auto'>
            <h2 className='font-["Denton-Bold"] text-center text-white text-[3rem] leading-[1] font-semibold mt-[12rem]'>Who We Serve</h2>
            <div className='relative mt-[4rem] mx-auto'>
                <div
                    ref={carouselRef}
                    className="flex overflow-hidden max-w-[1200px] mx-auto"
                >
                    {CARDS.map((card, index) => (
                        <div
                            key={index}
                            className="lg:w-1/3 shrink-0 px-[0.5rem] cursor-pointer"
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
                    disabled={currentIndex >= CARDS.length - 3}
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
        <div className='max-w-[1300px] mx-auto'>
            <h2 className='text-center text-white text-[3rem] leading-[1] font-semibold mt-[12rem] font-["Denton-Bold"]'>Our Niche</h2>
            <div className='mt-[4rem] bg-[#111]/50 p-[3rem] pb-[3.7rem] rounded-[2rem]'>
                <h2 className='text-white text-[4rem] leading-[1.1] font-semibold font-["Denton-Bold"]'>Solve your largest</h2>
                <h2 className='text-orange text-[4rem] leading-[1.1] font-semibold font-["Denton-Bold"]'>security headaches</h2>
                <p className='text-white text-[1.2rem] max-w-xl font-thin mt-[1rem] font-["Gilroy-Regular"]'>We create transformative digital solutions. from fintech
                    innovations to AI -driven automation, our solutions are
                    engineered for performance, scalability, and real-world impact.</p>

                <div className='grid grid-cols-3 gap-[3rem] mt-[3rem]'>
                    <div>
                        <h2 className='text-orange text-[2.7rem] leading-[1] font-semibold font-["Denton-Bold"]'>Branding</h2>
                        <p className='text-white mt-[1rem] font-["Gilroy-Regular"]'>We create transformative digital
                            solutions. from fintech innovations to
                            AI-driven automation, our solutions are
                            engineered for performance, scalability,
                            and real-world impact.</p>
                    </div>

                    <div>
                        <h2 className='text-orange text-[2.7rem] leading-[1] font-semibold font-["Denton-Bold"]'>Products</h2>
                        <p className='text-white mt-[1rem] font-["Gilroy-Regular"]'>We create transformative digital
                            solutions. from fintech innovations to
                            AI-driven automation, our solutions are
                            engineered for performance, scalability,
                            and real-world impact.
                        </p>
                    </div>

                    <div>
                        <h2 className='text-orange text-[2.7rem] leading-[1] font-semibold font-["Denton-Bold"]'>Experiences</h2>
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
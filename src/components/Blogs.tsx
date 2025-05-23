import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef, useState } from 'react'
import clsx from 'clsx'

const CARDS = [
    {
        title: 'Solve your largest 1',
        highlightedTitle: 'security headaches',
        description:
            'We create transformative digital solutions, from fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.',
    },
    {
        title: 'Solve your largest 2',
        highlightedTitle: 'security headaches',
        description:
            'We create transformative digital solutions, from fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.',
    },
    {
        title: 'Solve your largest 3',
        highlightedTitle: 'security headaches',
        description:
            'We create transformative digital solutions, from fintech innovations to AI-driven automation, our solutions are engineered for performance, scalability, and real-world impact.',
    },
]

const Blogs = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const touchStartX = useRef<number | null>(null)
    const touchEndX = useRef<number | null>(null)

    const startX = useRef<number | null>(null)
    const endX = useRef<number | null>(null)
    const isDragging = useRef(false)

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? CARDS.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === CARDS.length - 1 ? 0 : prev + 1))
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.changedTouches[0].clientX
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX
    }

    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const deltaX = touchStartX.current - touchEndX.current

            if (Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    handleNext()
                } else {
                    handlePrev()
                }
            }
        }

        touchStartX.current = null
        touchEndX.current = null
    }

    const startDrag = (x: number) => {
        startX.current = x
        isDragging.current = true
    }

    const endDrag = (x: number) => {
        endX.current = x
        isDragging.current = false
        if (startX.current !== null && endX.current !== null) {
            const deltaX = startX.current - endX.current
            if (Math.abs(deltaX) > 50) {
                deltaX > 0 ? handleNext() : handlePrev()
            }
        }
        startX.current = null
        endX.current = null
    }

    return (
        <section id='blogs' className='text-white bg-black'>
            <div className='max-w-[1280px] mx-auto mt-[4rem] pb-[4rem]'>
                <h2 className='text-center text-[2rem] md:text-[3rem] font-semibold font-["Denton-Bold"]'>Blogs</h2>

                <div className='relative flex items-center justify-center mt-16 overflow-hidden'>
                    <button
                        onClick={handlePrev}
                        className='absolute left-0 lg:left-[0rem] z-[50] bg-[#111] hover:bg-[#222] p-2 rounded-full text-white'
                        aria-label='Previous'
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className='relative flex items-center justify-center w-full h-[500px]'
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={(e) => startDrag(e.clientX)}
                        onMouseMove={(e) => {
                            if (isDragging.current) {
                                endX.current = e.clientX
                            }
                        }}
                        onMouseUp={(e) => endDrag(e.clientX)}
                        onMouseLeave={(e) => {
                            if (isDragging.current) endDrag(e.clientX)
                        }}
                    >
                        {CARDS.map((card, index) => {
                            let position = ''
                            let translate = 'translate-z-[-200px] scale-[0.75] opacity-60'

                            if (index === activeIndex) {
                                position = 'z-20 transform scale-100 translate-z-[0px] opacity-100'
                                translate = ''
                            } else if (index === (activeIndex + 1) % CARDS.length) {
                                position = 'z-10 transform translate-x-[150px] md:translate-x-[250px] lg:translate-x-[250px] rotate-y-[-20deg] opacity-20'
                            } else if (index === (activeIndex - 1 + CARDS.length) % CARDS.length) {
                                position = 'z-10 transform -translate-x-[150px] md:-translate-x-[250px] lg:-translate-x-[250px] rotate-y-[20deg] opacity-20'
                            } else {
                                position = 'hidden'
                            }

                            return (
                                <div
                                    onClick={() => setActiveIndex(index)}
                                    key={index}
                                    className={clsx(
                                        'absolute bg-[#111] p-8 rounded-lg border border-orange transition-all duration-500 ease-in-out cursor-pointer w-[300px] md:w-[400px] lg:w-[850px] lg:h-[500px] shadow-[0_20px_35px_rgba(0,0,0,0.9),0_14px_16px_rgba(0,0,0,0.1)]',
                                        position,
                                        translate
                                    )}
                                    style={{ perspective: '1000px' }}
                                >
                                    <div className='mb-6'>
                                        <h3 className='text-2xl font-["Denton-Bold"]'>{card.title}</h3>
                                        <h3 className='text-2xl text-orange font-["Denton-Bold"]'>
                                            {card.highlightedTitle}
                                        </h3>
                                    </div>

                                    <p className='mb-8 text-gray-400 font-["Gilroy-Regular"]'>{card.description}</p>

                                    <div className='flex justify-end'>
                                        <button
                                            className='p-2 transition-colors bg-transparent rounded-full hover:bg-[#222]'
                                            aria-label='Learn more'
                                        >
                                            <ArrowRight className='w-5 h-5 text-orange' />
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <button
                        onClick={handleNext}
                        className='absolute right-0 lg:right-[0rem] z-[50] bg-[#111] hover:bg-[#222] p-2 rounded-full text-white'
                        aria-label='Next'
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Blogs

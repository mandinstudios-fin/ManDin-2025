import { ArrowRight } from 'lucide-react'
import React from 'react'

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
    return (
        <section id='blogs' className='text-white bg-black'>
            <div className='max-w-[1280px] mx-auto py-[6rem] px-4'>
                <h2 className='text-center text-[3rem] leading-[1] font-semibold mt-[6rem] font-["Denton-Bold"]'>
                    Blogs
                </h2>

                <div className='mt-[4rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1rem]'>
                    {CARDS.map((card, index) => (
                        <div
                            key={index}
                            className='bg-[#111111] p-8 rounded-lg transition-all duration-300 hover:scale-[105%] md:hover:scale-[120%] cursor-pointer border border-transparent hover:border-orange'
                        >
                            <div className='mb-6'>
                                <h3 className='text-2xl font-medium font-["Denton-Bold"]'>{card.title}</h3>
                                <h3 className='text-2xl font-medium text-orange font-["Denton-Bold"]'>
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs

import FadeInOnScroll from "./FadeInOnScroll";

const OurNiche = () => {
    return (
        <FadeInOnScroll>
            <div id='our-niche' className='max-w-[1600px] mx-auto pb-[3rem] md:pb-[5rem] lg:pb-[7rem] px-[1rem] md:px-[2rem]'>
                <h2 className='text-center text-white text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] font-semibold mt-[3rem] md:mt-[4rem] lg:mt-[7rem] font-["Denton-Bold"] mb-[2rem] md:mb-[3rem] lg:mb-[4rem]'>Our Niche</h2>
                <div className='relative overflow-hidden'>
                    {/* Background Image */}
                    <div
                        className='absolute inset-0 bg-center bg-no-repeat bg-cover'
                        style={{
                            backgroundImage: `url(/bgimage.avif)`,
                            filter: 'blur(5px)',
                        }}
                    ></div>

                    {/* Enhanced Overlay for better text readability */}
                    <div className='absolute inset-0 bg-gradient-to-br from-black/90 to-black/70' ></div>

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
        </FadeInOnScroll>

    )
}

export default OurNiche;
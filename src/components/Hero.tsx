import React from 'react'
import { AuroraBackground } from './AuroraBackground'
import '../styles/animation.css'
import WaveSlideUp from './WaveSlideUp'

const Hero = () => {
    return (
        <AuroraBackground>
            <div className="flex items-center justify-center h-screen text-white">
                {/* <img className='absolute inset-0 w-full h-full' src='/bgimage.avif' />

                <div className='bg-[#0e0e0f] absolute w-full h-full' /> */}

                <div className='relative z-10 w-full mx-auto px-[0.5rem] sm:px-[1rem] md:px-[2rem] lg:px-[3rem] h-full flex flex-col justify-center'>
                    <div className={`text-center hero-text-container flex flex-col items-center`}>
                        <WaveSlideUp text={"Where Expertise Meets Artistry"} extraClassName={"text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-[1.1] font-['Denton-Bold'] font-extrabold text-white mb-[0.5rem] lg:mb-[1rem]"} />
                        <WaveSlideUp text={"You're Witnessing Brilliance Unfold."} extraClassName={"text-[1.4rem] sm:text-[1.7rem] md:text-[2.1rem] lg:text-[2.5rem] xl:text-[2.8rem] leading-[1.2] font-['Denton-Bold'] font-extrabold text-white mb-[1rem] lg:mb-[1.5rem]"} />

                        <WaveSlideUp text={" You're watching Master at Work"} extraClassName={"text-[0.85rem] sm:text-[0.95rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] leading-[1.4] font-['Gilroy-Regular'] text-white opacity-90"} />

                        {/* <h1 className={`reveal-slide-text text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] xl:text-[3.8rem] leading-[1.1] font-["Denton-Bold"] font-extrabold text-white mb-[0.5rem] lg:mb-[1rem]`}>
                            Where Expertise Meets Artistry
                        </h1>

                        <h2 className={`reveal-slide-text text-[1.4rem] sm:text-[1.7rem] md:text-[2.1rem] lg:text-[2.5rem] xl:text-[2.8rem] leading-[1.2] font-["Denton-Bold"] font-extrabold text-white mb-[1rem] lg:mb-[1.5rem]`}>
                            You're Witnessing Brilliance Unfold.
                        </h2>

                        <p className={`reveal-slide-text text-[0.85rem] sm:text-[0.95rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] leading-[1.4] font-["Gilroy-Regular"] text-white opacity-90`}>
                            You're watching Master at Work
                        </p> */}

                        <div className={`hero-button  flex justify-center mt-[2.3rem] font-["Gilroy-Regular"]`}>
                            <button

                                className='relative cursor-pointer px-[2rem] py-[0.5rem] lg:px-[3rem] lg:py-[0.7rem] border border-[#FFFFFFF] lg:text-[1.2rem] flex items-center gap-[0.5rem] bg-transparent text-white overflow-hidden shadow-[0_10px_25px_rgba(17,27,33,0.9),0_4px_6px_rgba(17,27,33,0.1)] group hover:border-white transform-none'
                            >
                                <span className='absolute inset-0 z-0 transition-transform duration-500 ease-out transform -translate-x-full bg-white group-hover:translate-x-0'></span>
                                <span className='relative z-10 transition-colors duration-300 group-hover:text-[#000000]'>Meet Us</span>
                                <span className='relative z-10 transition-colors duration-300 group-hover:text-[#000000]'>

                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuroraBackground>
    )
}

export default Hero
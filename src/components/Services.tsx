import { useEffect, useRef } from "react";
import { motion, useMotionTemplate } from "motion/react"
import { useScroll, useTransform } from "motion/react"
import { ArrowRight, ExternalLink } from 'lucide-react'

import cardStyles from '../styles/cardStyles.module.css'
import FadeInOnScroll from "./FadeInOnScroll";

const FEATURES = [
    {
        title: 'Fintech Innovation',
        content: 'We build next-generation financial platforms with seamless payment processing, digital wallets, and real-time transaction systems. Our solutions integrate advanced security protocols and regulatory compliance to transform how businesses handle financial operations.',
        video: 'videos/fintech.mp4',
    },
    {
        title: 'AI-Driven Automation',
        content: 'Transform your business processes with intelligent automation powered by machine learning and natural language processing. We develop custom AI solutions that reduce operational costs, enhance decision-making, and scale your business operations efficiently.',
        video: 'videos/ai.mp4',
    },
    {
        title: 'Web & Mobile Applications',
        content: 'Create powerful, scalable applications that deliver exceptional user experiences across all platforms. From progressive web apps to native mobile solutions, we build responsive, fast, and intuitive applications that drive user engagement and business growth.',
        video: 'videos/web.mp4',
    },
    {
        title: 'Information Security',
        content: 'Zero Trust is our strategy. We implement comprehensive cybersecurity frameworks that protect your digital assets with multi-layered defense systems, continuous monitoring, and advanced threat detection to ensure your business stays secure in an evolving threat landscape.',
        video: 'videos/is.mp4',
    },
    {
        title: 'Web3 & Blockchain',
        content: 'Enter the decentralized future with our blockchain development expertise. We create smart contracts, DeFi protocols, NFT platforms, and decentralized applications that leverage the power of distributed ledger technology for transparent and secure digital transactions.',
        video: 'videos/web3.mp4',
    },
];

const Services = () => {
    return (
        <section className='relative min-h-screen' style={{ backgroundColor: '#000000' }}>
            {/* Smooth gradient transition from Hero */}
            <div
                className="absolute top-0 left-0 w-full h-[200px] pointer-events-none z-0"
                style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,1) 100%)'
                }}
            />
            <div className='relative z-10 p-[2rem] max-w-[1300px] mx-auto'>
                <div>
                    <FadeInOnScroll>
                        <h2 className='text-center text-white text-[2rem] md:text-[3rem] lg:text-[3rem] leading-[1] font-semibold mt-[4rem] lg:mt-[6rem] font-["Denton-Bold"] relative z-10'>What We Do</h2>
                    </FadeInOnScroll>

                    <FadeInOnScroll>
                        <div className='mt-[4rem] relative z-10'>
                            <h2 style={{
                                // backgroundImage: 'url(https://img.freepik.com/premium-photo/beige-silk-fabric-texture-satin-fashion-background-content_125966-3504.jpg?w=1380)', // Replace with your actual image path
                                // backgroundSize: 'cover',
                                // backgroundRepeat: 'no-repeat',
                                // backgroundPosition: 'center',
                                // WebkitBackgroundClip: 'text',
                                // backgroundClip: 'text',
                                // WebkitTextFillColor: 'transparent',
                                // textShadow: '0px 4px 30px #6A6763'
                            }} className={`font-["Denton-Bold"] text-[2.5rem] md:text-[3.2rem] text-center lg:text-left lg:text-[5rem] leading-[1.1] text-orange font-bold`}>We don't just</h2>
                            <h2 className={`font-["Denton-Bold"] text-[2.5rem] md:text-[3.2rem] text-center lg:text-left lg:text-[5rem] leading-[1.1] text-white font-bold`}>Build Products</h2>
                            <p className={`font-["Gilroy-Regular"] text-center lg:text-left max-w-2xl text-white lg:text-[1.3rem] leading-[1.3] mt-[1rem]`}>We create transformative digital solutions. from fintech
                                innovations to AI -driven automation, our solutions are
                                engineered for performance, scalability, and real-world impact.</p>
                            <div className={`mt-[3.7rem] lg:mt-[3rem] flex gap-[1rem] lg:justify-start justify-center group `}>
                                <div className='flex items-center gap-[1rem] cursor-pointer' >
                                    <p className='text-white/70 text-[1.3rem] font-["Denton-Bold"] ml-[1.75rem] lg:ml-0'>Make the Switch</p>
                                    <ArrowRight className='text-white size-7 animate-arrow-move' />
                                </div>
                            </div>
                        </div>
                    </FadeInOnScroll>

                    <FadeInOnScroll>
                        <WhatWeDo />
                    </FadeInOnScroll>
                </div>
            </div>
        </section>
    )
}

const WhatWeDo = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    // useEffect(() => {
    //     const lenis = new Lenis()

    //     function raf(time) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf)
    //     }

    //     requestAnimationFrame(raf)
    // })

    return (
        <div ref={container} className={`relative`}>
            {
                FEATURES.map((feature, i) => {
                    const targetScale = 1 - ((FEATURES.length - i) * 0.05);
                    return <Card key={`p_${i}`} i={i} {...feature} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                })
            }
        </div>
    )
}

const Card = ({ i, title, content, video, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);
    const blurAmount = useTransform(scale, [0.8, 1], [10, 0], { clamp: true });
    const blur = useMotionTemplate`blur(${blurAmount}px)`;

    return (
        <div ref={container} className={`${cardStyles.cardContainer}`}>
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)`, }}
                className={`${cardStyles.card} bg-black border border-white/20 relative overflow-hidden`}
            >
                {/* Top edge - thin horizontal line */}
                <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent'></div>

                {/* Left edge - thin vertical line */}
                <div className='absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent'></div>

                {/* Bottom edge - thin horizontal line */}
                <div className='absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-white/20 to-transparent'></div>

                {/* Right edge - thin vertical line */}
                <div className='absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-transparent via-white/15 to-transparent'></div>

                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="absolute rounded-[1rem] inset-0 w-full h-full object-cover z-[0] opacity-30"
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

                <div className="grid grid-cols-1 gap-[1rem] text-white h-full z-[10] items-center">
                    <div className="flex flex-col items-center justify-center">
                        <p className="border-2 border-white/10 rounded w-fit px-[1.3rem] py-[0.7rem] text-[1.3rem] font-['Gilroy-Regular'] font-semibold text-white">0{i + 1}</p>
                        <h2 className="font-['Denton-Bold'] text-left text-[4rem] mt-[2rem] text-orange">{title}</h2>
                        <div className={cardStyles.body}>
                            <div className={cardStyles.description}>
                                <p className="font-['Gilroy-Regular'] text-white/80 max-w-xl mx-auto text-justify text-[1.2rem]">{content}</p>
                                <span>
                                    {/* <a href={url} target="_blank">See more</a> */}
                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
                                    </svg>
                                </span>
                            </div>

                        </div>
                    </div>
                    {/* <div className="flex items-center h-full">
                        <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="rounded-[1rem]"
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div> */}
                </div>
            </motion.div>
        </div>
    )
}

export default Services;
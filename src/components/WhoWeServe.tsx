import { ArrowRight, ExternalLink } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

const CARDS = [
    {
        title: "Radio Maria",
        description: "Digital transformation for religious broadcasting with modern streaming solutions and community engagement platforms.",
        // metrics: "Global Reach community",
        metrics: "50,000+ active listeners",
        website: "https://radiomaria.org",
        appStore: "https://apps.apple.com/app/radio-maria",
        playStore: "https://play.google.com/store/apps/details?id=com.radiomaria",
        image: '/rm.png'
    },
    {
        title: "Culinary Artist",
        description: "Revolutionary food delivery platform connecting local chefs with food enthusiasts through AI-powered matching.",
        metrics: "Hyderabad's first nutrition centric platform",
        impact: "80% faster delivery times",
        website: "https://culinaryartist.com",
        appStore: "https://apps.apple.com/app/culinary-artist",
        playStore: "https://play.google.com/store/apps/details?id=com.culinaryartist",
        image: '/chef.png'
    },
    {
        title: "Neon Pay",
        description: "Next-generation fintech solution providing seamless payment processing and digital wallet services.",
        metrics: "",
        impact: "upcoming Genz-friendly app",
        website: "https://neonpay.com",
        appStore: "coming-soon",
        playStore: "coming-soon",
        image: '/4.png'
    },
    {
        title: "OliviaFinance",
        description: "Innovative crypto gifting service enabling secure digital asset transfers with personalized experiences.",
        metrics: "$5M+ crypto gifts sent",
        impact: "95% user satisfaction rate",
        website: "https://oliviafinance.com",
        appStore: null,
        playStore: null,
        image: '/3.png'
    },
]

const WhoWeServe = () => {
    return (
        <div id='who-we-serve' className='max-w-[1400px] mx-auto pb-[3rem] md:pb-[5rem] lg:pb-[7rem] px-[1rem] md:px-[2rem]'>
            <div className='mt-[4rem] md:mt-[8rem] flex flex-col lg:gap-[3rem]'>

                <div className="sticky top-[8rem] flex justify-between">
                    <div className='lg:w-[32%] relative lg:pr-[2rem] text-center lg:text-left mt-[15rem]'>
                        <FadeInOnScroll>
                            <h2 className='font-["Denton-Bold"] text-white text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] font-semibold mb-[1rem]'>
                                Who We Serve
                            </h2>
                        </FadeInOnScroll>

                        <FadeInOnScroll>
                            <div className='mt-[1rem] md:mt-[2rem]'>
                                <p className='font-["Gilroy-Regular"] text-gray-300 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] leading-relaxed max-w-[500px] mx-auto lg:mx-0'>
                                    Transforming businesses across industries with innovative digital solutions and cutting-edge technology.
                                </p>
                            </div>
                        </FadeInOnScroll>
                    </div>

                    <img src="/cubes.png" className="w-[40rem] rotate-infinite" />
                </div>

                <div className='relative lg:w-[70%] lg:flex-1 flex flex-col gap-[1rem] justify-end items-end ml-auto mr-[6rem] -mt-[34rem]'>
                    {CARDS.map((card, i) => (
                        <div className="h-[58vh] sticky top-[22rem]">
                            <div className='rounded-[1rem] overflow-hidden relative group cursor-pointer transition-all duration-300 ease-in-out flex flex-col gap-[1rem] lg:gap-[0.5rem] bg-white/5 backdrop-blur-[20px] p-[1rem]'>
                                <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent'></div>
                                <div className='absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent'></div>
                                <div className='absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-white/20 to-transparent'></div>
                                <div className='absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-transparent via-white/15 to-transparent'></div>

                                <h3 className="flex items-center gap-[0.5rem] font-['Denton-Bold'] text-white text-[1.5rem] font-semibold group-hover:text-orange transition-colors duration-300 leading-tight">
                                    {CARDS[i].title}
                                    <span><ExternalLink size={18} className="flex-shrink-0 text-orange" /></span>
                                </h3>
                                <img src={CARDS[i].image} className="w-[100%] h-[15rem] object-cover rounded-lg mb-[1rem] lg:mb-0" />

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhoWeServe;
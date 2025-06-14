import { ArrowRight } from 'lucide-react'
import FadeInOnScroll from './FadeInOnScroll'

const BLOG_POSTS = [
    {
        title: "The Future of Fintech",
        subtitle: "Digital Innovation",
        description: "Exploring how blockchain technology and AI are revolutionizing financial services and creating new opportunities for businesses.",
        category: "Technology",
        readTime: "5 min read",
        number: "01"
    },
    {
        title: "AI-Driven Automation",
        subtitle: "Business Transformation",
        description: "How intelligent automation is reshaping industries and driving unprecedented efficiency in modern business operations.",
        category: "Innovation",
        readTime: "7 min read",
        number: "02"
    },
    {
        title: "Cybersecurity Excellence",
        subtitle: "Zero Trust Strategy",
        description: "Implementing comprehensive security frameworks that protect digital assets in an evolving threat landscape.",
        category: "Security",
        readTime: "6 min read",
        number: "03"
    },
    {
        title: "Web3 & Blockchain",
        subtitle: "Decentralized Future",
        description: "Understanding the potential of distributed ledger technology and its impact on transparent digital transactions.",
        category: "Blockchain",
        readTime: "8 min read",
        number: "04"
    },
    {
        title: "User Experience Design",
        subtitle: "Human-Centered Approach",
        description: "Creating intuitive digital experiences that drive engagement and deliver measurable business results.",
        category: "Design",
        readTime: "4 min read",
        number: "05"
    },
    {
        title: "Data Analytics Insights",
        subtitle: "Intelligence-Driven Decisions",
        description: "Leveraging advanced analytics to unlock business insights and drive strategic decision-making processes.",
        category: "Analytics",
        readTime: "6 min read",
        number: "06"
    }
]

const Blogs = () => {
    return (
        <FadeInOnScroll>
            <section id='blogs' className='text-white px-[1rem] md:px-[2rem]' style={{ backgroundColor: '#000000' }}>
                <div className='max-w-[1400px] mx-auto pb-[3rem] md:pb-[5rem] lg:pb-[7rem]'>
                    {/* Enhanced Header Section */}
                    <div className='mt-[4rem] md:mt-[6rem] lg:mt-[10rem] mb-[3rem] md:mb-[4rem] lg:mb-[6rem]'>
                        <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-[4rem]'>
                            {/* Left Side - Main Heading */}
                            <div className='lg:w-[60%] text-center lg:text-left'>
                                <h2 className='text-white text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] leading-[1.1] font-semibold font-["Denton-Bold"] mb-[0.5rem] lg:mb-[1rem]'>
                                    Insights &
                                </h2>
                                <h2 className='text-orange text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem] leading-[1.1] font-semibold font-["Denton-Bold"]'>
                                    Perspectives
                                </h2>
                            </div>

                            {/* Right Side - Description */}
                            <div className='lg:w-[35%] mt-[1.5rem] lg:mt-0 text-center lg:text-left'>
                                <p className='text-gray-300 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] leading-relaxed font-["Gilroy-Regular"] max-w-[400px] mx-auto lg:mx-0'>
                                    Stay ahead with our latest thoughts on technology trends, industry insights, and innovative solutions shaping the digital landscape.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Blog Grid */}
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  overflow-hidden shadow-lg gap-[1rem]'>
                    {BLOG_POSTS.map((post, index) => (
                    <div
                            key={index}
                            className='group backdrop-blur-sm p-[1.5rem] md:p-[2rem] lg:p-[2.5rem] hover:bg-[#1a2429] bg-white/10 transition-all duration-300 cursor-pointer border-r border-b border-white/5 last:border-r-0 md:last:border-r md:nth-last-child(2):border-r-0 lg:nth-last-child(2):border-r lg:last:border-r-0 min-h-[320px] md:min-h-[350px] lg:min-h-[380px] flex flex-col'
                            style={{ backgroundColor: 'rgba(21, 21, 21, 0.4)' }}
                        >
                            <div className='flex items-center justify-between mb-[1rem] md:mb-[1.5rem]'>
                                <span className='text-orange/60 text-[0.8rem] md:text-[0.9rem] font-["Gilroy-Medium"] tracking-wider'>
                                    {post.number}
                                </span>
                                <div className='flex items-center gap-[0.4rem] md:gap-[0.5rem]'>
                                    <span className='text-gray-400 text-[0.7rem] md:text-[0.8rem] font-["Gilroy-Regular"] uppercase tracking-wide'>
                                        {post.category}
                                    </span>
                                    <div className='w-[15px] md:w-[20px] h-[1px] bg-orange/30 group-hover:bg-orange/60 transition-colors duration-300'></div>
                                </div>
                            </div>

                            <h3 className='text-white text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold font-["Denton-Bold"] mb-[0.4rem] md:mb-[0.5rem] group-hover:text-orange transition-colors duration-300 leading-tight'>
                                {post.title}
                            </h3>

                            <h4 className='text-orange/80 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-medium font-["Gilroy-Medium"] mb-[0.8rem] md:mb-[1rem]'>
                                {post.subtitle}
                            </h4>

                            <p className='text-gray-400 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] leading-relaxed font-["Gilroy-Regular"] group-hover:text-gray-300 transition-colors duration-300 mb-[1rem] md:mb-[1.5rem] flex-grow'>
                                {post.description}
                            </p>

                            <div className='flex items-center justify-between mt-auto'>
                                <span className='text-gray-500 text-[0.75rem] md:text-[0.85rem] font-["Gilroy-Regular"]'>
                                    {post.readTime}
                                </span>
                                <div className='flex items-center gap-[0.4rem] md:gap-[0.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <span className='text-orange text-[0.8rem] md:text-[0.9rem] font-["Gilroy-Medium"]'>Read more</span>
                                    <ArrowRight size={12} className='text-orange md:w-[14px] md:h-[14px]' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

                    <div className='flex flex-col overflow-hidden shadow-sm gap-[1rem]'>
                        <div className='grid md:grid-cols-[1.5fr_1fr_1fr] gap-[1rem]'>
                            {
                                BLOG_POSTS.slice(0, 3).map((post, index) => (
                                    <div
                                        key={index}
                                        className='border border-white/20 rounded-[2rem] group backdrop-blur-xl bg-white/8 p-[1.5rem] md:p-[2rem] lg:p-[2.5rem] transition-all duration-300 cursor-pointer min-h-[320px] md:min-h-[350px] lg:min-h-[380px] flex flex-col shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent'
                                    >
                                        {/* Glass reflection effect */}
                                        <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent'></div>
                                        <div className='absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent'></div>

                                        <div className='flex items-center justify-between mb-[1rem] md:mb-[1.5rem] relative z-10'>
                                            <span className='text-orange/70 text-[0.8rem] md:text-[0.9rem] font-["Gilroy-Medium"] tracking-wider drop-shadow-sm'>
                                                {post.number}
                                            </span>
                                            <div className='flex items-center gap-[0.4rem] md:gap-[0.5rem]'>
                                                <span className='text-gray-300 text-[0.7rem] md:text-[0.8rem] font-["Gilroy-Regular"] uppercase tracking-wide drop-shadow-sm'>
                                                    {post.category}
                                                </span>
                                                <div className='w-[15px] md:w-[20px] h-[1px] bg-gradient-to-r from-orange/50 to-orange/70 shadow-sm'></div>
                                            </div>
                                        </div>

                                        <h3 className='text-white text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold font-["Denton-Bold"] mb-[0.4rem] md:mb-[0.5rem] group-hover:text-orange transition-colors duration-500 leading-tight drop-shadow-lg relative z-10'>
                                            {post.title}
                                        </h3>

                                        <h4 className='text-orange/90 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-medium font-["Gilroy-Medium"] mb-[0.8rem] md:mb-[1rem] drop-shadow-sm relative z-10'>
                                            {post.subtitle}
                                        </h4>

                                        <p className='text-gray-300 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] leading-relaxed font-["Gilroy-Regular"] group-hover:text-gray-200 transition-colors duration-500 mb-[1rem] md:mb-[1.5rem] flex-grow drop-shadow-sm relative z-10'>
                                            {post.description}
                                        </p>

                                        <div className='relative z-10 flex items-center justify-between mt-auto'>
                                            <span className='text-gray-400 text-[0.75rem] md:text-[0.85rem] font-["Gilroy-Regular"] drop-shadow-sm'>
                                                {post.readTime}
                                            </span>
                                            <div className='flex items-center gap-[0.4rem] md:gap-[0.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0'>
                                                <span className='text-orange text-[0.8rem] md:text-[0.9rem] font-["Gilroy-Medium"] drop-shadow-sm'>Read more</span>
                                                <ArrowRight size={12} className='text-orange md:w-[14px] md:h-[14px] drop-shadow-sm' />
                                            </div>
                                        </div>

                                        {/* Bottom glass reflection */}
                                        <div className='absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-white/20 to-transparent'></div>
                                        <div className='absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-transparent via-white/15 to-transparent'></div>
                                    </div>
                                ))

                            }
                        </div>

                        <div className='grid grid-cols-[1fr_1fr_1.5fr] gap-[1rem]'>
                            {
                                BLOG_POSTS.slice(3, 6).map((post, index) => (
                                    <div
                                        key={index}
                                        className='border border-white/20 rounded-[2rem] group backdrop-blur-xl bg-white/8 p-[1.5rem] md:p-[2rem] lg:p-[2.5rem] transition-all duration-300 cursor-pointer min-h-[320px] md:min-h-[350px] lg:min-h-[380px] flex flex-col shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent'
                                    >
                                        {/* Glass reflection effect */}
                                        <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent'></div>
                                        <div className='absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent'></div>

                                        <div className='flex items-center justify-between mb-[1rem] md:mb-[1.5rem] relative z-10'>
                                            <span className='text-orange/70 text-[0.8rem] md:text-[0.9rem] font-["Gilroy-Medium"] tracking-wider drop-shadow-sm'>
                                                {post.number}
                                            </span>
                                            <div className='flex items-center gap-[0.4rem] md:gap-[0.5rem]'>
                                                <span className='text-gray-300 text-[0.7rem] md:text-[0.8rem] font-["Gilroy-Regular"] uppercase tracking-wide drop-shadow-sm'>
                                                    {post.category}
                                                </span>
                                                <div className='w-[15px] md:w-[20px] h-[1px] bg-gradient-to-r from-orange/50 to-orange/70 shadow-sm'></div>
                                            </div>
                                        </div>

                                        <h3 className='text-white text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold font-["Denton-Bold"] mb-[0.4rem] md:mb-[0.5rem] group-hover:text-orange transition-colors duration-500 leading-tight drop-shadow-lg relative z-10'>
                                            {post.title}
                                        </h3>

                                        <h4 className='text-orange/90 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-medium font-["Gilroy-Medium"] mb-[0.8rem] md:mb-[1rem] drop-shadow-sm relative z-10'>
                                            {post.subtitle}
                                        </h4>

                                        <p className='text-gray-300 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] leading-relaxed font-["Gilroy-Regular"] group-hover:text-gray-200 transition-colors duration-500 mb-[1rem] md:mb-[1.5rem] flex-grow drop-shadow-sm relative z-10'>
                                            {post.description}
                                        </p>

                                        <div className='relative z-10 flex items-center justify-between mt-auto'>
                                            <span className='text-gray-400 text-[0.75rem] md:text-[0.85rem] font-["Gilroy-Regular"] drop-shadow-sm'>
                                                {post.readTime}
                                            </span>
                                            <div className='flex items-center gap-[0.4rem] md:gap-[0.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0'>
                                                <span className='text-orange text-[0.8rem] md:text-[0.9rem] font-["Gilroy-Medium"] drop-shadow-sm'>Read more</span>
                                                <ArrowRight size={12} className='text-orange md:w-[14px] md:h-[14px] drop-shadow-sm' />
                                            </div>
                                        </div>

                                        {/* Bottom glass reflection */}
                                        <div className='absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-white/20 to-transparent'></div>
                                        <div className='absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-transparent via-white/15 to-transparent'></div>
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>
            </section>
        </FadeInOnScroll>
    )
}

export default Blogs
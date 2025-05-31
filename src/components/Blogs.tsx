import { ArrowRight } from 'lucide-react'

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
        <section id='blogs' className='text-white bg-black px-[1rem] md:px-[2rem]'>
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 rounded-lg overflow-hidden shadow-lg'>
                    {BLOG_POSTS.map((post, index) => (
                        <div
                            key={index}
                            className='group bg-black/40 backdrop-blur-sm p-[1.5rem] md:p-[2rem] lg:p-[2.5rem] hover:bg-black/60 transition-all duration-300 cursor-pointer border-r border-b border-white/5 last:border-r-0 md:last:border-r md:nth-last-child(2):border-r-0 lg:nth-last-child(2):border-r lg:last:border-r-0 min-h-[320px] md:min-h-[350px] lg:min-h-[380px] flex flex-col'
                        >
                            {/* Post Number and Category */}
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

                            {/* Post Title */}
                            <h3 className='text-white text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] font-semibold font-["Denton-Bold"] mb-[0.4rem] md:mb-[0.5rem] group-hover:text-orange transition-colors duration-300 leading-tight'>
                                {post.title}
                            </h3>

                            {/* Post Subtitle */}
                            <h4 className='text-orange/80 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-medium font-["Gilroy-Medium"] mb-[0.8rem] md:mb-[1rem]'>
                                {post.subtitle}
                            </h4>

                            {/* Post Description */}
                            <p className='text-gray-400 text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] leading-relaxed font-["Gilroy-Regular"] group-hover:text-gray-300 transition-colors duration-300 mb-[1rem] md:mb-[1.5rem] flex-grow'>
                                {post.description}
                            </p>

                            {/* Read Time and CTA */}
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
                </div>

                {/* Enhanced Bottom CTA Section */}
                {/* <div className='mt-[3rem] md:mt-[4rem] lg:mt-[6rem] text-center'>
                    <div className='max-w-[500px] lg:max-w-[600px] mx-auto backdrop-blur-sm bg-white/5 p-[2rem] md:p-[2.5rem] lg:p-[3rem] rounded-lg border border-white/10'>
                        <h3 className='text-white text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem] font-semibold font-["Denton-Bold"] mb-[0.8rem] md:mb-[1rem] leading-tight'>
                            Want to Stay Updated?
                        </h3>
                        <p className='text-gray-300 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] leading-relaxed font-["Gilroy-Regular"] mb-[1.5rem] md:mb-[2rem] max-w-[400px] mx-auto'>
                            Subscribe to our newsletter for the latest insights and industry trends.
                        </p>
                        <button className='bg-orange hover:bg-orange/90 text-white px-[1.5rem] md:px-[2rem] py-[0.7rem] md:py-[0.8rem] font-["Gilroy-Medium"] transition-colors duration-300 flex items-center gap-[0.5rem] mx-auto text-[0.9rem] md:text-[1rem] rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'>
                            Subscribe Now
                            <ArrowRight size={14} className='md:w-[16px] md:h-[16px]' />
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Blogs

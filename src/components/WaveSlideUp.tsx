import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WaveSlideUp = ({ text, extraClassName }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const spans = containerRef?.current.querySelectorAll("span");

        gsap.fromTo(
            spans,
            {
                y: "100%",
                opacity: 0,
                blur: `10px`,
            },
            {
                y: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                blur: `0px`,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    const words = text.split(" ").map((word, idx) => (
        <span key={idx} className="inline-block mr-[0.5rem]">
            {word}
        </span>
    ));

    return (
        <div
            ref={containerRef}
            className="block overflow-hidden"
        >
            <p className={`flex flex-wrap ${extraClassName}`}>{words}</p>
        </div>
    );
};

export default WaveSlideUp;

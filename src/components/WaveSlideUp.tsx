import { useEffect, useRef } from "react";
import gsap from "gsap";

const WaveSlideUp = ({ text, extraClassName }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const spans = containerRef?.current.querySelectorAll("span");

        gsap.fromTo(
            spans,
            {
                y: "100%",
                opacity: 0,
            },
            {
                delay: 2.5,
                y: "0%",
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,

            }
        );
    }, []);

    const words = text.split(" ").map((word, idx) => (
        <span key={idx} className="inline-block mr-[0.5rem] will-change-transform will-change-opacity">
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

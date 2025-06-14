import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeInOnScroll = ({ children, delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                delay,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [delay]);

    return <div ref={ref}>{children}</div>;
};

export default FadeInOnScroll;
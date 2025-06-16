import { useEffect, useState } from 'react';

function Loader({ onFinish }) {
    const [centered, setCentered] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const [visibleLetters, setVisibleLetters] = useState([]);

    const letters = ['M', 'a', 'n', 'D', 'i', 'n', ' ', 'S', 't', 'u', 'd', 'i', 'o', 's'];

    useEffect(() => {
        // Random staggered opacity reveals
        letters.forEach((_, i) => {
            const randomDelay = Math.random() * 400;
            setTimeout(() => {
                setVisibleLetters(prev => [...prev, i]);
            }, randomDelay);
        });

        // Move to center after 500ms
        const centerTimeout = setTimeout(() => setCentered(true), 1000);

        // Slide up animation
        const slideTimeout = setTimeout(() => setSlideUp(true), 2000);

        // Finish callback
        const finishTimeout = setTimeout(() => onFinish?.(), 3000);

        return () => {
            clearTimeout(centerTimeout);
            clearTimeout(slideTimeout);
            clearTimeout(finishTimeout);
        };
    }, [onFinish]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-black z-50 transition-transform duration-700 ease-in-out ${slideUp ? '-translate-y-full' : ''
                }`}
        >
            <div className="relative flex items-center justify-center w-full h-full mx-auto">
                <div className="relative flex gap-2">
                    {letters.map((letter, i) => {
                        const isVisible = visibleLetters.includes(i);
                        return (
                            <span
                                key={i}
                                className={`text-white text-4xl  font-["Poppins"] inline-block transition-all duration-700 ease-in-out`}
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: centered
                                        ? 'translateX(0)'
                                        : `translateX(${(i - letters.length / 2) * 100}px)`
                                }}
                            >
                                {letter}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Loader;

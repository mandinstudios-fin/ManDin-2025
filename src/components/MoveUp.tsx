import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const MoveUp = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current

        if (element) {
            gsap.fromTo(
                element,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                }
            )
        }

        // Cleanup ScrollTrigger instance
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return <div ref={ref}>{children}</div>
}

export default MoveUp

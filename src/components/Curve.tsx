import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/svg.css'

const Curve = ({ isVisible }) => {

    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.1, ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <AnimatePresence>
            {isVisible &&
                <svg className="svgCurve">
                    <motion.path variants={curve} initial="initial" animate={isVisible ? "enter" : "exit"}></motion.path>
                </svg>
            }

        </AnimatePresence>

    )
}

export default Curve;
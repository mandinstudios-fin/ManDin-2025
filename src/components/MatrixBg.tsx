import React from 'react'

const MatrixBg = () => {
    return (
        <div className='absolute inset-0 opacity-10'>
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="big-grid" width="320" height="320" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="0" y2="1000" stroke="white" stroke-opacity="0.9" stroke-width="1" />
                        <line x1="80" y1="0" x2="80" y2="1000" stroke="white" stroke-opacity="0.9" stroke-width="1" />
                        <line x1="160" y1="0" x2="160" y2="1000" stroke="white" stroke-opacity="0.4" stroke-width="1" />
                        <line x1="240" y1="0" x2="240" y2="1000" stroke="white" stroke-opacity="0.4" stroke-width="1" />

                        <line x1="0" y1="0" x2="1000" y2="0" stroke="white" stroke-opacity="0.9" stroke-width="1" />
                        <line x1="0" y1="80" x2="1000" y2="80" stroke="white" stroke-opacity="0.9" stroke-width="1" />
                        <line x1="0" y1="160" x2="1000" y2="160" stroke="white" stroke-opacity="0.4" stroke-width="1" />
                        <line x1="0" y1="240" x2="1000" y2="240" stroke="white" stroke-opacity="0.4" stroke-width="1" />
                    </pattern>
                </defs>

                <rect width="100%" height="100%" fill="black" />
                <rect width="100%" height="100%" fill="url(#big-grid)" />
            </svg>
        </div>
    )
}

export default MatrixBg
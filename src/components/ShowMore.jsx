import React, { useEffect, useState } from 'react';
import { delay, motion } from 'framer-motion';

const ShowMore = () => {
    const [showIcon, setShowIcon] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 100) {
        setShowIcon(false);
        } else {
        setShowIcon(true);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);

        const handleClick = () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            });
            setShowIcon(false); 
            };
        
        const floatAnimation = {
            y: [0, -10, 0],
            };
        
        const floatTransition = {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            delay:2.5
        };
        
        if (!showIcon) return null;

    return ( 
    <div className="mt-8">
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer flex flex-col items-center space-y-0.5"   
            onClick={handleClick}
            animate={floatAnimation}
            transition={floatTransition}
            >
                <div>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-12 h-12 text-white" 
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12l-4 4-4-4m4-4v8"
                    />
                    </svg>
                </div>
        </motion.div>
    </div>


    </div>)
}

export default ShowMore;
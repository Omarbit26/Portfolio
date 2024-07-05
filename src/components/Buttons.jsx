import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Buttons = () => {

    return ( 
    <div className="mt-8">

        <div className='flex jusflex justify-between '>
            <motion.div
                className="mt-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            >   
                <div>
                    <a href="#contact" className="bg-[#086375] flex items-center mx-4 hover:bg-[#76c893] text-[#fefcfb] font-bold py-2 px-4 rounded ">
                        <span className='pr-3 text-lg'>Contact</span>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            className="my-second-svg-icon"
                        >
                            <path d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path>
                        </svg>
                    </a>
                </div>
            </motion.div>

            <motion.div
                className="mt-8"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }}
            >
                <div>
                    <a href="#projects" className=" bg-[#086375] flex items-center mx-4 hover:bg-[#76c893] text-[#fefcfb] font-bold py-2 px-4 rounded ">
                        <span className='pr-3 text-lg'>My work</span> 
                        <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="my-svg-icon"
                        >
                        <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                        </svg>
                    </a>
                </div>  
            </motion.div>
        </div>
    </div>)
}

export default Buttons;
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#050d21] fixed w-full z-10 top-0 shadow border-b-2 border-[#253b50]">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        
        <div className="pl-4 flex items-center">
            <a className="text-white text-base no-underline hover:no-underline font-extrabold text-xl" href="#home">
            &lt;Omar/&gt;
            </a>
        </div>
        
        <div className="block lg:hidden pr-4">
            <button onClick={toggleMenu} className="flex items-center p-1 text-white hover:text-gray-300 focus:outline-none">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
            </button>
        </div>

        
            <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'} lg:block mt-2 lg:mt-0 z-20`} id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline" href="#skills">Skills</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline" href="#projects">Projects</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-white no-underline" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;

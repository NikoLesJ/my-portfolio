import React, { useState } from 'react'
import logo from "../assets/logo2.png";
import { NAVIGATION_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState (false);

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if(targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
        setIsMobileOpen(false);
    }
  return (
    <div>
        <nav className='fixed left-0 right-0 top-4 z-50'>
            {/* Desctop menu */}
            <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-xl lg:flex'>
                <div className='flex items-center justify-between gap-6'>
                    <div>
                        <a href="#">
                            <img src={logo} width={150} alt="logo" />
                        </a>
                    </div>
                    <div>
                        <ul className='flex items-center gap-4'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index} className=''>
                                    <a href={item.href} className='text-sm hover:text-yellow-400' onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className='rounded-lg backdrop-blur-md lg:hidden'>
                <div className='flex items-center justify-between'>
                        <a href="#">
                            <img src={logo} width={90} alt="logo" className='m-2' />
                        </a>
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                                {isMobileOpen ? (
                                    <FaTimes className='m-2 h-6 w-5' />
                                ) : (
                                    <FaBars className='m-2 h-6 w-5' />
                                )}
                            </button>
                        </div>
                </div>
                {isMobileOpen && (
                    <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md'>
                        {NAVIGATION_LINKS.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='block w-full text-lg' onClick={(e) => handleLinkClick(e, item.href)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar
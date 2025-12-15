import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    

    useEffect(() => {
        const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(theme || (preferDarkMode ? 'dark' : 'light'))
      }, []);

    useEffect(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
    }, [theme])
    

    return (
        <motion.div 
        initial={{opacity:0, y: -50}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 0.8, ease:'easeOut'}}
        className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium  dark:bg-[#09072b]/70 '>

            {/* Logo */}
            <img
                className='w-32 sm:w-40'
                src={theme === 'dark' ? assets.logo_dark : assets.logo}
                alt="logo"
            />

            {/* Navigation Links */}
            <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary dark:max-sm:bg-[#09072b] max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all duration-300`}>

                <img
                    onClick={() => setSidebarOpen(false)}
                    src={assets.close_icon}
                    alt="close icon"    
                    role="button"
                    className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer'
                />

                <a onClick={(() => setSidebarOpen(false))} href="#" className='sm:hover:border-b text-[16px]'>Home</a>
                <a onClick={(() => setSidebarOpen(false))} href="#services" className='sm:hover:border-b text-[16px]'>Services</a>
                <a onClick={(() => setSidebarOpen(false))} href="#our-work" className='sm:hover:border-b text-[16px]'>Our Work</a>
                <a onClick={(() => setSidebarOpen(false))} href="#contact-us" className='sm:hover:border-b text-[16px]'>Contact Us</a>
            </div>

            {/* Right Side */}
            <div className='flex items-center gap-2 sm:gap-4'>

                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                <img
                    src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
                    onClick={() => setSidebarOpen(true)}
                    alt="menu icon"
                    className='w-8 sm:hidden'
                />

                <a
                    href="#contact-us"
                    className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'
                >
                    Connect <img src={assets.arrow_icon} width={14} alt="arrow icon" />
                </a>    
            </div>
        </motion.div>
    )
}

export default Navbar

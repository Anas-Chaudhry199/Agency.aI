import React, { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OurWork from './components/OurWork'
import Services from './components/Services'
import Team from './components/Team'
import TrustedBy from './components/TrustedBy'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import { useRef } from 'react'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  const outlineRef = useRef(null)
  const dotRef = useRef(null) 
  // custome cursor position tracking
  const mouse =useRef({x: 0, y: 0})
  const position =useRef({x: 0, y: 0})

  useEffect(() => {
    const handleMouseMove = (e) =>{
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () =>{
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }
      requestAnimationFrame(animate)
    }
    animate()

    return () =>{
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return (
    <div className="relative min-h-screen transition-all duration-500">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Team />
      <Contact />
      <Footer theme={theme} />

      {/* custome cursor */}
      <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border dark:border-white border-primary pointer-events-none z-[9999]' style={{transition: 'transform 0.1s ease-out'}}></div>

      {/* custome cursor dot */}
      <div ref={dotRef} className='fixed top-0 left-0 w-3 h-3 rounded-full dark:bg-white bg-primary pointer-events-none z-[9999]'></div>
    </div>
  ) 
}

export default App
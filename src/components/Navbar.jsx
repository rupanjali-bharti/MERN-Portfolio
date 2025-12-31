import React from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shawdow-lg'>
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <a href="#" className='text-3xl font-bold text-white'>
                    Rup 
                    <span className='text-purple'>Anjali</span>
                    <div className='w-4 h-4 bg-purple rounded-full'>

                    </div>
                </a>
            </div>

            <div className="hidden md:flex space-x-10">
                <a href="#" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Home</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>About</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Skills</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Project</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Experience</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
                <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                    <span>Contact</span>
                    <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
                </a>
            </div>

            <div className="md:hidden">
                {
                    showMenu ?
                    <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/> :
                    <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
                }
                
            </div>
        </div>

        {
            showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                    <a onClick={()=>setShowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Home</span>
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple 
                            scale-x-0 origin-left 
                            transition-transform duration-300
                            active:scale-x-100 md:group-hover:scale-x-100">
                        </span>
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href="#about" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>About</span>
                        <span className="absolute inset-0 bg-purple/20 rounded-lg 
                            scale-y-0 origin-bottom
                            transition-transform duration-300
                            active:scale-y-100 -z-10">
                        </span>

                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Skills</span>
                        <span className="absolute inset-0 bg-purple/20 rounded-lg 
                            scale-y-0 origin-bottom
                            transition-transform duration-300
                            active:scale-y-100 -z-10">
                        </span>
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href="#projects" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Project</span>
                        <span className="absolute inset-0 bg-purple/20 rounded-lg 
                            scale-y-0 origin-bottom
                            transition-transform duration-300
                            active:scale-y-100 -z-10">
                        </span>
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Experience</span>
                        <span className="absolute inset-0 bg-purple/20 rounded-lg 
                            scale-y-0 origin-bottom
                            transition-transform duration-300
                            active:scale-y-100 -z-10">
                        </span>
                    </a>
                    <a onClick={()=>setShowMenu(!showMenu)} href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple group'>
                        <span>Contact</span>
                        <span className="absolute inset-0 bg-purple/20 rounded-lg 
                            scale-y-0 origin-bottom
                            transition-transform duration-300
                            active:scale-y-100 -z-10">
                        </span>
                    </a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar

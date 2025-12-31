import React from 'react'
import { motion } from 'framer-motion'
import {assets} from '../assets/assets.js'
import { aboutInfo } from '../assets/assets.js'

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0 ,y:50}}
      whileInView={{opacity:1, y:0}}
      transition ={{duration:0.6, ease:'easeOut'}}
      id='about'
      className='py-20 bg-dark-200'
    >
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-bold text-center mb-4'>About <span className='text-purple'>Me</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

        {/*image and journey */}
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/*image */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img 
              initial={{opacity: 0 ,y:50}}
              whileInView={{opacity:1, y:0}}
              transition ={{duration:0.9, ease:'easeOut'}}
              className='w-full h-full object-cover'
              src={assets.myimg} alt="profile" />
          </div>

          {/*text content*/}
          <motion.div 
              initial={{opacity: 0 ,y:50}}
              whileInView={{opacity:1, y:0}}
              transition ={{duration:0.9, ease:'easeOut'}}
              className='md:w-1/2'>
                <div className="rounded-2xl p-8">
                  <h3 className='text-2xl font-semibold mb-6 text-purple'>My Journey</h3>
                  <p className='text-gray-300 mb-6'>I am a B.Tech CSE student passionate about technology and problem-solving. My journey started with learning programming and gradually expanded into areas like data structures, web development, and software design through academic and personal projects.</p>
                  <p className='text-gray-300 mb-12'>Over time, I have explored domains such as ML and GEN-AI, focusing on building practical and efficient solutions. I believe in continuous learning and enjoy experimenting with new technologies to grow.</p>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                      aboutInfo.map((data, index) =>(
                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                          <div className='text-purple text-4xl mb-4'>
                            <data.icon/>
                          </div>
                          <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                          <p className='text-gray-400'>{data.description}</p>
                        </div>

                      ))
                    }
                  </div>
                </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About

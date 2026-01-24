import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      id="experience"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto pb-5">
          My professional journey so far
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {workData.map((data, index) => (
              <div
                key={index}
                className="
                  relative pl-12 before:content-['']
                  before:absolute before:left-0 before:top-0 before:w-[2px]
                  before:h-full before:bg-purple cursor-pointer
                  hover:-translate-y-2 transition-all duration-300
                "
              >
                {/* timeline dot */}
                <div className="absolute left-[-0.5rem] top-0 w-6 h-6 rounded-full bg-purple"></div>

                {/* box */}
                <div className="bg-dark-300 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{data.role}</h3>
                    <span className="px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm">
                      {data.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm">{data.company}</p>

                  {/* location & mode */}
                  {(data.location || data.mode) && (
                    <p className="text-gray-500 text-xs mb-2">
                      {data.location} {data.mode && `• ${data.mode}`}
                    </p>
                  )}

                  {/* description */}
                  <p className="text-gray-300 mb-3">{data.description}</p>

                  {/* impact */}
                  {data.impact && (
                    <p className="text-purple text-sm font-medium mb-3">
                      {data.impact}
                    </p>
                  )}

                  {/* tech stack */}
                  {data.tech && (
                    <div className="flex flex-wrap gap-2">
                      {data.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-dark-100 text-gray-300 border border-purple/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work

/*
import React from 'react'

const ProjectCard = ({title, description, image, tech, demo, code}) => {
  const isDemoDisabled = demo === "#"
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover'/>
      <div className="p-6">
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4 overflow-y'>
            {tech.map((item, index)=> (
                <span key={index} className='px-3 py-1 bg-dark-200 rounded-full text-sm'>
                    {item}
                </span>
            ))}
        </div>
        <div className="flex gap-2">
          
            <a href={demo} target="_blank" rel="noopener noreferrer" className='flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Demo</a>
            <a href={code} target="_blank" rel="noopener noreferrer" className='flex-1 text-center px-4 py-2 border border-purple font-medium rounded-lg hover:bg-purple/20 transition duration-300'>Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
*/
import React from 'react'

const ProjectCard = ({ title, description, image, tech, demo, code }) => {

  const isDemoDisabled = demo === "#"
  const isCodeDisabled = code === "#"

  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover'/>

      <div className="p-6">
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span
              key={index}
              className='px-3 py-1 bg-dark-200 rounded-full text-sm'
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {/* Demo Button */}
          <a
            href={isDemoDisabled ? undefined : demo}
            target={isDemoDisabled ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`flex-1 text-center px-4 py-2 rounded-lg font-medium transition duration-300
              ${isDemoDisabled
                ? "bg-purple-400/60 text-purple-100 cursor-not-allowed pointer-events-none"
                : "bg-purple hover:bg-purple-700 cursor-pointer"
              }`}
          >
            View Demo
          </a>


        {/* Code Button */}
        <a
          href={isCodeDisabled ? undefined : code}
          target={isCodeDisabled ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={`flex-1 text-center px-4 py-2 rounded-lg font-medium transition duration-300
            ${isCodeDisabled
              ? "border border-gray-600 text-gray-400 cursor-not-allowed pointer-events-none"
              : "border border-purple hover:bg-purple/20 cursor-pointer"
            }`}
        >
          Code
        </a>

        </div>
      </div>
    </div>
  )
}

export default ProjectCard

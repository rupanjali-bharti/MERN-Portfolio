import React from 'react'
import {motion} from 'framer-motion'
import { FaMapMarker,FaPhone, FaEnvelope ,FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useRef } from 'react'


const Contact = () => {
    const formRef = useRef()

const sendEmail = (e) => {
  e.preventDefault()

  emailjs
    .sendForm(
      'service_bck9615',
      'template_gscvb4a',
      formRef.current,
      'HcwnhrlPOJtwS8oV8'
    )
    .then(
      () => {
        alert('Message sent successfully!')
        formRef.current.reset()
      },
      (error) => {
        alert('Failed to send message')
        console.error(error)
      }
    )
}
  return (
    <motion.div
    initial={{opacity: 0 ,y:50}}
    whileInView={{opacity: 1, y:0}}
    transition ={{duration: 1, ease:'easeOut'}}
    id='contact'
    className='py-20 bg-dark-200'
    >
      <div className="container mx-auto px-6">
        <h2 className='text-3xl font-bold text-center mb-4'>Get In <span className='text-purple'>Touch</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? let's talk!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto px-6">
  
    {/* LEFT SIDE – FORM */}
    <div>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <div>
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input  name="user_name" className="w-full bg-dark-300 rounded-lg px-4 py-3 outline-none" />
        </div>

        <div>
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input name="user_email" className="w-full bg-dark-300 rounded-lg px-4 py-3 outline-none" />
        </div>

        <div>
            <label className="block text-gray-300 mb-2">Your Message</label>
            <textarea name="message" className="w-full h-40 bg-dark-300 rounded-lg px-4 py-3 outline-none" />
        </div>

        <button className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300">
            Send
        </button>
        </form>
    </div>

    {/* RIGHT SIDE – CONTACT INFO */}
    <div className="space-y-8">

        {/* Location */}
        <div className="flex items-start">
        <FaMapMarker className="text-purple text-2xl mr-4 mt-1" />
        <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <p className="text-gray-400">Bangalore, Karnataka</p>
        </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
        <FaEnvelope className="text-purple text-2xl mr-4 mt-1" />
        <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-400">rupanjalibharti070@gmail.com</p>
        </div>
        </div>

        {/* Phone */}
        <div className="flex items-start">
        <FaPhone className="text-purple text-2xl mr-4 mt-1" />
        <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-400">+91-6362205994</p>
        </div>
        </div>

        {/* Social Icons */}
        <div>
        <h3 className="text-lg font-bold mb-4">Follow Me</h3>
        <div className="flex space-x-4">
            <a href='https://github.com/rupanjali-bharti' target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition">
            <FaGithub />
            </a>
            <a  href='https://www.linkedin.com/in/rupanjali-bharti-1a396427b' target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition">
            <FaLinkedin />
            </a>
            <a href='https://www.instagram.com/rupanjali_070_' target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition">
            <FaInstagram />
            </a>
        </div>
        </div>

    </div>
    </div>

    </motion.div>
  )
}

export default Contact

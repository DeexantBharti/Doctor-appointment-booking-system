import React from 'react'
import { assets } from '../assets/assets.js'

export default function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
              {/* left section */}
              <div>
        <img className='mb-5 w-40 ' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, at facere vero necessitatibus aliquam, fugiat illo numquam sit a tempora, itaque ratione. Officia molestias provident laudantium ex nulla, accusantium dolor?</p>
              </div>
              {/* center section */}
              <div className=' '>
      <p className='text-xl font-medium mb-5 '>Company</p>
      <ul className='flex flex-col gap-2 text-gray-600'>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Privacy Policy</li>
      </ul>
              </div>
              {/* right section */}
              <div>
   <p className='text-xl font-medium mb-5 '>Get In Touch</p>
   <ul className='flex flex-col gap-2 text-gray-600'>
    <li>+1-345-678-2347</li>
    <li>bhartideexant1234@gmail.com</li>
   </ul>
              </div>
        </div>
        <div>
            {/* copyright text */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ HealthTap - All Right Reserved</p>
        </div>
    </div>
  )
}

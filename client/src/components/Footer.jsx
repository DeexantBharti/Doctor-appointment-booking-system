import React from 'react'
import { assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'
import { useState } from "react";



export default function Footer() {

  return (  
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
              {/* left section */}
              <div>
        <img className='mb-5 w-40 ' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6 '>DocEasy is an intuitive and reliable doctor appointment management system that simplifies healthcare access for patients and doctors alike. Effortlessly book appointments, manage schedules, and view patient histories—all from a unified, user-friendly platform designed for smarter medical care.</p>
              </div>
              {/* center section */}
              <div className=' '>
      <p className='text-xl font-medium mb-5 '>Company</p>
      <ul className='flex flex-col gap-2 text-gray-600'>
        <NavLink to='/'><li className='underline hover:text-blue-600 inline-block'>Home</li></NavLink>
        <NavLink to='/about' onClick={() => scrollTo(0,0)}><li className='underline hover:text-blue-600 inline-block'>About</li></NavLink>
        <NavLink to='/contact' onClick={() => scrollTo(0,0)}><li className='underline hover:text-blue-600 inline-block'>Contact Us</li></NavLink>
       <li className='underline hover:text-blue-600 inline-block cursor-pointer'>Privacy Policy</li>
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
            <p className='py-5 text-sm text-center'>Copyright 2025@ DocEasy - All Right Reserved</p>
        </div>
    </div>
  )
}

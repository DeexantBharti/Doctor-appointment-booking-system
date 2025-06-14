import React from 'react'
import { assets } from '../assets/assets.js'

export default function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12 '>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
    
      <div className='flex flex-col justify-center gap-6 w-2/4 text-sm text-gray-600'>
        <p>DocEasy is a smart, user-friendly platform designed to streamline the process of booking medical appointments. Whether you are a patient seeking expert care or a doctor managing consultations, DocEasy ensures a seamless experience with real-time scheduling, digital patient records, and secure communication tools.</p>
        <p>DocEasy bridges the gap between patients and healthcare professionals by offering quick access to profiles, availability, and appointment history — all in one centralized system. From general checkups to specialist consultations, the platform supports personalized and efficient medical interactions.</p>
        <b className='text-gray-800'>Our vision</b>
        <p>At DocEasy, our vision is to revolutionize healthcare access through technology. We aim to eliminate wait times, improve patient engagement, and empower medical professionals with the tools they need to deliver better care. By simplifying the way appointments are booked and managed, DocEasy contributes to a more connected, efficient, and healthier future for all.</p>
      </div>
    </div>
    <div className='text-xl my-4 '>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US </span></p>
    </div>
    <div className='flex flex-col md:flex-row mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Efficeincy</b>
      <p>Streamline appointment bookings, reduce wait times, and manage consultations effortlessly with real-time scheduling and smart automation.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>Convenience</b>
    <p>Book, manage, and review appointments anytime, anywhere. Access all healthcare services through one easy-to-use platform.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>Personalization</b>
    <p>Receive tailored appointment reminders, doctor suggestions, and health updates based on your medical history and preferences.</p>
    </div>
    </div>
    </div>
  )
}

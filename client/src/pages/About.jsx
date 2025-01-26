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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores iusto quidem maxime minima blanditiis velit illum, vitae aliquam nobis. Pariatur, veniam? Quaerat enim reprehenderit iste neque, pariatur voluptatum corrupti cumque.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae necessitatibus doloremque numquam ducimus, quam excepturi tenetur voluptatibus sed officia. Esse delectus quidem officiis quos consectetur corporis ratione sit distinctio aspernatur fugiat autem perspiciatis, optio saepe dolor, accusantium repellendus. Eos.</p>
        <b className='text-gray-800'>Our vision</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, tempora sunt officia sint molestias exercitationem fugiat at commodi necessitatibus veritatis minima. Non neque excepturi esse, corporis tenetur sequi autem porro dolore, corrupti necessitatibus rem. Expedita?</p>
      </div>
    </div>
    <div className='text-xl my-4 '>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US </span></p>
    </div>
    <div className='flex flex-col md:flex-row mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Efficeincy</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia voluptate, fugiat impedit architecto voluptas.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>Convenience</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis reprehenderit voluptatum assumenda porro ipsum?</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>Personalization</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel maiores omnis quasi?</p>
    </div>
    </div>
    </div>
  )
}

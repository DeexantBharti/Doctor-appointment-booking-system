import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RelatedDoctors({speciality,docId}) {

    const {doctors} = useContext(AppContext)
   const [relDoc,setRelDoc] = useState([])
   const navigate = useNavigate()
   
   useEffect(() => {
//    if(doctors.length > 0 && speciality){
//     const 
//    }
if(doctors.length > 0 && speciality){
    const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id!=docId)
    setRelDoc(doctorsData)
}
   },[doctors,speciality,docId])

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
    <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
    <p className="sm:w-1/3 text-center text-sm">
      Simply browse through our extensive list of trusted doctors
    </p>

    <div className="w-full grid gap-4 pt-5 gap-y-6 px-3 sm:px-0 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {relDoc.slice(0, 5).map((item, index) => (
        <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
          className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer 
                     hover:translate-y-[-10px] transform duration-500"
          key={index}
        >
          <img className="bg-blue-50 w-full h-60 object-cover" src={item.image} alt="" />

          <div className="p-4">
          <div className={`flex items-center gap-2 text-sm ${item.available?'text-green-500':'text-gray-500'}`}>
                <p className={`w-2 h-2 ${item.available? 'bg-green-500' :'bg-gray-500'} rounded-full`}></p>
                <p>{item.available ? 'Available' : 'Not Available'} </p>
              </div>
            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>

    {/* <div className="mt-6">
      <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className="bg-blue-500 text-white px-12 py-3 rounded-full mt-10 cursor-pointer">More</button>
    </div> */}
  </div>
  )
}

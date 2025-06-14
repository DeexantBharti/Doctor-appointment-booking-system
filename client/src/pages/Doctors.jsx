import React from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Doctors() {
   
  const {speciality} = useParams();
  const [filterDoc,setFilterDoc] = useState([])
const [showFilter,setShowFilter] = useState(false)






  const navigate = useNavigate();

const {doctors} = useContext(AppContext)


  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
     applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600 '>Browse throught the doctors specialist </p>
      <div className='flex flex-col sm:flex-row item-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-600 text-white' : ''}`} onClick={() => setShowFilter(prev=> !prev)}>Filters</button>
        <div className={` flex-col gap-4 tex-sm text-gray-600 ${showFilter ? 'flex':'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Gynecologist</p>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>General Physician</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Dermatologist</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Pediatricians</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Neurologist</p>
          <p onClick={() => speciality === 'gastroenterologist' ? navigate('/doctors') : navigate('/doctors/gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}>Gastroenterologist</p>
        </div>
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-full grid gap-4 pt-5 gap-y-6 px-3 sm:px-0 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {
      filterDoc.map((item, index) => (
        <div onClick={() => navigate(`/appointment/${item._id}`)}
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
      ))
          }
        </div>
      </div>

    </div>
  )
}

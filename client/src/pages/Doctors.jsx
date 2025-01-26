import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'

export default function Doctors() {
   
  const {spciality} = useParams()
console.log(spciality)

const {doctors} = useContext(AppContext)

  return (
    <div>
      <p></p>
    </div>
  )
}

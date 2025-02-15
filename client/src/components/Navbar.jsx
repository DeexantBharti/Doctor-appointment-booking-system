import React, { useState } from 'react';
import { assets } from '../assets/assets.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

export default function Navbar() {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const logOut = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <div className='relative flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4 md:px-10'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="logo" />

      <ul className='hidden md:flex ml-8 items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-blue-500 w-3/5 hidden' />
        </NavLink>
        <a
          href="https://doceasy-panel.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 hover:bg-gray-100 transition-all'
        >
          Admin Panel
        </a>
      </ul>

      <div className='flex items-center ml-auto'>
        {token && userData ? (
          <div className='relative flex items-center gap-2 cursor-pointer group'
               onMouseEnter={() => setShowDropdown(true)}
               onMouseLeave={() => setShowDropdown(false)}>
            <div className='w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center'>
              <img className='w-12 rounded-full' src={userData.image} alt="Profile" />
            </div>
            <div className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-50 ${showDropdown ? 'block' : 'hidden'}`}>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={logOut} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className='text-white ml-4 mr-9 px-6 py-2 sm:px-6 sm:py-3 rounded-full font-light text-xs bg-blue-600 cursor-pointer'>
            Sign In
          </button>
        )}

        {/* Mobile menu icon with conditional positioning */}
        <img 
          onClick={() => setShowMenu(true)}
          className={`w-6 md:hidden absolute ${
            token && userData ? 'right-20' : 'right-4'
          } top-1/2 transform -translate-y-1/2`}
          src={assets.menu_icon} 
          alt="menu" 
        />

        {/* Mobile menu */}
        <div className={`${showMenu ? 'fixed w-1/2 h-full right-0' : 'h-0 w-0'} md:hidden top-0 z-20 overflow-y-auto bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'> <p className='px-4 py-2 rounded inline-block'>Home</p> </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
            <a
              href="https://doceasy-panel.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 hover:bg-gray-100 transition-all'
            >
              Admin Panel
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
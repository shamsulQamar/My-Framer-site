import React from 'react'
import { FaCopy } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between text-white flex-wrap flex-col md:flex-row  items-center' >
        <div className='flex justify-between mt-6 ms-16'>
          <ul className="flex">
            <li className="mr-20 font-medium text-xl ">SHAMS UL QAMAR</li>

            <li className="mr-10 font-bold mt-1 ">
              <NavLink to='about' className={({ isActive }) => {
                return isActive ? "text-indigo-400 border-b-2 border-indigo-400" :
                  "text-white";
              }} >ABOUT</NavLink>
            </li>
            <li className='font-bold mt-1 border-b-1  '>
              <NavLink to='work' className={({ isActive }) => {
                return isActive ? "text-indigo-400 border-b-2 border-indigo-400 " : "text-white";
              }}>WORK</NavLink>
            </li>
          </ul>
        </div>

        <div className='flex justify-between  flex-wrap me-[90px] mt-4'>
          <ul className='flex'>
            <li className='mr-6 font-medium  mt-2 text-lg'>LET'S CONNECT</li>
            <p className=' border-solid  bg-white rounded-full p-3 mt-1 
            font-bold text-black'> <a href="mailto:Shamsulqamar8979@gmail.com" target="_blank">Shamsulqamar8979@gmail.com</a></p>

          </ul>
        </div>
      </div>

    </>
  )
}

export default Navbar
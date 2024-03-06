import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between text-white' >
    <div className='flex justify-between mt-6 ms-16'>
  <ul className="flex">
    <li className="mr-20 font-medium text-xl ">SHAMS UL QAMAR</li>
    <li className="mr-10 font-bold mt-1 ">ABOUT</li>
    <li className='font-bold mt-1 border-b-2  '>WORK</li>
  </ul>
</div>

    <div className='flex justify-between me-[90px] mt-4'>  
<ul className='flex'>
    <li className='mr-6 font-medium  mt-2 text-lg'>LET'S CONNECT</li>
    <li className='bg-white max-h-20 w-120 font-bold p-2.5 rounded-full text-black'>shamsulqamar8979@gmail.com</li>

</ul>
    </div>
  </div>
 
  </>
  )
}

export default Navbar
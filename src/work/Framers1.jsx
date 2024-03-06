import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Framers1 = () => {

  useEffect( ()=> {
    Aos.init({duration:1000})
  },[])
  return (
   <>
 <div className='flex justify-center' >

 <img className=' max-w-full max-h-screen rounded-[44px] mt-20'data-aos="fade-up" src="images/Qamar2.jpeg" alt="" />

</div>
   </>
  )
}

export default Framers1
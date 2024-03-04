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

<img className='w-[515px] max-h-[750px] rounded-[44px] mt-20'data-aos="fade-up" src="	https://framerusercontent.com/images/cKlwxnwwJkxPfFnzsaHiqMqEdq4.png" alt="" />

</div>
   </>
  )
}

export default Framers1
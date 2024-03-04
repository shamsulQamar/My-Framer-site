
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';


function Framer2() {
    useEffect( ()=> {
        Aos.init({duration:1000})
      },[])
    return (
        < div>
            <div className='flex justify-center' >

                <img className='w-[515px] max-h-[750px] main-h-full my-10 rounded-[44px] '
                 data-aos="fade-up" src="https://framerusercontent.com/images/NJSwXyDlaUZn0O49iCxLH4yY.png?scale-down-to=1024	" alt=" Picture" />

            </div>

        </div>
    )
}

export default Framer2
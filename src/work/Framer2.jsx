
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

                <img className=' max-h-screen max-w-full my-10 rounded-[44px] '
                 data-aos="fade-up" src="https://s3.amazonaws.com/tf-nightingale/2020/11/003-Thinkful-Web-Software-Developer-Blog-1080x1080.png	" alt=" Picture" />

            </div>

        </div>
    )
}

export default Framer2
import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <>
        < div>
            <div className='flex justify-between text-white bg-black  px-28'>
                <div className=' pt-12'>
                    <p className="font-bold text-2xl  ">SHAMS UL QAMAR</p>
                    <p className='font-bold mt-4'>Senior Passionate Devloper Code with Experiences and Clarity </p>
                    <img className=' w-[350px] my-10 rounded-3xl' src="https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709510400&semt=ais" alt="" />
                </div>

                <div className=' ms-48 pt-24'>
                    <h1 className=' font-bold text-3xl '> Think I'd be a good fit for your team or project?  <br />Let's connect.</h1>

                    <button className=' border-solid  bg-white rounded-full p-3 mt-8 
                        font-bold text-black'> Shamsulqamar8979@gmail.com </button>

                    <div className='flex justify-stretch'>
                        <div className=' mt-14 font-bold'>
                            <h2 className=' text-xl'>SELECTED PROJECTS</h2>
                            <p className='mt-5'> Crosby: POS Tool Launch <br />
                                Norman & Co: Scout Product Launch <br />
                                Gardona: Online Store Redesign <br />
                                Carmine:Skycast App Launch
                            </p>
                        </div>
                        <div className=' ms-20'>
                            <h1 className='font-bold text-xl mt-14'>SOCIALS</h1>

                            <div className=' flex font-bold mt-6'>
                                <div>
                                    <button className='flex'> <FaLinkedin className=' m-1' />  Linkedin</button>
                                    <button className=' flex'> <FaGithub className=' m-1' /> GitHub</button>
                                </div>
                                <div className=' ms-4'>
                                    <button className=' flex'> <FaTwitter className=' m-1' />Twittwer</button>
                                    <button className='flex'> <FaFacebook className=' m-1' />
                                        FaceBook</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className=' py-5 text-white flex justify-between bg-slate-950'>
                <p className=' ms-32'>DESIGNED & BUILT FROM THE DESK OF  <span className=' font-medium'>SHAMS UL QAMAR</span></p>
                <p className=' me-32'>OLIO PORTFOLIO TEMPLATE (MIDNIGHT) - {year}©</p>
            </div>

        </div>
        </>
    )
}

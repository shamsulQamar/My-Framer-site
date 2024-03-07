import React from 'react'
import { FaLinkedin, FaGithub, FaCopy } from "react-icons/fa";
export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <>
            < div>
                <div className='flex justify-between text-white bg-black  px-28'>
                    <div className=' pt-8'>
                        <p className="font-bold text-2xl  ">SHAMS UL QAMAR</p>
                        <p className='font-bold mt-4'>Senior Passionate Devloper Code with Experiences and Clarity </p>
                        <img className=' w-[350px] my-10 rounded-3xl' src="https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709510400&semt=ais" alt="" />
                    </div>

                    <div className=' ms-48 pt-8'>
                        <h1 className=' font-bold text-3xl '> Think I'd be a good fit for your team or project?  <br />Let's connect.</h1>

                        <button className=' border-solid  bg-white rounded-full p-3 mt-20 
                        font-bold text-black'> <a href="mailto:Shamsulqamar8979@gmail.com" target="_blank">Shamsulqamar8979@gmail.com</a></button>
                        <div className='flex justify-stretch'>
                            <div className=' mt-20 font-bold'>
                                <h2 className=' text-xl'>SELECTED PROJECTS</h2>
                                <p className='mt-5'> Crosby: POS Tool Launch <br />
                                    Norman & Co: Scout Product Launch <br />
                                    Gardona: Online Store Redesign <br />
                                    Carmine:Skycast App Launch
                                </p>
                            </div>
                            <div className=' m-20'>
                                <h1 className='font-bold text-xl'>SOCIALS</h1>
                                <div className=' flex font-bold mt-8'>
                                    <div className='text-xl' >
                                        <p className='flex'><FaLinkedin className=' m-1' /><a href="https://www.linkedin.com/in/shams-ul-qamar-576399274/" target="_blank">Linkedin</a> </p>
                                        <p className=' flex mt-2'> <FaGithub className=' m-1' /><a href="https://github.com/shamsulQamar" target="_blank">GitHub</a></p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className=' py-4 text-white flex justify-between bg-slate-950'>
                    <p className=' ms-32'>DESIGNED & BUILT FROM THE DESK OF  <span className=' font-medium'>SHAMS UL QAMAR</span></p>
                    <p className=' me-32'>OLIO PORTFOLIO TEMPLATE (MIDNIGHT) - {year}©</p>
                </div>

            </div>
        </>
    )
}

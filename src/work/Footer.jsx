import React from 'react'

export default function Footer() {
    return (
        < div className=' mt-9'>
            <div className='flex justify-between text-white bg-black  px-28'>
                <div className=' pt-24'>
                    <p className="font-bold text-1xl  ">SHAMS UL QAMAR</p>
                    <p className='font-medium mt-4'>Senior UX Designer, currently crafting <br /> experiences at Crosby.</p>
                    <img className=' w-[350px] mt-10' src="https://framerusercontent.com/images/mUyphN6nQxd04jvFpDYvMIpz8Ig.png" alt="" />
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

                            <div className='font-bold mt-6'>
                                <button>Linkedin</button>
                                <button className=' ms-8'>Twitter</button> <br /> 
                                <button>Facebook</button>
                                <button className=' ms-8'>Istagram</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className=' py-4 text-white flex justify-between bg-slate-950'>
                <p className=' ms-32'>DESIGNED & BUILT FROM THE DESK OF  <span className=' font-medium'>DEVANTA EBISON</span></p>
                <p className=' me-32'>OLIO PORTFOLIO TEMPLATE (MIDNIGHT) - 2024©</p>
            </div>

        </div>
    )
}

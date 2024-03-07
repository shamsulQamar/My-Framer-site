import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './work/Footer'
import About from './components/about/About'
import Work from './work/Work'

function Routers() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>

                    <Route path='/about' element={<About />} />
                    <Route path='work' element={<Work />} />

                </Routes>
                <Footer />
            </BrowserRouter>

        </>
    )
}

export default Routers
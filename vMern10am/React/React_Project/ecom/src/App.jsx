import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import FeaturesPage from './pages/FeaturesPage'
import ShopPage from './pages/ShopPage'
import TestimonialPage from './pages/TestimonialPage'
import ErrorPage from './pages/ErrorPage'
import ContactUsPage from './pages/ContactUsPage'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='' element={<Home/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/features' element={<FeaturesPage/>}/>
                    <Route path='/shop' element={<ShopPage/>}/>
                    <Route path='/testimonial' element={<TestimonialPage/>}/>
                    <Route path='/contactus' element={<ContactUsPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

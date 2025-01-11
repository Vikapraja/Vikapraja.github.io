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

import AdminHome from './pages/admin/AdminHome'

import AdminMaincategory from './pages/admin/maincategory/AdminMaincategory'
import AdminCreateMaincategory from './pages/admin/maincategory/AdminCreateMaincategory'
import AdminUpdateMaincategory from './pages/admin/maincategory/AdminUpdateMaincategory'

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
                    
                    <Route path='/admin' element={<AdminHome/>}/>

                    <Route path='/admin/maincategory' element={<AdminMaincategory/>}/>
                    <Route path='/admin/maincategory/create' element={<AdminCreateMaincategory/>}/>
                    <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategory/>}/>

                    <Route path='/*' element={<ErrorPage/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

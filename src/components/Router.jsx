import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from '../pages/About'
import { Apartment } from '../pages/Apartment'
import { Error } from '../pages/Error'
import { Home } from '../pages/Home'
import { Footer } from './Footer'
import { Header } from './Header'

export function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route
                    path="/apartment/:apartmentId"
                    element={<Apartment />}
                ></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

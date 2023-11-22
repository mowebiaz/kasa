import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from '../pages/About'
import { Apartment } from '../pages/Apartment'
import { Home } from '../pages/Home'
import { Footer } from './Footer'
import { Header } from './Header'
import { ErrorComponent } from './ErrorComponent'

export function Router() {
    return (
        <BrowserRouter>
            <main>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/apartment/:apartmentId"
                        element={<Apartment />}
                    ></Route>
                    <Route path="*" element={<ErrorComponent />}></Route>
                </Routes>
                <Footer />
            </main>
        </BrowserRouter>
    )
}

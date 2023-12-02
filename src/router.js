import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { About } from './pages/About/About'
import { Apartment } from './pages/Apartment/Apartment'
import { Home } from './pages/Home/Home'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

export function Router() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/apartment/:apartmentId"
                        element={<Apartment />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

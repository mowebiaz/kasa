import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Apartment } from './pages/Apartment'
import { Home } from './pages/Home'
import { ErrorPage } from './pages/ErrorPage'

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

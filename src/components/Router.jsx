import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'
import { About } from '../pages/About'
import { Apartment } from '../pages/Apartment'
import { Home } from '../pages/Home'
import { ErrorPage } from '../pages/ErrorPage'

const router = createBrowserRouter([
    {
        path: '/',
        /* outlet: met les elements enfants à ce niveau là*/
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'about', element: <About /> },
            {
                path: 'apartment/:apartmentId',
                element: <Apartment />,
            },
        ],
    },
])

export function Router() {
    return <RouterProvider router={router} />
}

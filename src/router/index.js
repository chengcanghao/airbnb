import React from 'react'
import { Navigate } from 'react-router-dom'
const Home = React.lazy(() => { return import('@/views/home') })
const Detail = React.lazy(() => { return import('@/views/detail') })
const All = React.lazy(() => { return import('@/views/all') })
// import Home from '@/views/home'
// import All from '@/views/all'
// import Detail from '@/views/detail'
const routes = [
    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/detail',
        element: <Detail />
    },
    {
        path: '/all',
        element: <All />
    },


]

export default routes
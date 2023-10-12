import React from 'react'

import {BrowserRouter, Navigate, Routes as ReactDomRoutes, Route } from 'react-router-dom'

// Pages
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import AboutUs from '../pages/AboutUs/AboutUs'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Cart from '../pages/Cart/Cart'
import PrivateLayout from '../components/Layout/PrivateLayout'
import Layout from '../components/Layout/Layout'
import LoadingPage from '../pages/LoadingPage/LoadingPage'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactDomRoutes>
                {/* Home */}
                <Route 
                    path='/home' 
                    element={<ProtectedRoute redirectTo='/login'><PrivateLayout><Home/></PrivateLayout></ProtectedRoute>}>
                </Route>
                {/* Login */}
                <Route path='/login' element={<Layout><Login/></Layout>}></Route>
                <Route path='/loading' element={<Layout><LoadingPage/></Layout>}></Route>
                <Route index element={<Navigate to={'/loading'} />}/>
                <Route path='/register' element={<Layout><Register/></Layout>}></Route>
                <Route 
                    path='*' 
                    element={<ProtectedRoute redirectTo='/login'><Layout><PageNotFound/></Layout></ProtectedRoute>}>
                </Route>
                <Route path='/about-us' element={<ProtectedRoute redirectTo='/login'><PrivateLayout><AboutUs/></PrivateLayout></ProtectedRoute>}></Route>
                <Route path='/contact' element={<ProtectedRoute redirectTo='/login'><PrivateLayout><Contact/></PrivateLayout></ProtectedRoute>}></Route>
                <Route path='/products' element={<ProtectedRoute redirectTo='/login'><PrivateLayout><Products/></PrivateLayout></ProtectedRoute>}></Route>
                <Route path='/cart' element={<ProtectedRoute redirectTo='/login'><PrivateLayout><Cart/></PrivateLayout></ProtectedRoute>}></Route>
            </ReactDomRoutes>
        </BrowserRouter>
        
    )
}

export default Routes
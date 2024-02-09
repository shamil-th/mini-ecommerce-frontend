import React from 'react'
import Admin from './admin/Admin'
import { Routes, Route } from 'react-router-dom'
import Home from './customer/Home'
import AdminHome from './admin/AdminHome'
import ProductProfile from './admin/product profile/ProductProfile'
import ItemProfile from './customer/CustomerProducts/ItemProfile'
import Cart from './customer/cart/Cart'

const Layout = () => {
  return (
    <>
    <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin-home' element={<AdminHome/>}/>
        <Route path='/admin/product-profile' element={<ProductProfile/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/item-profile/:id' element={<ItemProfile/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default Layout
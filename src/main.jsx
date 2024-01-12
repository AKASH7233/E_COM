import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Route } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Product from './pages/Product.jsx'
import ShopContextProvider from './context/ShopContext.jsx'
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import ShopCategory from './components/ShopCategory/ShopCategory.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = '/' element={<App />}>
      <Route path = '' element={<Home/>} />
      <Route path = '/Men' element={<ShopCategory banner={men_banner} category='men'/>} />
      <Route path = '/Women' element={<ShopCategory banner={women_banner} category='women'/>} />
      <Route path = '/Kids' element={<ShopCategory banner={kid_banner} category='kid'/>} />
      <Route path = '/Cart' element={<Cart />} />
      <Route path = '/product' element={<Product />}>
      <Route path = ':ProductId' element={<Product/>} />
      </Route>
    </Route>
      <Route path = '/Login' element={<Login />} />
      <Route path = '/Register' element={<Register />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  </ShopContextProvider>
)

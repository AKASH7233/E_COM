import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Route } from 'react-router-dom'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Child from './pages/Child.jsx'
import Store from './pages/Store.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App />}>
      <Route path = '' element={<Home/>} />
      <Route path = '/Men' element={<Men />} />
      <Route path = '/Women' element={<Women />} />
      <Route path = '/Kids' element={<Child />} />
      <Route path = '/Store' element={<Store />} />
      <Route path = '/Login' element={<Login />} />
      <Route path = '/Register' element={<Register />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)

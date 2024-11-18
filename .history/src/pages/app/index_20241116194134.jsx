import { useRoutes, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'


import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/ > },
    { path: '/my-account', element: <MyAccount/ > },
    { path: '/my-order', element: <MyOrder/ > }
    { path: '/my-orders', element: <MyOrders/ > }
    { path: '/notFound', element: <NotFound/ > }
  ]);

  return routes;
} 

const App = () => {

  

  return (
    <BrowserRouter>
      <AppRoutes/ >
    </BrowserRouter>
  )
}

export default App

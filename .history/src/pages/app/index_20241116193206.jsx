import { useRoutes } from 'react-router-dom'
import { useState } from 'react'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'


import './App.css'

function App() {

  let routes = useRoutes([
    path: '/',
    element: <Home></Home>
  ])

  return (
    <>
      <div>
          <h1 className='bg-red-600'>hola locos</h1>
      </div>
     
    </>
  )
}

export default App

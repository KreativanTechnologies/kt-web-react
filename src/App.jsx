import React from 'react'


import Layout from './layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './app/Home/Home'
import About from './app/About/About'
import Web from './app/services/webDeveloment/page'
import AppDev from './app/services/Appdevelopment/page'
import Digital from './app/services/digital/page'
import Graphic from './app/services/ui-ux/page'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/aboutUs",
        element:<About/>
      },
      {
        path:"/services/webdevelopment",
        element:<Web/>
      },
      {
        path:"/services/appdevelopment",
        element:<AppDev/>
      },
      {
        path:"/services/digital",
        element:<Digital/>
      },
      {
        path:"/services/graphicdesgining",
        element:<Graphic/>
      },
 
  
    
    ]
  }
])

const App = () => {
  return (
    <div className=' '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

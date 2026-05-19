import React from 'react'


import Layout from './layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './app/Home/Home'
import About from './app/About/About'


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
      }
 
  
    
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

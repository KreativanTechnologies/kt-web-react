import React from 'react'


import Layout from './layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './app/Home/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  
    children: [
      {
        path: "/",
        element: <Home />
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

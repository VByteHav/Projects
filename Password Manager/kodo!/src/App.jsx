import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Manager from './Components/Manager'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Generator from './Components/Generator'
import Map from './Components/Map'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Map />
    },
    {
      path: "/passgen",
      element: <Generator />
    },

  ])


  return (
    <>
      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <RouterProvider router={router} />

    </>
  )
}

export default App

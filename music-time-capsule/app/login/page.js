import React from 'react'
import Login from '@/components/Login'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Login/>
    </div>
  )
}

export default page
export const metadata = {
  title: "Login - Music Time Capsule",
  description: "Login to your Spotify account to access your music journey.",

}
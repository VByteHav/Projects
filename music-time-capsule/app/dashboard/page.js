import React from 'react'
import Dashboard from '@/components/Dash'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <div>
            <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default page
export const metadata = {
  title: "Dashboard - Music Time Capsule",
  description: "Dashboard for your music journey. Here you can see your Music Stats",

}
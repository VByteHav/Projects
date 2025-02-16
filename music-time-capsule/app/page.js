import React from 'react'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
  <>
      <head>
        <meta property="og:title" content="Music Time Capsule - See your Music Journey" />
        <meta property="og:description" content="Music Time capsule allows you to see your Last 4 Weeks, Last 6 Months and All Time music experience. It's a personal music tracker that helps you  stay connected with your favorite artists and tracks." />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://music-time-capsule.vercel.app/" />
      </head>
      
     <body>
     <Navbar/>
     <Home />
     </body> 
      </>
    )
}

export default page
export const metadata = {
  title: "Music Time Capsule - See your Music Journey",
  description: "Music Time capsule allows you to see your Last 4 Weeks, Last 6 Months and All Time music experience. It's a personal music tracker that helps you  stay connected with your favorite artists and tracks.",

}
